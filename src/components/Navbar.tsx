import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/router';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const DrawerOverlay = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.3);
  z-index: 200;
  animation: ${fadeIn} 0.2s;
`;

const Drawer = styled.aside<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 260px;
  background: #fff;
  box-shadow: 2px 0 8px rgba(0,0,0,0.1);
  z-index: 300;
  transform: translateX(${({ open }) => (open ? '0' : '-100%')});
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
`;

const NavLink = styled.a<{ active?: boolean }>`
  color: ${({ active, theme }) => (active ? theme.colors.primary : '#222')};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: color 0.15s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #222;
  align-self: flex-end;
  margin-bottom: 2rem;
  cursor: pointer;
`;

interface NavbarProps {
  open: boolean;
  onClose: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ open, onClose }) => {
  const router = useRouter();

  const handleNav = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <>
      <DrawerOverlay open={open} onClick={onClose} />
      <Drawer open={open}>
        <CloseBtn aria-label="Close navigation menu" onClick={onClose}>&times;</CloseBtn>
        <NavLink active={router.pathname === '/'} onClick={() => handleNav('/')}>Home</NavLink>
        <NavLink active={router.pathname === '/restaurants'} onClick={() => handleNav('/restaurants')}>Restaurants</NavLink>
        <NavLink active={router.pathname === '/about-us'} onClick={() => handleNav('/about-us')}>About Us</NavLink>
        <NavLink active={router.pathname === '/contact-us'} onClick={() => handleNav('/contact-us')}>Contact Us</NavLink>
      </Drawer>
    </>
  );
};

export default Navbar;
