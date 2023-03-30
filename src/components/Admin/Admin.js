import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tabs } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';

const Admin = () => {
    const [devices, setDevices] = useState([]);
    
    const token = ""; // Update token before running the app.
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
                    defaultActiveKey="home"
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
                                <button class="btn btn-primary" type="submit">Update</button>
                            </div>
                        ))}
                        
                    </Tab>
                    <Tab eventKey="services" title="Services">
                        <h1>Services</h1>
                        <h2 class="d-flex" >Coming soon</h2>
                    </Tab>
                    <Tab eventKey="users" title="Manage Users">
                        <h1>Manage Users</h1>
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