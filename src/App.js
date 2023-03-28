/*
 *   Copyright (c) 2023 WSO2 Inc. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 Inc. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */
// import logo from './logo.svg';
import React, { useEffect,useState } from 'react';
import './App.css';
import './App.scss';
import { Nav, Navbar, Container }  from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { useAuthContext } from "@asgardeo/auth-react";

import Catalog from './components/Catalog/Catalog.js';
import MyCart from './components/MyCart/Cart.js';
import Admin from './components/Admin/Admin.js';

// Component to render the login/logout menu

const RightLoginSignupMenu = () => {
  const { state, signIn, signOut, userInfo , groups,getBasicUserInfo } = useAuthContext();
  // Based on Asgardeo SDK, set a variable like below to check and conditionally render the menu
  let isLoggedIn = false;

  // Host the menu content and return it at the end of the function
  let menu;

  // Conditionally render the following two links based on whether the user is logged in or not
  if (state.isAuthenticated) {
    menu =  <>
      <Nav>
      {/* <Nav.Link href="#deets">Logout</Nav.Link> */}
         <button onClick={() => signOut()}>Logout</button>
      <Nav.Link href="#deets"><FontAwesomeIcon icon={faUser} /></Nav.Link></Nav>
  

    </>
  } else {
    menu = <>
      <Nav>
      <button className="reg" onClick={() => signIn()}>Login</button>
     
      {/* <button onClick={() => signIn()}>SignUp</button> */}
      </Nav>
    </>
  }
  return menu;
}



// Component to render the navigation bar Admin
const PetStoreNavAdmin = () => {
  return (
    <>
    
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Kphone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Catalog</Link>

            <Link to="/admin" className="nav-link">Admin</Link>
          </Nav>
        </Navbar.Collapse>
        <RightLoginSignupMenu />
      </Container>
    </Navbar>
    </>
  );
};

// Component to render the navigation bar customer
const PetStoreNavCus = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Kphone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Catalog</Link>

            <Link to="/mycart" className="nav-link">My Cart</Link>
          </Nav>
        </Navbar.Collapse>
        <RightLoginSignupMenu />
      </Container>
    </Navbar>
    </>
  );
};

// Component to render the navigation bar customer
const PetStoreMain = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Kphone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Link to="/" className="nav-link">Catalog</Link> */}

            {/* <Link to="/mycart" className="nav-link">My Cart</Link> */}
          </Nav>
        </Navbar.Collapse>
        <RightLoginSignupMenu />
      </Container>
    </Navbar>
    </>
  );
};

// Main app component
const App = () => {
// useEffect(() => {
  //   document.title = 'PetStore';
  // }, []);  
  return (
    <>
      <BrowserRouter>
      <PetStoreNavAdmin/>
      <Switch>
        <Route exact path="/">
          <Catalog />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

// Main app component
const AppCustomer = () => {
  // useEffect(() => {
  //   document.title = 'PetStore';
  // }, []);
  return (
    <>
      <BrowserRouter>
      <PetStoreNavCus />
      <Switch>
        <Route exact path="/">
          <Catalog />
        </Route>
        <Route path="/mycart">
          <MyCart />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

// Main Catalog component
const AppNav = () => {
  // useEffect(() => {
  //   document.title = 'PetStore';
  // }, []);
  return (
    <>
      <BrowserRouter>
      <PetStoreMain />
      <Switch>
        {/* <Route exact path="/"> */}
          <Catalog />
        {/* </Route> */}
        {/* <Route path="/mycart">
          <MyCart />
        </Route> */}
      </Switch>
    </BrowserRouter>
    </>
  );
}

function Application() {

  const { state, signIn, signOut, userInfo , groups,getBasicUserInfo } = useAuthContext();
  const [basicUserDetails, setBasicUserDetails] = useState(null);
  

  
  getBasicUserInfo().then((basicUserDetails) => {
      console.log(basicUserDetails);
  }).catch((error) => {
      // Handle the error
  })
  
  useEffect(() => {
    getBasicUserInfo().then((basicUserDetails) => {
      console.log(basicUserDetails);
      console.log(basicUserDetails?.groups);
     setBasicUserDetails(basicUserDetails)
  }).catch((error) => {
      // Handle the error
  })
  }, []);  
  return (
    <div className="App">
      {
        state.isAuthenticated && basicUserDetails?.groups.includes("admin_group") 
          ? (
            <div>
              <ul>
                <li>{basicUserDetails?.groups}</li>
                <li>{JSON.stringify(state)}</li>
              </ul>

              {/* <button onClick={() => signOut()}>Logout</button> */}
              <App/>
            </div>
          ):
          state.isAuthenticated ?
          (
            <div>
              <ul>
                <li>{JSON.stringify(state)}</li>
              </ul>

              {/* <button onClick={() => signOut()}>Logout</button> */}
              <AppCustomer/>
            </div>
          ):<AppNav/>

      }
    </div>
  );
}


export default Application;



