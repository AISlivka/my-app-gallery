export function buildUrlWithParams(url: string, params: Record<string, unknown>): string {
  const query = new URLSearchParams(params as Record<string, string>).toString();

  return `${url}?${query}`;
}
