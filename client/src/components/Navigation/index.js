import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

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
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div class="navigation">
      <NavLink class="nav-menu-home" exact to="/">
       <img
         className='icon' 
         src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'
         alt=""
       />
      </NavLink>
    <div className='nav-center'>
      <input type="text" className='search-bar'/>
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>

    <div className='nav-right'>
      <p>Become a Host</p>
      <i class="fa-solid fa-globe"></i>
      <button class="nav-menu-profile" onClick={openMenu}>
        <i class="fa-solid fa-grip-lines fa-sm"></i>
        <i class="fa-solid fa-user "></i>
      </button>
    </div>

    
      {showMenu && (
      <ul>
        <li>
          {isLoaded && sessionLinks}
        </li>
      </ul>
      )}
    </div>
  );
}

export default Navigation;
