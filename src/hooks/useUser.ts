import useSWR from 'swr';
import { fetchUserData } from '@/services/fetcher';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const useFetchUsers = () => {
  const { data, error } = useSWR<User[]>('https://jsonplaceholder.typicode.com/users', fetchUserData);

  return {
    users: data,
    isLoading: !data && !error,
    isError: !!error,
  };
};
