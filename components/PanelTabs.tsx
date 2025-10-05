// components/ImageTabs.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HomeIcon, WindowIcon, FolderIcon, UsersIcon } from '@heroicons/react/24/outline';

interface TabData {
  id: string;
  label: string;
  imageUrl: string;
  alt: string;
  icon: React.ReactNode; // Add this line
}

const ImageTabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');
    
  const tabData: TabData[] = [
    {
      id: 'tab1',
      label: 'Console',
      imageUrl: '/console.png', // Replace with your actual images
      alt: 'Nature landscape',
      icon: <HomeIcon className="w-6 h-6" />,
    },
    {
      id: 'tab2',
      label: 'Dashboard',
      imageUrl: '/dashboard.png',
      alt: 'City skyline',
      icon: <WindowIcon className="w-6 h-6" />,
    },
    {
      id: 'tab3',
      label: 'File Manager',
      imageUrl: '/filemanager.png',
      alt: 'Wild animals',
      icon: <FolderIcon className="w-6 h-6" />,
    },
    {
      id: 'tab4',
      label: 'Subuser Manager',
      imageUrl: '/subusers.png',
      alt: 'Abstract art',
      icon: <UsersIcon className="w-6 h-6" />,
    },
  ];

  const activeTabData = tabData.find(tab => tab.id === activeTab);

  return (
    <div className="pt-20 w-full max-w-7xl mx-auto p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Meet the VoxelServers Panel</h1>
          <p className="text-gray-300">Manage, edit and control everything about your Minecraft server</p>
        </div>
      {/* Main container with radial gradient background and border */}
      <div 
        className="border-4 border-gray-800 rounded-4xl p-6 bg-gray-800"
      >
        {/* Tabs navigation */}
        <div className="md:flex space-x-2 mb-6">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-6 py-3 font-semibold w-full text-sm rounded-2xl border-2 transition-all duration-300
                ${activeTab === tab.id 
                  ? 'border-blue-500 bg-blue-500/20 text-gray-900 shadow-lg' 
                  : 'border-gray-300/20 bg-gray-800 text-white hover:bg-gray-700 hover:border-gray-200'
                }
              `}
            >
              <center><div className={`
                mb-2 transition-all duration-300
                ${activeTab === tab.id 
                  ? 'text-white transform scale-110' 
                  : 'text-gray-300 group-hover:text-white group-hover:transform group-hover:scale-110'
                }
              `}>
                {tab.icon}
              </div></center>
              <span className="text-md text-white">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="border-4 border-gray-300 rounded-lg overflow-hidden bg-white">
          {activeTabData && (
            <div className="relative aspect-video w-full">
              <Image
                src={activeTabData.imageUrl}
                alt={activeTabData.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageTabs;
