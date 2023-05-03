// Basic fetcher function to consume by useSWR

export const fetcher = (url: string) => {
  return fetch(url).then((res) => res.json());
};
