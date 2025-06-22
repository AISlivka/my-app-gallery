export function truncateString(str: string, length: number): string {
  if (!str) {
    return '';
  }

  return str.length > length ? str.substring(0, length).trim() + '...' : str;
}

export function parseNumber(value: string): number {
  return Number(value.replace(/\D/g, ''));
}
