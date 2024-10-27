"use client";

import React from 'react';
import { useFetchUsers } from '@/hooks/useUser';

const UserList: React.FC = () => {
  const { users, isLoading, isError } = useFetchUsers();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Oops! Something went wrong while fetching the data.</div>;

  return (
    <ul>
      {users?.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
    </ul>
  );
};

export default UserList;
