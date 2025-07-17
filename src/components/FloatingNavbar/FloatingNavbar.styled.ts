import styled from "styled-components";

export const NavContainer = styled.nav<{ $scrolled: boolean; $menuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.25rem 2.5rem;
  transition: all 0.3s ease;
  background: ${({ $scrolled }) => 
    $scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => 
    $scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${({ $scrolled }) => 
    $scrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none'};
transition: all 0.3s ease;
transform: ${({ $menuOpen }) => $menuOpen ? 'translateY(-100%)' : 'translateY(0)'};
opacity: ${({ $menuOpen }) => $menuOpen ? 0 : 1};
pointer-events: ${({ $menuOpen }) => $menuOpen ? 'none' : 'auto'};
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 1200px) {
    padding: 1rem 2rem;
  }
`;

export const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`;

export const HamburgerLine = styled.div`
  width: 24px;
  height: 2px;
  background-color: #333;
  transition: all 0.3s ease;
`;

export const Logo = styled.div`
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
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
  visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
  pointer-events: ${({ $isOpen }) => $isOpen ? 'auto' : 'none'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 101;
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background: #f8f6f3;
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.75rem;
  transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
  pointer-events: ${({ $isOpen }) => $isOpen ? 'auto' : 'none'};
  
  @media (min-width: 768px) {
    width: 320px;
    padding: 1.5rem 1rem;
  }
  
  @media (min-width: 1024px) {
    width: 350px;
    padding: 2rem 1.5rem;
  }
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
  
  @media (min-width: 1024px) {
    margin-bottom: 2.5rem;
  }
`;

export const MobileMenuClose = styled.button`
  background: #8B4513;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.4rem;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #A0522D;
  }
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
    padding: 0.5rem;
  }
`;

export const MobileMenuContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-height: 0;
  
  @media (min-width: 768px) {
    gap: 1rem;
  }
  
  @media (min-width: 1024px) {
    gap: 1.25rem;
  }
`;

export const PrimaryNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    gap: 0.625rem;
  }
  
  @media (min-width: 1024px) {
    gap: 0.75rem;
  }
`;

export const SecondaryNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    gap: 0.5rem;
    margin-top: 1.25rem;
  }
  
  @media (min-width: 1024px) {
    gap: 0.625rem;
    margin-top: 1.5rem;
  }
`;

export const MobileNavLink = styled.a<{ $primary?: boolean; $active?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ $primary }) => $primary ? '1rem' : '0.8rem'};
  font-weight: 600;
  color: #8B4513;
  text-decoration: ${({ $active }) => $active ? 'underline' : 'none'};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: ${({ $primary }) => $primary ? '0.5rem 0' : '0.25rem 0'};
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    color: #A0522D;
  }
  
  @media (min-width: 768px) {
    font-size: ${({ $primary }) => $primary ? '1.1rem' : '0.875rem'};
    padding: ${({ $primary }) => $primary ? '0.625rem 0' : '0.375rem 0'};
  }
  
  @media (min-width: 1024px) {
    font-size: ${({ $primary }) => $primary ? '1.25rem' : '0.95rem'};
    padding: ${({ $primary }) => $primary ? '0.75rem 0' : '0.5rem 0'};
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  
  @media (max-width: 1200px) {
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LanguageSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 2rem;
  
  @media (max-width: 1200px) {
    margin-left: 1.5rem;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LanguageDropdown = styled.select`
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

export const NavLink = styled.a<{ $active?: boolean }>`
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