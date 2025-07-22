import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { HamburgerButton, HamburgerLine, LanguageDropdown, LanguageSection, LeftSection, Logo, MobileMenu, MobileMenuClose, MobileMenuContent, MobileMenuHeader, MobileMenuOverlay, MobileNavLink, NavContainer, NavContent, NavLink, NavLinks, PrimaryNavLinks, SecondaryNavLinks } from './FloatingNavbar.styled';

const FloatingNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'en' | 'ru' | 'hy'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  const mainLinks = [
    { label: 'Our Restaurants', path: '/restaurants' },
    { label: 'Our Story', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
  ];

  // Shared language handling function
  const handleLanguageChange = (newLang: 'en' | 'ru' | 'hy') => {
    setLang(newLang);
    // Add any additional language change logic here (e.g., i18n, router locale change)
    console.log('Language changed to:', newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
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
              $isOpen={mobileMenuOpen}
            >
              <HamburgerLine $isOpen={mobileMenuOpen} $lineIndex={0} />
              <HamburgerLine $isOpen={mobileMenuOpen} $lineIndex={1} />
              <HamburgerLine $isOpen={mobileMenuOpen} $lineIndex={2} />
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
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleLanguageChange(e.target.value as 'en' | 'ru' | 'hy')}
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
          <SecondaryNavLinks>
            <MobileNavLink 
              onClick={() => handleNavClick('/restaurants')}
            >
              Our Restaurants
            </MobileNavLink>
            <MobileNavLink 
              onClick={() => handleNavClick('/about')}
            >
              Our Story
            </MobileNavLink>
            <MobileNavLink 
              onClick={() => handleNavClick('/mission')}
            >
              Our Mission
            </MobileNavLink>
            <MobileNavLink 
              onClick={() => handleNavClick('/join-our-team')}
            >
              Careers
            </MobileNavLink>
            <MobileNavLink 
              onClick={() => handleNavClick('/gallery')}
            >
              Gallery
            </MobileNavLink>
            <MobileNavLink 
              onClick={() => handleNavClick('/contact')}
            >
              Contact Us
            </MobileNavLink>
          </SecondaryNavLinks>
          
          {/* Mobile Language Switcher */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(139, 69, 19, 0.2)',
            pointerEvents: 'auto'
          }} className="mobile-language-section">
            <select
              value={lang}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleLanguageChange(e.target.value as 'en' | 'ru' | 'hy')}
              aria-label="Select language"
              style={{
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '0.75rem 1.25rem',
                borderRadius: '8px',
                border: '2px solid rgba(139, 69, 19, 0.3)',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#231F20',
                outline: 'none',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                minWidth: '120px',
                pointerEvents: 'auto'
              }}
            >
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="hy">HY</option>
            </select>
          </div>
        </MobileMenuContent>
      </MobileMenu>
    </>
  );
};

export default FloatingNavbar; 