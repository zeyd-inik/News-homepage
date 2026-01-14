import Hamburger from '.././assets/images/icon-menu.svg';
import Logo from '.././assets/images/logo.svg';
import './Nav.css';

export default function Nav({ toggleMenu }) {
  return (
    <nav className="Nav">
      <img
        src={Logo}
        alt="News homepage logo"
        className="logo"
      />
      <ul>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>

      <img
        src={Hamburger}
        alt="Menu icon"
        className="hamburger"
        onClick={() => {
          toggleMenu();
        }}
      />
    </nav>
  );
}
