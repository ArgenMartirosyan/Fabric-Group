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

export const HamburgerButton = styled.button<{ $isOpen: boolean }>`
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
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

export const HamburgerLine = styled.div<{ $isOpen: boolean; $lineIndex: number }>`
  width: 24px;
  height: 2px;
  background-color: #333;
  transition: all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: center;
  
  ${({ $isOpen, $lineIndex }) => {
    if ($isOpen) {
      if ($lineIndex === 0) {
        return `
          transform: translateY(6px) rotate(45deg);
        `;
      } else if ($lineIndex === 1) {
        return `
          opacity: 0;
          transform: scaleX(0);
        `;
      } else if ($lineIndex === 2) {
        return `
          transform: translateY(-6px) rotate(-45deg);
        `;
      }
    }
    return '';
  }}
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
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
  transition: opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${({ $isOpen }) => $isOpen ? '0s' : '0.1s'}, visibility 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${({ $isOpen }) => $isOpen ? '0s' : '0.1s'};
  z-index: 101;
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background: linear-gradient(135deg, #f8f6f3 0%, #fdfbf7 100%);
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.25rem;
  transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94), visibility 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${({ $isOpen }) => $isOpen ? '0s' : '0.3s'};
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.12);
  overflow-y: auto;
  visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
  pointer-events: ${({ $isOpen }) => $isOpen ? 'auto' : 'none'};
  border-radius: 0 2rem 2rem 0;
  
  @media (min-width: 768px) {
    width: 360px;
    padding: 2rem 1.5rem;
    border-radius: 0 2.5rem 2.5rem 0;
  }
  
  @media (min-width: 1024px) {
    width: 400px;
    padding: 2.5rem 2rem;
    border-radius: 0 3rem 3rem 0;
  }
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  flex-shrink: 0;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid rgba(139, 69, 19, 0.08);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, #8B4513, #D2691E);
    border-radius: 1px;
  }
  
  @media (min-width: 768px) {
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    
    &::after {
      width: 80px;
    }
  }
  
  @media (min-width: 1024px) {
    margin-bottom: 3.5rem;
    padding-bottom: 2.5rem;
    
    &::after {
      width: 100px;
    }
  }
`;

export const MobileMenuClose = styled.button`
  background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%);
  border: none;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(139, 69, 19, 0.3);
  
  &:hover {
    background: linear-gradient(135deg, #A0522D 0%, #CD853F 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 69, 19, 0.4);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(139, 69, 19, 0.3);
  }
  
  @media (min-width: 768px) {
    font-size: 1.3rem;
    width: 38px;
    height: 38px;
    padding: 0.6rem;
  }
`;

export const MobileMenuContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 0;
  
  @media (min-width: 768px) {
    gap: 1.25rem;
  }
  
  @media (min-width: 1024px) {
    gap: 1.5rem;
  }
`;

export const PrimaryNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  
  @media (min-width: 768px) {
    gap: 0.375rem;
  }
  
  @media (min-width: 1024px) {
    gap: 0.5rem;
  }
`;

export const SecondaryNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 0;
  pointer-events: auto;
  
  @media (min-width: 768px) {
    gap: 0.375rem;
  }
  
  @media (min-width: 1024px) {
    gap: 0.5rem;
  }
`;

export const MobileNavLink = styled.a<{ $primary?: boolean; $active?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.875rem;
  font-weight: 600;
  color: #8B4513;
  text-decoration: ${({ $active }) => $active ? 'underline' : 'none'};
  text-transform: uppercase;
  letter-spacing: 0.75px;
  padding: 0.75rem 0.875rem;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  pointer-events: auto;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(90deg, rgba(139, 69, 19, 0.1), rgba(210, 105, 30, 0.1));
    transition: width 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: #A0522D;
    transform: translateX(4px);
    
    &::before {
      width: 100%;
    }
  }
  
  &:active {
    transform: translateX(2px);
  }
  
  @media (min-width: 768px) {
    font-size: 0.95rem;
    padding: 0.875rem 1rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 1.05rem;
    padding: 1rem 1.25rem;
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

export const MobileLanguageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(139, 69, 19, 0.2);
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileLanguageDropdown = styled.select`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  border: 2px solid rgba(139, 69, 19, 0.3);
  background: rgba(255, 255, 255, 0.9);
  color: ${({ theme }) => theme.colors.accent};
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  min-width: 120px;
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(139, 69, 19, 0.1);
  }
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 255, 255, 1);
  }
  
  option {
    text-transform: uppercase;
    font-weight: 600;
    padding: 0.5rem;
  }
  
  @media (min-width: 768px) {
    display: none;
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