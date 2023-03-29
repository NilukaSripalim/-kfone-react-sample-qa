/*
 *   Copyright (c) 2023 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import endpointConfig from '../../configs/endpoint-config';

const Admin = () => {
    const [devices, setDevices] = useState([]);
    // const navigate = useNavigate();

    // const LoadDetail = (id) => {
    //     navigate("/employee/detail/" + id);
    // }
    // const LoadEdit = (id) => {
    //     navigate("/employee/edit/" + id);
    // }
    // const Removefunction = (id) => {
    //     if (window.confirm('Do you want to remove?')) {
    //         fetch("http://localhost:8000/employee/" + id, {
    //             method: "DELETE"
    //         }).then((res) => {
    //             alert('Removed successfully.')
    //             window.location.reload();
    //         }).catch((err) => {
    //             console.log(err.message)
    //         })
    //     }
    // }



    const token = "eyJ4NXQiOiJNR0l4TTJFM05UaG1NRFprTkdZd1l6SmhaR1F5WkRRMVltUTFOamxoWVdZd01HVmxZelpqT0RabVptTXhOak5oWW1Vek56WXhaREJoWWpabVpESTBOUSIsImtpZCI6Ik1HSXhNMkUzTlRobU1EWmtOR1l3WXpKaFpHUXlaRFExWW1RMU5qbGhZV1l3TUdWbFl6WmpPRFptWm1NeE5qTmhZbVV6TnpZeFpEQmhZalptWkRJME5RX1JTMjU2IiwidHlwIjoiYXQrand0IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI2NDRmODY4Ni03ODQxLTRlOTUtODQ3OC1jY2YyNDIwOWFlOTkiLCJhdXQiOiJBUFBMSUNBVElPTiIsImF1ZCI6IkdZcFk4cnBXRGdJUmxwZmoxb1BmTGJRaGNOUWEiLCJuYmYiOjE2ODAwNjI5OTMsImF6cCI6IkdZcFk4cnBXRGdJUmxwZmoxb1BmTGJRaGNOUWEiLCJpc3MiOiJodHRwczpcL1wvYXBpLmFzZ2FyZGVvLmlvXC90XC9vcmdrZm9uZXJlYWN0XC9vYXV0aDJcL3Rva2VuIiwiZXhwIjoxNjgwMDY2NTkzLCJpYXQiOjE2ODAwNjI5OTMsImp0aSI6IjhmMzEyM2FlLTU1NTItNDc1Yi1hMmM0LWJkZjkzZDkwZGFiNiIsImNsaWVudF9pZCI6IkdZcFk4cnBXRGdJUmxwZmoxb1BmTGJRaGNOUWEifQ.h2-gdJyMMFwLO1i70Niaww2ZfXXUiFuwWKbmy2KC9vMoIezK_DgOE-3eo1_0s2PMejGkmPiZjKijNZRBtCrLaZv8ebzdbnJHPAyY5nOBbyQGyfBxgqq6JkjqAEpp404UcYdEXLZzBH7DfCgQLvwh25T8MSxbMGjMgKyazkj6da54nHQDTHfESYQTPdHLbkM49aebdaLWfqjuQeZMbTB_cpla_SAQmxXTmWQYYT1i5DzK7LDaIqItxemJtT_YJ8CkdlGdWvZL9nFAAd39QS4y4-c_sCJWpA59scbHp5llPJTw9rxG437KqDipwqHl5Tq2xfJJPe6mBsppZFlCKa7AkA";
    useEffect(() => {
    fetch(`${endpointConfig.api.endpoints.devices}`, {
      method: "GET",
      headers: {"Authorization": `Bearer ${token}`},
      Accept: 'application/json', 
     
       }).then((res) => res.json())
       .then((data) => {
        setDevices(data);
        }).catch((err) => {
            console.log(err.message);
        })
  },[]);
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Device Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Description</td>
                                <td>Manufacturer</td>
                            </tr>
                        </thead>
                        <tbody>

                            {devices &&
                                devices.map(item => (
                                    <tr key={item.Name}>
                                        <td>{item.Name}</td>
                                        <td>{item.Price}</td>
                                        <td>{item.Description}</td>
                                        <td>{item.Manufacturer}</td>
                                        {/* <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                                        </td> */}
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default Admin;