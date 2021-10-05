import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0';

function Profile() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    user ? (
      <div> Logged in as: {user.name} ({user.email}) </div>
    ) : <div>Not logged in</div>
  );
}

export default function ThanksHome() {
  return (
    <div className="container">
      <Head>
        <title>Thanks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Profile/>
        <h1 className="title">
          Thanks
        </h1>

        <div className="grid">
          <a href="/api/auth/login?returnTo=/thanks">Login</a>
        </div>
        <div className="grid">
          <a href="/api/auth/logout?returnTo=/thanks">Logout</a>
        </div>
      </main>
    </div>
  )
};
