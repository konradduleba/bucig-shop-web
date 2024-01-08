import axios, { AxiosError } from 'axios';

export const nonAuthorizeApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_URL,
});

nonAuthorizeApi.interceptors.response.use(
  (response) => {
    return response;
  },
  ({ response }: AxiosError) => {
    return Promise.reject(response ? response.data : response);
  },
);
