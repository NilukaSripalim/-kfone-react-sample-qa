/*
 *   Copyright (c) 2023 WSO2 Inc. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 Inc. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */
import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Application from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "@asgardeo/auth-react";


const root = ReactDOM.createRoot(document.getElementById('root'));

// const authConfig = {
//     signInRedirectURL: "https://localhost:3000",
//             signOutRedirectURL: "https://localhost:3000",
//             clientID: "T786uLYlKwEKmtzO7Zv3ojndsTEa",
//             baseUrl: "https://dev.api.asgardeo.io/t/asekatest1",
//             scope: [ "openid","profile" ]
//   };
  
  //const auth = new AuthProvider(authConfig);

  const Index = () => (
    <AuthProvider
        config={ {
            signInRedirectURL: "https://localhost:3000",
            signOutRedirectURL: "https://localhost:3000",
            clientID: "T786uLYlKwEKmtzO7Zv3ojndsTEa",
            baseUrl: "https://dev.api.asgardeo.io/t/asekatest1",
            scope: [ "openid","profile","groups" ]
        } }
        
    >
      <Application />  { /* Rest of your application.  */ }
     
    </AuthProvider>
);

  root.render(
    <Index/>
  );
  
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
