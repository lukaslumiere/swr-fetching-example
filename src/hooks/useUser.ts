import useSWR from 'swr';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetcher = (url: string) => fetch(url).then(res => {
  if (!res.ok) {
    throw new Error('Erro ao buscar dados');
  }
  return res.json();
});

export const useUsers = () => {
  const { data, error } = useSWR<User[]>('https://jsonplaceholder.typicode.com/users', fetcher);
  const isLoading = !data && !error;

  return {
    users: data,
    isLoading,
    isError: error,
  };
};
