import React from 'react';
import "./Dashboard.css";
import { OwnerData } from './OwnerData';
import { DriverData } from './DriverData';
import { VehicleData } from './VehicleData';
import image1 from "./images/vehicle.png";
import image2 from "./images/owner.jpg";
import image3 from "./images/driver.jpg";
import image4 from "./images/vehicleicon.png";
import image5 from "./images/levyicon.png";
import image6 from "./images/ownericon.png";
import image7 from "./images/drivericon.png";
import SelectYear from './SelectYear';
import SelectShow from './SelectShow';


const Dashboard = () => {
    return (
        <div className="main-div">
        
            <div className="overview"><h2>Overview</h2></div>
            <div className="vehicle">
                <h2>Vehicle</h2>
                <div className="vehicle-box"> <VehicleData /> </div>
                <img src= {image1} className="vehicle-image" alt="" />
            </div>

            <div className="owner">
                <h2>Owner</h2>
                <img src= {image2} className="owner-image" />
                <div className="owner-box"> <OwnerData /> </div>
            </div>

            <div className="driver">
                <h2>Driver</h2>
                <img src= {image3} className="driver-image" />
                <div className="driver-box"> <DriverData /> </div>
            </div>

            <div className="all-details">
                <div className="add-vehicle">
                <img src= {image4} className="vehicle-icon" />
                    <div className="vehicle-logo">Add Vehicle</div>
                </div>

                <div className="add-levy">
                <img src= {image5} className="levy-icon" />
                    <div className="levy-logo">Add Levy</div>
                </div>

                <div className="add-owner">
                <img src= {image6} className="owner-icon" />
                    <div className="owner-logo">Add Owner</div>
                </div>

                <div className="add-driver">
                <img src= {image7} className="driver-icon" />
                    <div className="driver-logo">Add Driver</div>
                </div>
            </div>

            <div className="levy-details">
                <h2 className="title">Levy</h2>

                <div>
                    <h2 className="chooseyear">Choose Year</h2>
                    <span className="selectyear"><SelectYear /></span>
                </div>

                <div>
                    <h2 className="show">Show</h2>
                    <span className="selectshow"><SelectShow /></span>
                </div>

                <table className="table">
                    <tr>
                        <th>Month</th>
                        <th>Paid</th>
                        <th>Pending</th>
                        <th>Total</th>
                    </tr>

                    <tr>
                        <td>January</td>
                        <td>4000</td>
                        <td style={{color : "#A9171C"}}>1000</td>
                        <td style={{color : "#A9171C"}}>5000</td>
                    </tr>

                    <tr>
                        <td>February</td>
                        <td style={{color : "#04B24A"}}>5000</td>
                        <td style={{color : "#04B24A"}}>-</td>
                        <td style={{color : "#04B24A"}}>5000</td>
                    </tr>

                    <tr>
                        <td>March</td>
                        <td style={{color : "#A9171C"}}>-</td>
                        <td style={{color : "#A9171C"}}>5000</td>
                        <td style={{color : "#A9171C"}}>5000</td>
                    </tr>

                    <tr>
                        <td>April</td>
                        <td style={{color : "#A9171C"}}>-</td>
                        <td style={{color : "#A9171C"}}>5000</td>
                        <td style={{color : "#A9171C"}}>5000</td>
                    </tr>

                    <tr>
                        <td>May</td>
                        <td style={{color : "#04B24A"}}>5000</td>
                        <td style={{color : "#04B24A"}}>-</td>
                        <td style={{color : "#04B24A"}}>5000</td>
                    </tr>

                    <tr>
                        <td>June</td>
                        <td>2000</td>
                        <td style={{color : "#A9171C"}}>3000</td>
                        <td style={{color : "#A9171C"}}>5000</td>
                    </tr>

                    <tr>
                        <td>July</td>
                        <td>4000</td>
                        <td style={{color : "#A9171C"}}>1000</td>
                        <td style={{color : "#A9171C"}}>5000</td>
                    </tr>

                    <tr>
                        <td>August</td>
                        <td>3000</td>
                        <td style={{color : "#A9171C"}}>2000</td>
                        <td style={{color : "#A9171C"}}>5000</td>
                    </tr>

                    <tr>
                        <td>September</td>
                        <td style={{color : "#04B24A"}}>5000</td>
                        <td style={{color : "#04B24A"}}>-</td>
                        <td style={{color : "#04B24A"}}>5000</td>
                    </tr>

                    <tr>
                        <td>October</td>
                        <td>4000</td>
                        <td style={{color : "#A9171C"}}>1000</td>
                        <td style={{color : "#A9171C"}}>5000</td>
                    </tr>

                    <tr>
                        <td>November</td>
                        <td style={{color : "#04B24A"}}>5000</td>
                        <td style={{color : "#04B24A"}}>-</td>
                        <td style={{color : "#04B24A"}}>5000</td>
                    </tr>

                    <tr>
                        <td>December</td>
                        <td style={{color : "#04B24A"}}>5000</td>
                        <td style={{color : "#04B24A"}}>-</td>
                        <td style={{color : "#04B24A"}}>5000</td>
                    </tr>

                    <tr>
                        <td>Grand Total</td>
                        <td style={{color : "#04B24A"}}>42000</td>
                        <td style={{color : "#A9171C"}}>18000</td>
                        <td style={{color : "#A9171C"}}>60000</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Dashboard;