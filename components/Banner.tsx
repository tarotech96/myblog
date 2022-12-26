import React from 'react';

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 md-10">
      <div>
        <h1 className="text-7xl">Taro Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to {''}
          <strong>my blog</strong> {''}
          which is created to share with you everything in my life. Hope you
          enjoy it!!!
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New funny contents | The latest in technology | The weekly news
      </p>
    </div>
  );
}

export default Banner;
