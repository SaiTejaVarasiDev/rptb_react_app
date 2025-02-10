import { useEffect, useState } from "react"

function RegionalTrips({db_data}){
    const [table_data, update_table] = useState(db_data);
    useEffect(()=>{
        console.log("table_data",table_data);
    },[table_data])
    return (
        <div className="col-md-10 col-sm-12 container-fluid pe-5">
            <h4>Regional Trips</h4>
            <div className="row row-cols-1">
                <p>Regional Trips</p>
            </div>
            <div className="row row-cols-1">
                <table className="table border">
                    <thead>
                        <tr>
                            <th scope="col">Trip Date</th>
                            <th scope="col">Regional Trip ID</th>
                            <th scope="col">Cancel Trip</th>
                            <th scope="col">Trip Status</th>
                            <th scope="col">Regional ADA Client ID</th>
                            <th scope="col">VTA ADA Client ID</th>
                            <th scope="col">EBP ADA Client ID</th>
                            <th scope="col">Client Name</th>
                            <th scope="col">Pickup Time</th>
                            <th scope="col">Pickup Address</th>
                            <th scope="col">Transfer Point</th>
                            <th scope="col">Transfer Time</th>
                            <th scope="col">Drop-off Time</th>
                            <th scope="col">Drop-off Address</th>
                            <th scope="col">Group ID</th>
                            <th scope="col">VTA Booking ID</th>
                            <th scope="col">EBP Booking ID</th>
                            <th scope="col">Booking User</th>
                            <th scope="col">Booking Agency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table_data.map((row)=>(
                            <tr key={row.id}>
                                <td>{row.Trip_Date}</td>
                                <td>N/A</td>
                                <td><a href="#">Cancel</a></td>
                                <td>N/A</td>
                                <td>{row.Regional_ADA_Client_ID}</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>{row.First_Name}{" "}{row.Last_Name}</td>
                                <td>{row.Pickup_Time}</td>
                                <td>{row.Pickup_Location}</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>{row.Drop_off_Time}</td>
                                <td>{row.Drop_off_Location}</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>

                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default RegionalTrips