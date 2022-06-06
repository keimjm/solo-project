import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './Navigation.css'


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory()
  const [showMenu, setShowMenu] = useState(false);

  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const profile = (e) => {
    e.preventDefault()
    history.push(`/users/${user.id}`)
  }

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push(`/`)
  };

  return (
    <>
      {true && (
        <ul className="profile-dropdown">
          <li>
            <button className="profile-btn" onClick={profile}>Profile</button>
          </li>
          <li>
            <button className="profile-btn" onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
