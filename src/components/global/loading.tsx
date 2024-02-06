import React from 'react';
import { CircleLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <CircleLoader color="#fab915" size={80} />
        <div className="mt-4 flex itemc-center justify-center">
          Breathe In..
        </div>
      </div>
    </div>
  );
};

export default Loading;
