/*
 *   Copyright (c) 2023 WSO2 Inc. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 Inc. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */
import React, {useEffect} from 'react';
import { Container, Button, Table }  from 'react-bootstrap';

export default function Admin() {
    useEffect(() => {
        document.title = "Admin | PetStore"
    }, []);

    return (
        <>
        <div>
  <h1>Hello</h1>
  <p>World</p>
</div>
        <Container className="mt-5">
        <div>
  <h1>Hello</h1>
  <p>World</p>
</div>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th scope="col" width="150px">Title</th>
                        <th scope="col" width="400px">Description</th>
                        <th scope="col">Includes</th>
                        <th scope="col">Intended For</th>
                        <th scope="col" width="50px">Color</th>
                        <th scope="col">Material</th>
                        <th scope="col">Price</th>
                        <th scope="col">&nbsp;</th>
                    </tr>
                    <tr className="align-middle">
                        <td>Top Paw® Valentine's Day Single Dog Sweater</td>
                        <td>Top Paw® Valentine's Day Single Dog Sweater is a cute and cozy way to show your dog some love this Valentine's Day. This sweater features a red heart on the back and a red bow on the front. It's made of soft, comfortable cotton and polyester blend fabric. It's machine washable for easy care. This sweater is available in sizes XS, S, M, L, XL and XXL... </td>
                        <td>1 Sweater</td>
                        <td>Dogs</td>
                        <td>Red, White, Black</td>
                        <td>100% Acrylic</td>
                        <td>$14.99</td>
                        <td><Button variant="primary" size="sm">Edit</Button>&nbsp;<Button variant="danger" size="sm">Delete</Button></td>
                    </tr>
                    <tr className="align-middle">
                        <td>Top Paw® Valentine's Day Single Dog Sweater</td>
                        <td>Top Paw® Valentine's Day Single Dog Sweater is a cute and cozy way to show your dog some love this Valentine's Day. This sweater features a red heart on the back and a red bow on the front. It's made of soft, comfortable cotton and polyester blend fabric. It's machine washable for easy care. This sweater is available in sizes XS, S, M, L, XL and XXL... </td>
                        <td>1 Sweater</td>
                        <td>Dogs</td>
                        <td>Red, White, Black</td>
                        <td>100% Acrylic</td>
                        <td>$14.99</td>
                        <td><Button variant="primary" size="sm">Edit</Button>&nbsp;<Button variant="danger" size="sm">Delete</Button></td>
                    </tr>
                    <tr className="align-middle">
                        <td>Top Paw® Valentine's Day Single Dog Sweater</td>
                        <td>Top Paw® Valentine's Day Single Dog Sweater is a cute and cozy way to show your dog some love this Valentine's Day. This sweater features a red heart on the back and a red bow on the front. It's made of soft, comfortable cotton and polyester blend fabric. It's machine washable for easy care. This sweater is available in sizes XS, S, M, L, XL and XXL... </td>
                        <td>1 Sweater</td>
                        <td>Dogs</td>
                        <td>Red, White, Black</td>
                        <td>100% Acrylic</td>
                        <td>$14.99</td>
                        <td><Button variant="primary" size="sm">Edit</Button>&nbsp;<Button variant="danger" size="sm">Delete</Button></td>
                    </tr>
                    <tr className="text-end">
                        <td colSpan="8"><Button variant="primary" className="float-right">Add New Product</Button></td>
                    </tr>
                </thead>
            </Table>
        </Container>
        </>
    );
}