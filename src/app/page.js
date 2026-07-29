import React from 'react';
import { Plus } from 'lucide-react';

const HomePage = () => {

  const stats = [
    { value: '10', label: 'Total Friends' },
    { value: '3', label: 'On Track' },
    { value: '6', label: 'Need Attention' },
    { value: '12', label: 'Interactions This Month' },
  ];

  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
      
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
          Friends to keep close in your life
        </h1>

        {/* Subtitle */}
        <p className="text-slate-500 text-sm max-w-xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Add Friend Button */}
        <button className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white font-medium px-5 py-2.5 rounded-md mb-12">
          <Plus size={16} />
          <span>Add a Friend</span>
        </button>

        {/* Stat Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 flex flex-col items-center justify-center min-h-30">
              <span className="text-3xl md:text-4xl font-bold text-green-950 mb-2">
                {stat.value}
              </span>
              <span className="text-slate-500 text-sm font-medium">
                {stat.label}
              </span>
            </div>
          ))}
          </div>

      </div>
    </section>
  );
};

export default HomePage;