/*
 *   Copyright (c) 2023 WSO2 Inc. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 Inc. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */
import React, {useEffect,useState} from 'react';
import { Container, Row, Col, Button }  from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as regThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as solidThumbsUp } from '@fortawesome/free-solid-svg-icons';
import './styles.css'
// import PetStoreNav from '../../App.js';
import data from './data.json';
import { FlexboxGrid } from 'rsuite';
import { contains } from 'rsuite/esm/DOMHelper';
// Component to render the item list
const PetItemList = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

    
    return (
      <>
      <Container style={{width:"100%"}}>
      <h1>Products</h1>
        <Row style={{ width:"100%"}}>
      
      {products.map((product) => (
        <div className ="product" style={{width:"31%"}} key={product.Name}>
           <div class="image-box">
          <div class="images"style={{backgroundImage: "url(" + product.Image + ")", backgroundSize:"contain"}}>
  
          </div>
          </div>
          <h2 className="item">{product.Name}</h2>
          <p className="description">{product.Description}</p>
          <p className="price">{product.Price}</p>
          <p className="price">{product.Manufacturer}</p>
          
        </div>
      ))}
  
      
        </Row>
      </Container>
    </>
    );
  
  };

  export default function Catalog() {
    useEffect(() => {
        document.title = 'PetStore Catalog';
      }, []);
    return (
      <>
        <PetItemList />
      </>
    );
}
