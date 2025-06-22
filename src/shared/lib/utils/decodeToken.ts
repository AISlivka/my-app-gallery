import { jwtDecode } from 'jwt-decode';

export async function decodeToken<T>(token: string): Promise<T> {
  try {
    return jwtDecode<T>(token);
  } catch {
    throw new Error('Invalid JWT Token');
  }
}
