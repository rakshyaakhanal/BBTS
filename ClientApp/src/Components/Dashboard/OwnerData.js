import React from "react";
import "./OwnerData.css";

export const OwnerData = () => {
    const odata = [
        {
            name : "Gwen Stacy",
            address : "Aaurica",
            gender : "Female",
            phoneno : 9812345678
        },
    ]

    return (
        <div className="odata">
            {odata.map((value) => {
                return (
                    <div className="value">
                            <div className="odata-name">
                                <h3>Name</h3>
                                <h4>{value.name}</h4>
                            </div>

                            <div className="odata-address">
                                <h3>Address</h3>
                                <h4>{value.address}</h4>
                            </div>

                            <div className="odata-gender">
                                <h3>Gender</h3>
                                <h4>{value.gender}</h4>
                            </div>

                            <div className="odata-phoneno">
                                <h3>Phone No</h3>
                                <h4>{value.phoneno}</h4>
                            </div>
                        </div>
                );
            })}
        </div>
    );
}
