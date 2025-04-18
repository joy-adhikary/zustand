'use client';

import React from 'react';
import { Nav } from 'rsuite';
import { DateRangePicker } from 'rsuite';
import Link from 'next/link';

const Navbar = ({ activeKey }: { activeKey: string }) => {
  return (
    <>

    <Nav activeKey={activeKey}>
      <Nav.Item as={Link} href="/" active={activeKey === 'home'}>
        Home
      </Nav.Item>
      <Nav.Item as={Link} href="/about" active={activeKey === 'about'}>
        About
      </Nav.Item>
      <Nav.Item as={Link} href="/contact" active={activeKey === 'contact'}>
        Contact
      </Nav.Item>
      <Nav.Item as={Link} href="/services" active={activeKey === 'services'}>
        Services
      </Nav.Item>
    </Nav>
    </>
  );

};

export default Navbar;