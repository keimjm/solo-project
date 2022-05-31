import React from 'react'
import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormPage';


function Dropdown() {


  return (
    <div className='modal-div'>
        <LoginFormModal /> <br />
        <SignupFormModal />
    </div>
  )
}

export default Dropdown;
