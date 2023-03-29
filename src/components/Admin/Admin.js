/*
 *   Copyright (c) 2023 WSO2 Inc. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 Inc. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */
import React, { useEffect, useState } from 'react';
import { Container, Button, Table, Tabs } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import {
    MDBIcon,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
} from "mdb-react-ui-kit";
import data from '../../assets/data/data.json';

export default function Admin() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        document.title = "Admin | KFone"
        setProducts(data);
    }, []);

    const [iconsActive, setIconsActive] = useState('pill1');

    const handleIconsClick = (value) => {
        if (value === iconsActive) {
            return;
        }

        setIconsActive(value);
    };
    return (
        <>
            <section className="h-100 h-custom pt-1">
                <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="home" title="Devices">
                    <div class="d-flex">
                        <h2 class="pt-2 pb-3 fw-bold text-uppercase">Manage Your products</h2>
                    </div>
                    {products.map((product) => (
                            <div className="product" style={{ width: "31%" }} key={product.Name} contenteditable="true">
                                <div class="image-box">
                                    <div class="images" style={{ backgroundImage: "url(" + product.Image + ")", backgroundSize: "contain" }}>
                                    </div>
                                </div>
                                <h2 className="item">{product.Name}</h2>
                                <p className="description">{product.Description}</p>
                                <p className="price" contenteditable="true">$ {product.Price}.00</p>
                                <p className="price" contenteditable="true">{product.Manufacturer}</p>
                            </div>
                        ))}
                    </Tab>
                    <Tab eventKey="services" title="Services">
                        <h1>Services</h1>
                        <h2 class="d-flex" >Coming soon</h2>
                    </Tab>
                    <Tab eventKey="profile" title="Manage Users">
                    <div class="d-flex">
                        <h2 class="pt-2 pb-3 fw-bold text-uppercase">Manage Your products</h2>
                    </div>
                    {products.map((product) => (
                            <div className="product" style={{ width: "31%" }} key={product.Name} contenteditable="true">
                                <div class="image-box">
                                    <div class="images" style={{ backgroundImage: "url(" + product.Image + ")", backgroundSize: "contain" }}>
                                    </div>
                                </div>
                                <h2 className="item">{product.Name}</h2>
                                <p className="description">{product.Description}</p>
                                <p className="price" contenteditable="true">$ {product.Price}.00</p>
                                <p className="price" contenteditable="true">{product.Manufacturer}</p>
                            </div>
                        ))}
                    </Tab>
                </Tabs>
            </section>
        </>
    );
}