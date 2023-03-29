import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tabs } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';

const Admin = () => {
    const [devices, setDevices] = useState([]);
    
    const token = "eyJ4NXQiOiJNR0l4TTJFM05UaG1NRFprTkdZd1l6SmhaR1F5WkRRMVltUTFOamxoWVdZd01HVmxZelpqT0RabVptTXhOak5oWW1Vek56WXhaREJoWWpabVpESTBOUSIsImtpZCI6Ik1HSXhNMkUzTlRobU1EWmtOR1l3WXpKaFpHUXlaRFExWW1RMU5qbGhZV1l3TUdWbFl6WmpPRFptWm1NeE5qTmhZbVV6TnpZeFpEQmhZalptWkRJME5RX1JTMjU2IiwidHlwIjoiYXQrand0IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI2NDRmODY4Ni03ODQxLTRlOTUtODQ3OC1jY2YyNDIwOWFlOTkiLCJhdXQiOiJBUFBMSUNBVElPTiIsImF1ZCI6IkdZcFk4cnBXRGdJUmxwZmoxb1BmTGJRaGNOUWEiLCJuYmYiOjE2ODAwODM5ODMsImF6cCI6IkdZcFk4cnBXRGdJUmxwZmoxb1BmTGJRaGNOUWEiLCJpc3MiOiJodHRwczpcL1wvYXBpLmFzZ2FyZGVvLmlvXC90XC9vcmdrZm9uZXJlYWN0XC9vYXV0aDJcL3Rva2VuIiwiZXhwIjoxNjgwMDg3NTgzLCJpYXQiOjE2ODAwODM5ODMsImp0aSI6IjlmOTEzY2E4LTI0NWQtNDZiNS1iZDgyLWE1YWFmZWE4OGU4YSIsImNsaWVudF9pZCI6IkdZcFk4cnBXRGdJUmxwZmoxb1BmTGJRaGNOUWEifQ.icRwdmeUumAGlsGPzz2SZ8qeSarrdXJDdXtepBCOtJztB9vCY_uFkH1rYjtKcsY80raTuw3QXGYdSYZUCS5pPjHBydTMGzinoCJz07AthfEfHE0RckqxXOTanPwNuFsozszVhqfxEV7sHdUMtEs_uFXp72iCXpalZjhJ9txLjC8tTiJrq4GFOJuJavu0JKS7ZvMnr_fB-WN43BvwiQBLm_gJiS06GLUq5T4gb1Gcnz2KLh2J1PkeYVBHW3IZNACxmpjAFIaiAcGDJR1xri9niVWh6tFqSNr0WgGwhiZAgu6QIFqIny6a7V_XODLA_jQGUEv8ts9-NzdqSnVO4vxRMw";
    useEffect(() => {
    fetch('https://eff16ae0-0cfd-4eb1-83a9-6e69411bef74-prod.e1-us-east-azure.choreoapis.dev/aqiw/kfonechoreointegration/1.0.0/orders', {
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
                    {devices.map((product) => (
                            <div className="product" style={{ width: "31%" }} key={product.Name} contenteditable="true">
                                <div class="image-box">
                                    <div class="images" style={{ backgroundImage: "url(" + product.ProductImage + ")", backgroundSize: "contain" }}>
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
                    <Tab eventKey="services" title="Services">
                        <h1>Services</h1>
                        <h2 class="d-flex" >Coming soon</h2>
                    </Tab>
                </Tabs>
            </section>
        // <div className="container">
        //     <div className="card">
        //         <div className="card-title">
        //             <h2>Device Listing</h2>
        //         </div>
        //         <div className="card-body">
        //             <div className="divbtn">
        //                 <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
        //             </div>
        //             <table className="table table-bordered">
        //                 <thead className="bg-dark text-white">
        //                     <tr>
        //                         <td>Name</td>
        //                         <td>Price</td>
        //                         <td>Description</td>
        //                         <td>Manufacturer</td>
        //                     </tr>
        //                 </thead>
        //                 <tbody>

        //                     {devices &&
        //                         devices.map(item => (
        //                             <tr key={item.Name}>
        //                                 <td>{item.Name}</td>
        //                                 <td>{item.Price}</td>
        //                                 <td>{item.Description}</td>
        //                                 <td>{item.Manufacturer}</td>
        //                                 {/* <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
        //                                     <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
        //                                     <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
        //                                 </td> */}
        //                             </tr>
        //                         ))
        //                     }

        //                 </tbody>

        //             </table>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Admin;