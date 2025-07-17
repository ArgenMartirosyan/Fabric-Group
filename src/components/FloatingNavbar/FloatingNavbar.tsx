import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { HamburgerButton, HamburgerLine, LanguageDropdown, LanguageSection, LeftSection, Logo, MobileMenu, MobileMenuClose, MobileMenuContent, MobileMenuHeader, MobileMenuOverlay, MobileNavLink, NavContainer, NavContent, NavLink, NavLinks, PrimaryNavLinks, SecondaryNavLinks } from './FloatingNavbar.styled';

const FloatingNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'en' | 'ru' | 'hy'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const mainLinks = [
    { label: 'Our Restaurants', path: '/restaurants' },
    { label: 'Menu', path: '/menu' },
    { label: 'Contact Us', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (path: string) => {
    router.push(path);
    setMobileMenuOpen(false); // Close mobile menu when navigating
  };

  const isActive = (path: string) => router.pathname === path;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <NavContainer $scrolled={scrolled} $menuOpen={mobileMenuOpen}>
        <NavContent>
          <LeftSection>
            <HamburgerButton 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <HamburgerLine />
              <HamburgerLine />
              <HamburgerLine />
            </HamburgerButton>
            <Logo onClick={() => handleNavClick('/')}>
              FABRICA GROUP
            </Logo>
          </LeftSection>
          
          <NavLinks>
            {mainLinks.map(({ label, path }) => (
              <NavLink key={path} $active={isActive(path)} onClick={() => handleNavClick(path)}>
                {label}
              </NavLink>
            ))}
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

      {/* Mobile Menu Overlay */}
      <MobileMenuOverlay 
        $isOpen={mobileMenuOpen} 
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu */}
      <MobileMenu $isOpen={mobileMenuOpen}>
        <MobileMenuHeader>
          <Logo onClick={() => handleNavClick('/')}>
            FABRICA GROUP
          </Logo>
          <MobileMenuClose onClick={toggleMobileMenu} aria-label="Close menu">
            ×
          </MobileMenuClose>
        </MobileMenuHeader>
        
        <MobileMenuContent>
          <PrimaryNavLinks>
            <MobileNavLink 
              $primary 
              onClick={() => handleNavClick('/restaurants')}
            >
              Our Restaurants
            </MobileNavLink>
            <MobileNavLink 
              $primary 
              onClick={() => {
                // For now, just close the menu
                // You can add actual navigation logic later
                setMobileMenuOpen(false);
              }}
            >
              Our Story
            </MobileNavLink>
          </PrimaryNavLinks>
          
          <SecondaryNavLinks>
            <MobileNavLink 
              onClick={() => {
                // For now, just close the menu for these items
                // You can add actual navigation logic later
                setMobileMenuOpen(false);
              }}
            >
              Gift Voucher
            </MobileNavLink>
            <MobileNavLink 
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Our Mission
            </MobileNavLink>
            <MobileNavLink 
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Join the Squadra
            </MobileNavLink>
            <MobileNavLink 
              onClick={() => handleNavClick('/contact')}
            >
              Contact Us
            </MobileNavLink>
          </SecondaryNavLinks>
        </MobileMenuContent>
      </MobileMenu>
    </>
  );
};

export default FloatingNavbar; 