import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const NavContainer = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.25rem 2.5rem;
  transition: all 0.3s ease;
  background: ${({ $scrolled }) => 
    $scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => 
    $scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${({ $scrolled }) => 
    $scrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none'};
  
  @media (max-width: 768px) {
    display: none;
  }
  
  @media (max-width: 1200px) {
    padding: 1rem 2rem;
  }
`;

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  
  @media (max-width: 1200px) {
    gap: 2rem;
  }
`;

const LanguageSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 2rem;
  
  @media (max-width: 1200px) {
    margin-left: 1.5rem;
  }
`;

const LanguageLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const LanguageDropdown = styled.select`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  border: 1px solid #ddd;
  background: #fafafa;
  color: ${({ theme }) => theme.colors.accent};
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  option {
    text-transform: uppercase;
    font-weight: 600;
  }
`;

const NavLink = styled.a<{ $active?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ $active, theme }) => 
    $active ? theme.colors.primary : theme.colors.accent};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.2s ease;
  cursor: pointer;
  padding: 0.5rem 0;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  @media (max-width: 1200px) {
    font-size: 0.85rem;
  }
`;

const FloatingNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'en' | 'ru' | 'hy'>('en');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    router.push(path);
  };

  const isActive = (path: string) => router.pathname === path;

  return (
    <NavContainer $scrolled={scrolled}>
      <NavContent>
        <Logo onClick={() => handleNavClick('/')}>
          Fabrica Group
        </Logo>
        
        <NavLinks>
          <NavLink 
            $active={isActive('/restaurants')} 
            onClick={() => handleNavClick('/restaurants')}
          >
            Our Restaurants
          </NavLink>
          <NavLink 
            $active={isActive('/menu')} 
            onClick={() => handleNavClick('/menu')}
          >
            Menu
          </NavLink>
          <NavLink 
            $active={isActive('/contact')} 
            onClick={() => handleNavClick('/contact')}
          >
            Contact Us
          </NavLink>
        </NavLinks>
        
        <LanguageSection>
          <LanguageDropdown
            value={lang}
            onChange={e => setLang(e.target.value as 'en' | 'ru' | 'hy')}
            aria-label="Select language"
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="hy">HY</option>
          </LanguageDropdown>
        </LanguageSection>
      </NavContent>
    </NavContainer>
  );
};

export default FloatingNavbar; 