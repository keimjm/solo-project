import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { Redirect } from "react-router-dom";
import SignupForm from './SignupForm';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <button onClick={() => setShowModal(true)}>Sign Up</button>
      {/* <a href='#' onClick={() => setShowModal(true)} className="signup-button">Sign Up</a> */}

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
