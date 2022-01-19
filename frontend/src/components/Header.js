import React from 'react';

const Header = () => {
  return (
    <nav className='space-x-10 sticky top-0 z-50 bg-black bg-opacity-90'>
      <ul className='flex flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-end font-thin'>
        <li>
          <a href='#hero' className='py-1 px-5 rounded-lg hover-underline-animation'>
            Home
          </a>
        </li>
        <li>
          <a href='#projects' className='py-1 px-5 rounded-lg hover-underline-animation'>
            Projects
          </a>
        </li>
        <li>
          <a href='#contact' className='py-1 px-5 rounded-lg hover-underline-animation'>
            Contact
          </a>
        </li>
        <li>
          <a href='./Kevin Rufino Resume.pdf' target='_blank' rel='noreferrer' className='py-1 px-5 rounded-lg hover-underline-animation'>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
