import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className="flex items center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            height={40}
            width={40}
            src="/avatar.jpg"
            alt="logo"
          />
        </Link>
        <h1>TARO NGUYEN</h1>
      </div>
      <div>
        <Link
          href="https://www.papareact.com/universityofcode"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex -items-center rounded-full text-center"
        >
          Sign up to debate together more 😃
        </Link>
      </div>
    </header>
  );
}

export default Header;
