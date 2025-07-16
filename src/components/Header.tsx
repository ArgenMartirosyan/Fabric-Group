import React from 'react';
import styled, { css } from 'styled-components';
import Navbar from './Navbar';
import { useRouter } from 'next/router';

const HeaderContainer = styled.header<{ scrolled: boolean }>`
  width: 100%;
  background: ${({ scrolled, theme }) =>
    scrolled ? theme.colors.white : 'rgba(255,255,255,0.85)'};
  color: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  height: 72px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-sizing: border-box;
  transition: background 0.3s, box-shadow 0.3s;
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0 2px 12px rgba(0,0,0,0.08)' : 'none'};
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

const Burger = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 2.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
`;

const OutlinedButton = styled.a`
  border: 2px solid ${({ theme }) => theme.colors.accent};
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.button};
  padding: 0.5rem 1.3rem;
  font-size: 1.05rem;
  font-weight: 700;
  transition: background 0.15s, color 0.15s;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: #fff;
  }
`;

const FilledButton = styled.a`
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.radii.button};
  padding: 0.5rem 1.3rem;
  font-size: 1.05rem;
  font-weight: 700;
  margin-left: 0.3rem;
  transition: background 0.15s, color 0.15s;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-left: 0.7rem;
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.25rem;
  opacity: 0.85;
  transition: color 0.15s, opacity 0.15s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }
`;

const LanguageSwitcher = styled.div`
  cursor: pointer;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-left: 0.7rem;
`;

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <HeaderContainer scrolled={scrolled}>
        <Left>
          <Burger aria-label="Open navigation menu" onClick={() => setNavbarOpen(true)}>
            ☰
          </Burger>
          <Logo onClick={() => router.push('/')}>Fabrica Group</Logo>
        </Left>
        <Right>
          <OutlinedButton href="#">PRIVATE HIRE</OutlinedButton>
          <FilledButton href="#">BOOK A TABLE</FilledButton>
          <SocialRow>
            <SocialIcon href="#" title="Instagram" aria-label="Instagram">{/* Instagram SVG */} <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5 1a1 1 0 100 2 1 1 0 000-2z"/></svg></SocialIcon>
            <SocialIcon href="#" title="TikTok" aria-label="TikTok">{/* TikTok SVG */} <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 2A3.5 3.5 0 0021 5.5V7a5 5 0 01-5-5h1.5zM19 7.5V7a7 7 0 01-7 7v2a5 5 0 005-5h2a7 7 0 01-7 7v2a9 9 0 009-9h-2z"/></svg></SocialIcon>
          </SocialRow>
          <LanguageSwitcher>
            EN
          </LanguageSwitcher>
        </Right>
      </HeaderContainer>
      <Navbar open={navbarOpen} onClose={() => setNavbarOpen(false)} />
    </>
  );
};

export default Header;
