import './MobileMenu.css';

import IconClose from '../assets/images/icon-menu-close.svg';

export default function MobileMenu({ toggleMenu }) {
  return (
    <div className="MobileMenu">
      <div className="transparent"></div>
      <div className="menu">
        <img
          src={IconClose}
          alt="close icon"
          onClick={() => {
            toggleMenu();
          }}
        />
        <nav>
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
