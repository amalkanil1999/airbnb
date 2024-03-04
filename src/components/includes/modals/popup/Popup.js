import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import SignUp from './SignUp';

function Popup(props) {
    const popupRef = useRef(null);
    // const [openSignup, setOpenSignup] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        props.setTrigger(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [props]);

  return props.trigger ? (
    <>
      <PopupContainer ref={popupRef}>
        <Popupdiv>
          <SnavLink onClick={props.toggleSignup}><H1>Sign Up</H1></SnavLink>
          <SnavLink to="#"><H1>Log In</H1></SnavLink>
          <HR />
          <SnavLink to="#"><H1>Airbnb your Home</H1></SnavLink>
            <SnavLink to="#"><H1>Help center</H1></SnavLink>
            {/* <SignUp trigger={openSignup} setTrigger={setOpenSignup}></SignUp> */}
        </Popupdiv>
      </PopupContainer>
      {props.children}
    </>
  ) : null;
}

const PopupContainer = styled.div`
  position: absolute;
  top: 76px;
  right: 12px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 18%;
  z-index: 1000 !important;
`;

const Popupdiv = styled.div`
  background-color: white;
  padding: 10px 0;
  border-radius: 6px;
  display: flex;
  flex-direction:column;
  width:100%;
`;

const SnavLink = styled(NavLink)`
&:hover {
    background-color: #E0E0E0!important;
  }
  display:block;
  text-decoration: none;
  padding: 10px ;
  
`;

const H1 = styled.h1`
  font-size: 14px;
  font-weight: 200;
  color: #000;
`;
const HR = styled.hr``;

export default Popup;
