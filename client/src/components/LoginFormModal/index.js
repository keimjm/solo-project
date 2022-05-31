import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { Redirect } from "react-router-dom";
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  console.log(showModal)

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {/* <a href='#' onClick={() => setShowModal(true)} className="login-button">Log In</a> */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
