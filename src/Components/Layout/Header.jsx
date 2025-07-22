/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaShoppingBag, FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import IconButtonWithBadge from '../Animated/Cart/IconButtonWithBadge';
import useThemeMode from '../hooks/useThemeMode';
import styles from './styles/Header.module.less';

// Emotion fade-in animation
const fadeIn = css`
  animation: fadeIn 0.35s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default function Header() {
  const { darkMode, toggleTheme } = useThemeMode(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    window.addEventListener('scroll', closeMenu);
    return () => {
      window.removeEventListener('resize', closeMenu);
      window.removeEventListener('scroll', closeMenu);
    };
  }, []);

  const getLinkClass = ({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`;

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        {/* Brand */}
        <NavLink to="/" className={getLinkClass} end>
          BLOOM'S TEA
        </NavLink>

        {/* Burger */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          &#9776;
        </button>

        {/* Nav Links */}
        <div
          className={`${styles.navWrapper} ${menuOpen ? styles.open : ''}`}
          css={menuOpen ? fadeIn : undefined}
        >
          <nav className={styles.navLinks}>
            <NavLink to="/teas" className={getLinkClass}>
              Teas
            </NavLink>
            <NavLink to="/extras" className={getLinkClass}>
              Extras
            </NavLink>
            <NavLink to="/about" className={getLinkClass}>
              About
            </NavLink>
            <NavLink to="/blog" className={getLinkClass}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={getLinkClass}>
              Contact
            </NavLink>
          </nav>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button onClick={toggleTheme} className={styles.modeToggle} aria-label="Toggle theme">
            {darkMode ? <BsSunFill /> : <BsMoonFill />}
          </button>

          <NavLink to="/login" className={getLinkClass}>
            <FaUser className={styles.icon} />
            <span>Log In</span>
          </NavLink>

          <NavLink to="/register" className={getLinkClass}>
            <FaUser className={styles.icon} />
            <span>Sign Up</span>
          </NavLink>

          <NavLink to="/cart" className={styles.cartLink}>
            <IconButtonWithBadge count={3} darkMode={darkMode} />
          </NavLink>
        </div>
      </div>

      {/* Social Media */}
      <div className={styles.bottomRow}>
        <div className={styles.socialIcons}>
          <FaFacebookF aria-label="Facebook" />
          <FaInstagram aria-label="Instagram" />
          <FaPinterestP aria-label="Pinterest" />
        </div>
      </div>
    </header>
  );
}
