import React from "react";
import "./DriverData.css";

export const DriverData = () => {
    const ddata = [
        {
            name : "Peter Parker",
            address : "Aaurica",
            gender : "Male",
            phoneno : 9819445678
        }
    ]

    return (
        <div className="ddata">
            {ddata.map((value) => {
                return (
                    <div className="value">
                            <div className="ddata-name">
                                <h3>Name</h3>
                                <h4>{value.name}</h4>
                            </div>

                            <div className="ddata-address">
                                <h3>Address</h3>
                                <h4>{value.address}</h4>
                            </div>

                            <div className="ddata-gender">
                                <h3>Gender</h3>
                                <h4>{value.gender}</h4>
                            </div>

                            <div className="ddata-phoneno">
                                <h3>Phone No</h3>
                                <h4>{value.phoneno}</h4>
                            </div>
                        </div>
                );
            })}
        </div>
    );
}
