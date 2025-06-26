"use client";
import Image from 'next/image';
import { File, Shield, Upload } from 'lucide-react';
import React, { useState } from 'react';

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: 'Upload Files',
      icon: Upload,
      path: '/upload'
    },
    {
      id: 2,
      name: 'Files',
      icon: File,
      path: '/files'
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: Shield,
      path: '/upgrade'
    }
  ];

  const [activeIndex, setActiveIndex]=useState(0);
  return (
    <div>
      <div className="p-5 border-b">
        <Image src="/logo.svg" width={150} height={100} alt="Logo" />
      </div>
      {menuList.map((item, index) => (
        <button key={item.id} type="button" className={`flex items-center gap-2 p-2 hover:bg-gray-100 w-full text-left ${activeIndex==index? 'bg-blue-50 text-blue-500':null}`} 
        onClick={()=>setActiveIndex(index)}>
          <item.icon className="w-5 h-5" />
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
}

export default SideNav;
