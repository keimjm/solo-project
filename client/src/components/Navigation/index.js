import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import Dropdown from '../Dropdown';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [showMenu, setShowMenu] = useState(false)

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
       <Dropdown />
      </>
    );
  }

  return (
    <div className="navigation">
      <NavLink className="nav-menu-home" exact to="/">
       <img
         className='icon' 
         src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'
         alt=""
       />
      </NavLink>
    <div className='nav-center'>
      <input type="text" className='search-bar'/>
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>

    <div className='nav-right'>
      <p>Become a Host</p>
      <i className="fa-solid fa-globe"></i>
      <button className="nav-menu-profile" onClick={openMenu}>
        <i className="fa-solid fa-grip-lines fa-sm"></i>
        <i className="fa-solid fa-user "></i>
      </button>
      {showMenu && (
     <ul className='dropdown-list'>
     <li className='dropdown-item'>
          {isLoaded && sessionLinks}
        </li>
      </ul>
      )}
    </div>

    

    </div>
  );
}

export default Navigation;
