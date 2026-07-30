import React from 'react';
import Banner from '@/Component/Homepage/Banner';
import Stats from '@/Component/Homepage/Stats';
import FriendsList from '@/Component/Homepage/FriendsList';

const HomePage = () => {

  const stats = [
    { value: '10', label: 'Total Friends' },
    { value: '3', label: 'On Track' },
    { value: '6', label: 'Need Attention' },
    { value: '12', label: 'Interactions This Month' },
  ];

  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <Banner></Banner>
        <Stats stats={stats}></Stats>
        <FriendsList></FriendsList>
      </div>
    </section>
  );
};

export default HomePage;