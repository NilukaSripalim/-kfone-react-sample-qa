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
import { Container, Button, Table } from 'react-bootstrap';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBInput,
    MDBTypography,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

export default function Admin() {
    useEffect(() => {
        document.title = "Admin | PetStore"
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

            <section className="h-100 h-custom pt-1" style={{ backgroundColor: "#eee" }}>

                <MDBTabs pills className='mb-3 mt-3'>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleIconsClick('pill1')} active={iconsActive === 'pill1'}>
                            <MDBIcon fas icon='chart-pie' className='me-2' /> Devices 
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleIconsClick('pill2')} active={iconsActive === 'pill2'}>
                            <MDBIcon fas icon='chart-line' className='me-2' /> Dashboards
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleIconsClick('pill3')} active={iconsActive === 'pill3'}>
                            <MDBIcon fas icon='cogs' className='me-2' /> Manage Users
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <div className="d-flex justify-content-end" >
                    </div>
                </MDBTabs>

                <MDBTabsContent>
                <h3 class="mb-5 pt-2 text-center fw-bold text-uppercase">Your products</h3>
                    <MDBTabsPane show={iconsActive === 'pill1'}>
                        <MDBContainer className="py-5 h-100">
                            <MDBRow className="justify-content-center align-items-center h-100">
                                <MDBCol md="10">
                                    <div className="d-flex justify-content-between align-items-center mb-4">

                                    </div>

                                    <MDBCard className="rounded-3 mb-4">
                                        <MDBCardBody className="p-4">
                                            
                                            <MDBRow className="justify-content-between align-items-center">
                                                <MDBCol md="2" lg="2" xl="2">
                                                    <MDBCardImage className="rounded-3" fluid
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                                        alt="Cotton T-shirt" />
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3">
                                                    <p className="lead fw-normal mb-2" contenteditable="true">Basic T-shirt</p>
                                                    <p>
                                                        <span className="text-muted">Manufacturer: </span>M{" "} <br/>
                                                        <span className="text-muted">Color: </span>Grey
                                                    </p>
                                                </MDBCol>
                                                <MDBCol md="3" lg="1" xl="2"
                                                    className="d-flex align-items-center justify-content-around">
                                                    <MDBTypography tag="h5" className="p-3" contenteditable="true">
                                                        2
                                                    </MDBTypography>

                                                </MDBCol>
                                                <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                                                    <MDBTypography tag="h5" className="mb-0" contenteditable="true">
                                                        $499.00
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol md="1" lg="1" xl="1" className="text--center">
                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>

                                    <MDBCard className="rounded-3 mb-4">
                                        <MDBCardBody className="p-4">
                                        <MDBRow className="justify-content-between align-items-center">
                                                <MDBCol md="2" lg="2" xl="2">
                                                    <MDBCardImage className="rounded-3" fluid
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                                        alt="Cotton T-shirt" />
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3">
                                                    <p className="lead fw-normal mb-2" contenteditable="true">Basic T-shirt</p>
                                                    <p>
                                                        <span className="text-muted">Manufacturer: </span>M{" "} <br/>
                                                        <span className="text-muted">Color: </span>Grey
                                                    </p>
                                                </MDBCol>
                                                <MDBCol md="3" lg="1" xl="2"
                                                    className="d-flex align-items-center justify-content-around">
                                                    <MDBTypography tag="h5" className="p-3" contenteditable="true">
                                                        2
                                                    </MDBTypography>

                                                </MDBCol>
                                                <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                                                    <MDBTypography tag="h5" className="mb-0" contenteditable="true">
                                                        $499.00
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol md="1" lg="1" xl="1" className="text--center">
                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>

                                    <MDBCard className="rounded-3 mb-4">
                                        <MDBCardBody className="p-4">
                                        <MDBRow className="justify-content-between align-items-center">
                                                <MDBCol md="2" lg="2" xl="2">
                                                    <MDBCardImage className="rounded-3" fluid
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                                        alt="Cotton T-shirt" />
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3">
                                                    <p className="lead fw-normal mb-2" contenteditable="true">Basic T-shirt</p>
                                                    <p>
                                                        <span className="text-muted">Manufacturer: </span>M{" "} <br/>
                                                        <span className="text-muted">Color: </span>Grey
                                                    </p>
                                                </MDBCol>
                                                <MDBCol md="3" lg="1" xl="2"
                                                    className="d-flex align-items-center justify-content-around">
                                                    <MDBTypography tag="h5" className="p-3" contenteditable="true">
                                                        2
                                                    </MDBTypography>

                                                </MDBCol>
                                                <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                                                    <MDBTypography tag="h5" className="mb-0" contenteditable="true">
                                                        $499.00
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol md="1" lg="1" xl="1" className="text--center">
                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBTabsPane>
                    <MDBTabsPane show={iconsActive === 'pill2'}>Tab 2 content</MDBTabsPane>
                    <MDBTabsPane show={iconsActive === 'pill3'}>Tab 3 content</MDBTabsPane>
                </MDBTabsContent>
            </section>
        </>
    );
}