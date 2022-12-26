import Image from 'next/image';
import React from 'react';

function Logo(props: any) {
  const { renderDefault } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        width={30}
        height={30}
        src="/avatar.jpg"
        className="rounded-full object-cover"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
