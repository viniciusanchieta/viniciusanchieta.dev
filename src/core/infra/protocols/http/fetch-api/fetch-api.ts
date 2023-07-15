import type { FetchApiProps } from './interfaces';

export const fetchApi = async <T>({
  url,
  method,
  body,
  headers
}: FetchApiProps): Promise<T> => {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  });

  const data = response.json() as T;

  return data;
};
