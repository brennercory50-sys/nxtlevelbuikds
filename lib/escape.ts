export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const UNSAFE_URL_PROTOCOLS = /^(javascript|data|vbscript|file):/i;

export function sanitizeUrl(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return '';
  const lower = trimmed.toLowerCase();
  if (UNSAFE_URL_PROTOCOLS.test(lower)) return '';
  try {
    new URL(trimmed);
    return trimmed;
  } catch {
    return '';
  }
}

export function escapeObject<T extends Record<string, unknown>>(obj: T): T {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    result[key] = typeof value === 'string' ? escapeHtml(value) : value;
  }
  return result as T;
}
