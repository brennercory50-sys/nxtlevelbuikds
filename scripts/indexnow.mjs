// Submits every URL in the live sitemap to IndexNow (Bing, Yahoo, DuckDuckGo,
// Yandex and others share submissions). Run after a deploy:
//   node scripts/indexnow.mjs
// The key is public by design: search engines verify ownership by fetching
// https://www.nxtlevelbuilds.com/<key>.txt and checking it contains the key.

const HOST = 'www.nxtlevelbuilds.com';
const KEY = '7aa52c7cb906ea9e4f63f3ffe24cca69';
const KEY_URL = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

// Wait for the deploy that carries the key file to go live (Railway builds
// can take a few minutes after a push).
async function waitForKey(maxMinutes = 15) {
  const deadline = Date.now() + maxMinutes * 60_000;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(KEY_URL, { cache: 'no-store' });
      if (res.ok && (await res.text()).trim() === KEY) return;
    } catch {
      // Not reachable yet; retry below.
    }
    await new Promise(r => setTimeout(r, 30_000));
  }
  throw new Error(`Key file never became reachable at ${KEY_URL}`);
}

async function main() {
  await waitForKey();

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
