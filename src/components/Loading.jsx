// src/components/LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = () => {
  
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-[9999]">
      <div className="
          border-4 border-gray-200 border-t-blue-500
          rounded-full
          w-10 h-10
          animate-spin
        "></div>
    </div>
  );
};

export default LoadingSpinner;