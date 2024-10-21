'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smile, Send, Star } from 'lucide-react';
import Link from "next/link";
import Image from 'next/image';
import Modal from '@/components/commons/landing_page/Modal';
interface ProfileCircleProps {
  image: string;
  message?: string;
  angle: number;
  radius: number;
}

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

const ProfileCircle: React.FC<ProfileCircleProps> = ({ image, message, angle, radius }) => {
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute"
      style={{ 
        left: `calc(50% + ${x}px)`, 
        top: `calc(50% + ${y}px)`,
        transform: 'translate(-50%, -50%)'
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <img 
          src={image} 
          alt="Profile" 
          className="w-12 h-12 rounded-full border-2 border-white object-cover"
        />
        {message && (
          <div className="absolute -top-2 -right-2 bg-white rounded-full px-2 py-1 text-xs shadow">
            {message}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const LoadingAnimation: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-300"></div>
  </div>
);



const LandingPage = ({ searchParams }: SearchParamProps)=> {
  const [isLoading, setIsLoading] = useState(true);

  const show = searchParams?.show;
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const profileImages = [
    '/api/placeholder/50/50?text=Face1',
    '/api/placeholder/50/50?text=Face2',
    '/api/placeholder/50/50?text=Face3',
    '/api/placeholder/50/50?text=Face4',
    '/api/placeholder/50/50?text=Face5',
    '/api/placeholder/50/50?text=Face6',
  ];

  return (
    <AnimatePresence>
      {isLoading ? (
        <LoadingAnimation key="loading" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center min-h-screen  bg-gray-950 p-4 text-white"
        >
          {/* Logo at the top */}
          <div className="mb-8 text-white bg-white-900">
            <motion.img 
              src={"/images/logo1.png"}
              alt="Shika Logo"
              className="w-36 h-36 object-contain "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Main circular area */}
          <div className="relative aspect-square w-full max-w-[600px] mx-auto mb-8 bg-white bg-opacity-10 rounded-full p-4">
            <div className="absolute inset-0 bg-repeat rounded-full" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} />

            <motion.div 
              className="absolute inset-0 border-2 border-white border-opacity-30 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className="absolute inset-[15%] border-2 border-white border-opacity-30 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
            <motion.div 
              className="absolute inset-[30%] border-2 border-white border-opacity-30 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              
            </motion.div>

            {profileImages.map((image, index) => (
              <ProfileCircle 
                key={index}
                image={image}
                message={index % 2 === 0 ? "200" : undefined}
                angle={(Math.PI / 3) * index}
                radius={250}
              />
            ))}

            {/* Decorative Icons */}
            <motion.div className="absolute top-0 right-0 text-yellow-300"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Star size={24} />
            </motion.div>
            <motion.div className="absolute bottom-0 right-0 text-yellow-300"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Smile size={24} />
            </motion.div>
            <motion.div className="absolute bottom-0 left-0 text-yellow-300"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Send size={24} />
            </motion.div>
            <motion.div className="absolute top-0 left-0 text-yellow-300"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Star size={24} />
            </motion.div>
          </div>

          {/* Main text below the circle */}
          <div className="mb-8 text-center">
            <motion.h1 
              className="text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Build credit with group savings. Even without internet
            </motion.h1>
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Live in <span className='text-yellow-300'>Ghana</span>
            </motion.h2>
            <motion.p 
              className="mb-6 text-5xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              *920*157#
            </motion.p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <motion.div 
              className="space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link href="/?show=true" className="px-6 py-2 bg-yellow-300 text-violet-800 rounded-md font-bold hover:bg-yellow-400 transition-colors">Watch Video Demo</Link>
            </motion.div>
          </div>
        </motion.div>
      )}
 {show && <Modal />}
      
    </AnimatePresence>
  );
};

export default LandingPage;
