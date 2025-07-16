import React, { useState } from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ $isOpen }) => ($isOpen ? '280px' : '60px')};
  background: rgba(255, 255, 255, 0.98);
  border-right: 1px solid #eee;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.1);
  z-index: 1200;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: ${({ $isOpen }) => ($isOpen ? '250px' : '50px')};
    top: 0; /* Position at top on mobile since navbar is hidden */
    height: 100vh;
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  z-index: 1201;
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: ${({ theme }) => theme.colors.primary};
  }
  
  @media (max-width: 768px) {
    top: 0.5rem;
    right: 0.5rem;
    font-size: 1.2rem;
  }
`;

const SidebarContent = styled.div<{ $isOpen: boolean }>`
  padding: 2rem 1.5rem;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.3s ease;
  transition-delay: ${({ $isOpen }) => ($isOpen ? '0.1s' : '0s')};
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const LanguageSection = styled.div`
  margin-bottom: 2rem;
`;

const LanguageLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const LanguageDropdown = styled.select`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid #ddd;
  background: #fafafa;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
  outline: none;
  cursor: pointer;
  width: 100%;
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavigationSection = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(215, 38, 56, 0.07);
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 0.8rem;
  }
`;

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'ru' | 'hy'>('en');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContainer $isOpen={isOpen}>
      <ToggleButton onClick={toggleSidebar} aria-label="Toggle sidebar">
        {isOpen ? '×' : '☰'}
      </ToggleButton>
      
      <SidebarContent $isOpen={isOpen}>
        <Logo>Fabrica Group</Logo>
        
        <LanguageSection>
          <LanguageLabel>Language</LanguageLabel>
          <LanguageDropdown
            value={lang}
            onChange={e => setLang(e.target.value as 'en' | 'ru' | 'hy')}
            aria-label="Select language"
          >
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="hy">Հայերեն</option>
          </LanguageDropdown>
        </LanguageSection>
        
        <NavigationSection>
          <NavLink href="#private-hire">Private Hire</NavLink>
          <NavLink href="#our-story">Our Story</NavLink>
          <NavLink href="#our-restaurants">Our Restaurants</NavLink>
          <NavLink href="#menu">Menu</NavLink>
          <NavLink href="#our-mission">Our Mission</NavLink>
          <NavLink href="#contact-us">Contact Us</NavLink>
        </NavigationSection>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;