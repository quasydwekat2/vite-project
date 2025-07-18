import { NavLink } from 'react-router-dom';
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

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <nav className={styles.navLinks}>
          <NavLink to="/teas">Teas</NavLink>
          <NavLink to="/extras">Extras</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className={styles.logo}>BLOOM'S TEA</div>

        <div className={styles.actions}>
          <button onClick={toggleTheme} className={styles.modeToggle}>
            {darkMode ? <BsSunFill /> : <BsMoonFill />}
          </button>

          <NavLink to="/login" className={styles.iconText}>
            <FaUser className={styles.icon} />
            <span>Log In</span>
          </NavLink>

          <NavLink to="/cart">
            <div className={styles.cartIcon}>
              <FaShoppingBag className={styles.icon} />
              <span className={styles.cartCount}>0</span>
            </div>
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
