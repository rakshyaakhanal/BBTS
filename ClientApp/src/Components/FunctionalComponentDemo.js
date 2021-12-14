import React, {useState, useEffect} from 'react'

const FunctionalComponentDemo = () => {
    const [data, setDate] = useState();

    useEffect(() => {
        fetch("api/vehicle/index")
        .then((res) => res.json())
        .then((data) => {
          setDate(data);
          })
        .catch((err) => {
          console.log(err.response);
        });
    }, []);
        
    return (
        <div>
          <table style={{margin: "0 auto 20px auto"}}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
    )
}

export default FunctionalComponentDemo;