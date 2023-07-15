export interface FetchApiProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any; // eslint-disable-line
  headers?: any; // eslint-disable-line
}
