import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import IconButtonWithBadge from '../Animated/Cart/IconButtonWithBadge';
import {
  FaUser,
  FaShoppingBag,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from 'react-icons/fa';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import useThemeMode from '../hooks/useThemeMode';
import styles from './styles/Header.module.less';

export default function Header() {
  const { darkMode, toggleTheme } = useThemeMode(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkClass = ({ isActive }) =>
    `${styles.link} ${isActive ? styles.active : ''}`;

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          &#9776;
        </button>

        <nav
          className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(false)}
        >
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

        <NavLink to="/" className={getLinkClass} end>
          BLOOM'S TEA
        </NavLink>

        <div className={styles.actions}>
          <button onClick={toggleTheme} className={styles.modeToggle}>
            {darkMode ? <BsSunFill /> : <BsMoonFill />}
          </button>

          <NavLink to="/login" className={getLinkClass}>
            <FaUser className={styles.icon} />
            <span>Log In</span>
          </NavLink>

          
          <NavLink to="/cart" className={styles.cartLink}>
            <IconButtonWithBadge
              count={3}
              onClick={() => {}}
              darkMode={darkMode}
            />
          </NavLink>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.socialIcons}>
          <FaFacebookF />
          <FaInstagram />
          <FaPinterestP />
        </div>
      </div>
    </header>
  );
}
