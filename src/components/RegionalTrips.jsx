import { useEffect, useState } from "react"
import "./RegionalTrips.css"
function RegionalTrips({db_data}){
    const [table_data, update_table] = useState(db_data);
    useEffect(()=>{
        console.log("table_data",table_data);
    },[table_data])
    return (
        <div className="col-md-10 col-sm-12 container-fluid pe-5 ps-5 pt-3">
            <div className="d-flex">
                <div className="">
                <h3>Regional Trips</h3>
                </div>
                <div className="ms-auto">
                    <div className="">

                            <input placeholder="Search for Client ID or Client Name" className="mt-0 rounded-0 input-class"></input>
                            <button className="btn btn-primary mt-3">Search</button>
                        
                    </div>
                
                </div>
            </div>
            <div className="row row-cols-1  mt-3">
                <p className="heading-style">Filter</p>
            </div>
            <div className="d-flex">
                <div className="row row-cols-3 filter-options-class">
                <div className="col">
                    <label className="input-label-class">Booking Agency</label>
                    <select className="form-select">
                    <option value="">All</option>
                    <option value="VTA" >VTA</option>
                    <option value="EBP" >EBP</option>
                    <option value="STB" >STB</option>
                    <option value="OPD" >STB</option>
                    </select>
                </div>
                <div className="">
                <label className="input-label-class">Status</label>
                    <select className="form-select">
                    <option value="">All</option>
                    <option value="VTA" >Completed</option>
                    <option value="EBP" >Requested</option>
                    <option value="STB" >Canceled</option>
                    <option value="OPD" >Failed</option>
                    </select>
                </div>
                <div className="">
                <label className="input-label-class">Preset Filter</label>
                    <select className="form-select">
                    <option value="" disabled selected>Select or enter new filter</option>
                    <option value="VTA" >Lorem ipsum dolar</option>
                    <option value="EBP" >Lorem ipsum dolor sit amet</option>
                    <option value="STB" >Lorem ipsum dolar</option>
                    <option value="OPD" >Lorem ipsum dolor sit
                    ametipsum dolar</option>
                    </select>
                </div>
                </div>
                <div className="ms-auto pt-2">
                    <div className="row row-cols-2">
                        <div className="col">
                        <button className="btn btn-outline-primary">Clear</button>
                        </div>
                        <div className="col">
                        <button className="btn btn-primary">Apply</button>
                        </div>
                    </div>
                
                
                </div>
                {/* <div className="col-1 border"> */}
                {/* <button className="btn btn-primary">Apply</button> */}
                {/* </div> */}

            </div>
            <div className="row row-cols-1 mt-3">
                <p className="heading-style">Regional Trips</p>
            </div>
            <div className="row row-cols-1 ps-2">
                <table className="table border table-hover" id="tripstable">
                    <thead id="tripstablehead">
                        <tr id="tripstabletitle" className="table-primary">
                            <th scope="col">Trip Date</th>
                            {/* <th scope="col">Regional Trip ID</th> */}
                            <th scope="col">Cancel Trip</th>
                            <th scope="col">Trip Status</th>
                            <th scope="col">Regional ADA Client ID</th>
                            {/* <th scope="col">VTA ADA Client ID</th> */}
                            {/* <th scope="col">EBP ADA Client ID</th> */}
                            <th scope="col">Client Name</th>
                            <th scope="col">Pickup Time</th>
                            {/* <th scope="col">Pickup Address</th> */}
                            {/* <th scope="col">Transfer Point</th> */}
                            {/* <th scope="col">Transfer Time</th> */}
                            <th scope="col">Drop-off Time</th>
                            <th scope="col">Drop-off Address</th>
                            <th scope="col">Group ID</th>
                            {/* <th scope="col">VTA Booking ID</th> */}
                            {/* <th scope="col">EBP Booking ID</th> */}
                            {/* <th scope="col">Booking User</th> */}
                            <th scope="col">Booking Agency</th>
                        </tr>
                    </thead>
                    <tbody id="tripstabelbody">
                        {table_data.map((row)=>(
                            <tr key={row.id}>
                                <td>{row.Trip_Date}</td>
                                {/* <td>N/A</td> */}
                                <td><a href="#">Cancel</a></td>
                                <td>{row.Trip_status}</td>
                                <td>{row.Regional_ADA_Client_ID}</td>
                                {/* <td>N/A</td> */}
                                {/* <td>N/A</td> */}
                                <td>{row.First_Name}{" "}{row.Last_Name}</td>
                                <td>{row.Pickup_Time}</td>
                                {/* <td>{row.Pickup_Location}</td> */}
                                {/* <td>N/A</td> */}
                                {/* <td>N/A</td> */}
                                <td>{row.Drop_off_Time}</td>
                                <td>{row.Drop_off_Location}</td>
                                <td>N/A</td>
                                {/* <td>N/A</td> */}
                                {/* <td>N/A</td> */}
                                {/* <td>N/A</td> */}
                                <td>{row.Agency_Name}</td>

                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default RegionalTrips