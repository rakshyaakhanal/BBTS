import React from "react";
import "./VehicleData.css";

export const VehicleData = () => {
    const vdata = [
        {
            brand: "Roll Royce",
            modelyear: "2014-04-12",
            number: "RR-12478",
            engineno: "52WVC1038",
            expirydate: "2030-06-25",
            model: "RR-90 Standard",
            name: "RR Phantom",
            chesisno: "R1458",
            color: "Dark Emerald",
            status: "Active"
        },
    ]

    return (
        <div className="vdata">
            {vdata.map((values) => {
                return (
                    <div className="values">
                        <div className="col1">
                            <div className="vdata-brand">
                                <h3>Brand</h3>
                                <h4>{values.brand}</h4>
                            </div>

                            <div className="vdata-modelyear">
                                <h3>Model Year</h3>
                                <h4>{values.modelyear}</h4>
                            </div>

                            <div className="vdata-number">
                                <h3>Number</h3>
                                <h4>{values.number}</h4>
                            </div>

                            <div className="vdata-engineno">
                                <h3>Engine No.</h3>
                                <h4>{values.engineno}</h4>
                            </div>

                            <div className="vdata-expirydate">
                                <h3>Expiry Date</h3>
                                <h4>{values.expirydate}</h4>
                            </div>
                        </div>

                        <div className="col1">
                            <div className="vdata-model">
                                <h3>Model</h3>
                                <h4>{values.model}</h4>
                            </div>

                            <div className="vdata-name">
                                <h3>Name</h3>
                                <h4>{values.name}</h4>
                            </div>

                            <div className="vdata-chesisno">
                                <h3>Chesis No.</h3>
                                <h4>{values.chesisno}</h4>
                            </div>

                            <div className="vdata-color">
                                <h3>Color</h3>
                                <h4>{values.color}</h4>
                            </div>

                            <div className="vdata-status">
                                <h3>Status</h3>
                                <h4>{values.status}</h4>
                            </div>
                        </div>

                    </div>
                );
            })}
        </div>
    );
}
