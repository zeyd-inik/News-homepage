import Hamburger from '.././assets/images/icon-menu.svg';
import Logo from '.././assets/images/logo.svg';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="Nav">
      <img
        src={Logo}
        alt="News homepage logo"
        className="logo"
      />

      <img
        src={Hamburger}
        alt="Menu icon"
        className="hamburger"
      />
    </nav>
  );
}
