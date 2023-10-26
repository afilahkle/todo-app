import React, { FC } from 'react';
import Link from 'next/link';

interface navBarProps {}

const links = [
  { href: '/', label: 'Home' },
  { href: '/docs', label: 'Docs' },
  { href: '/todos', label: 'Todos' },
];
const NavBar: FC<navBarProps> = ({}) => {
  return (
    <header>
      <nav>
        <ul className='flex item-center justify-center'>
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
