import React, {useState, useEffect} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import { search } from '../../store/search';


function Navigation({ isLoaded }){
  const dispatch = useDispatch()
  const history = useHistory()
  const sessionUser = useSelector(state => state.session.user);
  const [showMenu, setShowMenu] = useState(false)
  const [searchText, setSearchText] = useState("");


  const updateSearch = (e) => setSearchText(e.target.value);


  const handleSubmit = async (e) => {
    e.preventDefault();
 
    let rooms = await dispatch(search(searchText))

    if (rooms) {
      history.push('/search')
      setSearchText("")
    }

    

}



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
      <div className='dropdown-item'> <ProfileButton user={sessionUser} /></div>
    );
  } else {
    sessionLinks = (
      <>
        <li className='dropdown-item'><NavLink className="dropdown-link" to="/login">Log In</NavLink></li>
        <li className='dropdown-item'><NavLink className="dropdown-link" to="/signup">Sign Up</NavLink></li>
      </>
    );
  }

  return (
    <div className="navigation">
      <NavLink className="nav-menu-home" exact to="/">
       <img
         className='icon' 
         src='/images/craftbnb.png'
         alt=""
       />
      </NavLink>
    <div className='nav-center'>
      <form onSubmit={handleSubmit}>
      <input type="text" className='search-bar' placeholder='Search' value={searchText} onChange={updateSearch} />
     <button type="submit" className='search-submit-btn'> <i className="fa-solid fa-magnifying-glass"></i></button>
     </form>
    </div>

    <div className='nav-right'>
    <NavLink exact to={`/rooms`}>
    <button className='create-room-button'>Become a Host</button>
    </NavLink>
      <i className="fa-solid fa-globe"></i>
      <button className="nav-menu-profile" onClick={openMenu}>
        <i className="fa-solid fa-grip-lines fa-sm"></i>
        <i className="fa-solid fa-user "></i>
      </button>
      {showMenu && (
     <div className='dropdown-list'>
          {isLoaded && sessionLinks}
        
      </div>
      )}
    </div>

    

    </div>
  );
}

export default Navigation;
