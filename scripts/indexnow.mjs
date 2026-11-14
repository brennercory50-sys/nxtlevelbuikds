// Submits every URL in the live sitemap to IndexNow (Bing, Yahoo, DuckDuckGo,
// Yandex and others share submissions). Run after a deploy:
//   node scripts/indexnow.mjs
// The key is public by design: search engines verify ownership by fetching
// https://www.nxtlevelbuilds.com/<key>.txt and checking it contains the key.

const HOST = 'www.nxtlevelbuilds.com';
const KEY = '7aa52c7cb906ea9e4f63f3ffe24cca69';
const KEY_URL = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

const VERSION_URL = `https://${HOST}/api/version`;
const EXPECTED = process.env.EXPECTED_COMMIT || '';
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function getJson(url) {
  try {
    const res = await fetch(url, { cache: 'no-store' });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

// Wait until the live site is running the commit being submitted, so the
// sitemap we read includes that commit's pages. The key file can't be used for
// this: it never changes, so it is already live on the previous deployment.
async function waitForDeploy(maxMinutes = 25) {
  if (!EXPECTED) {
    console.log('No EXPECTED_COMMIT set; submitting whatever is live now.');
    return;
  }
  const deadline = Date.now() + maxMinutes * 60_000;
  let sawCommit = false;
  while (Date.now() < deadline) {
    const v = await getJson(VERSION_URL);
    if (v && v.commit === EXPECTED) return;
    if (v && v.commit) sawCommit = true;
    await sleep(30_000);
  }
  // If the host never reports a commit at all, any deploy has finished by now:
  // submit rather than skip. If it reports a different commit, this one never
  // shipped, so submitting would send the wrong sitemap.
  if (!sawCommit) {
    console.log(`No commit reported at ${VERSION_URL} after ${maxMinutes} min; submitting the live sitemap.`);
    return;
  }
  throw new Error(`Commit ${EXPECTED} never went live at ${VERSION_URL}; nothing submitted.`);
}

async function checkKey() {
  const res = await fetch(KEY_URL, { cache: 'no-store' });
  if (!res.ok || (await res.text()).trim() !== KEY) {
    throw new Error(`Key file is not served correctly at ${KEY_URL}`);
  }
}

async function main() {
  await waitForDeploy();
  await checkKey();

  const xml = await (await fetch(SITEMAP_URL, { cache: 'no-store' })).text();
  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());
  if (urlList.length === 0) throw new Error('Sitemap had no URLs');

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_URL, urlList }),
  });

  // 200 = accepted, 202 = accepted and the key is still being verified.
  console.log(`IndexNow: submitted ${urlList.length} URLs, status ${res.status}`);
  if (res.status !== 200 && res.status !== 202) {
    console.error(await res.text());
    process.exit(1);
  }
}

main().catch(err => {
  console.error(err.message);
  process.exit(1);
});
