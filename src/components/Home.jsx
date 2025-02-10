import './Home.css';
import Description from './Description';
import RequestBooking from './RequestBooking';
import RegionalTrips from './RegionalTrips';
import Dashboard from './Dashboard';
import { useState } from 'react';
const month_list = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function Home(){
    const [content, changeContent] = useState(<Description onRequestBooking={requestBooking}/>);
    const [disbaleButton, setDisableButton] = useState(false);
    function requestBooking(){
        changeContent(<RequestBooking onBookingCancel={handleBookingCancel}/>);
        setDisableButton(true);
    }
    function handleBookingCancel(){
        changeContent(<Description onRequestBooking={requestBooking} />);
        setDisableButton(false);
    }
    function tranformResptodata(body){
        let db_data =[];
              for(let i=0;i<body.length;i++){
                db_data.push(
                    {
                        id: body[i].id,
                        Regional_ADA_Client_ID: body[i].Regional_ADA_Client_ID ? body[i].Regional_ADA_Client_ID : "",
                        Agency_Client_ID: body[i].Agency_Client_ID ? body[i].Agency_Client_ID : "",
                        Agency_Name: body[i].Agency_Name ? body[i].Agency_Name : "",
                        First_Name: body[i].First_Name ? body[i].First_Name : "",
                        Last_Name: body[i].Last_Name ? body[i].Last_Name : "",
                        Phone: body[i].Phone ? body[i].Phone : "",
                        Personal_Care_Assistant_Aide: false,
                        Number_of_Companions: body[i].Number_of_Companions ? body[i].Number_of_Companions : "",
                        Requested_Accommodation_Details: body[i].Requested_Accommodation_Details ? body[i].Requested_Accommodation_Details : "",
                        Trip_Date: body[i].Trip_Date ? body[i].Trip_Date : "",
                        Trip_Day_of_Week: body[i].Trip_Day_of_Week ? body[i].Trip_Day_of_Week : "",
                        Pickup_Location: body[i].Pickup_Location ? body[i].Pickup_Location : "",
                        Pickup_Time: body[i].Pickup_Time ? body[i].Pickup_Time : "",
                        Drop_off_Location: body[i].Drop_off_Location ? body[i].Drop_off_Location : "",
                        Drop_off_Time: body[i].Drop_off_Time ? body[i].Drop_off_Time : "",
                        Notes: body[i].Notes ? body[i].Notes : ""

                    }
                )
              }
              console.log('db_data->',db_data);
              return db_data;
    }
    function handleRegionalTrips(){
        console.log("regional trips");
        setDisableButton(false);
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://pnso58n3l1.execute-api.ap-south-1.amazonaws.com/dev");
        xhr.onload = function () {
            if (xhr.status === 200) {
              const responseData = JSON.parse(xhr.responseText);
              
              const body = JSON.parse(responseData['body']);
              let db_data = tranformResptodata(body);
              changeContent(<RegionalTrips db_data={db_data}/>)
            } else {
              console.error("Error:", xhr.status, xhr.statusText);
            }
        };
        xhr.onerror = function () {
            console.error("Request failed");
          };
        xhr.send();
        
    }
    function graphData(db_data){
        let graph_db = [
            {month: "Jan",bookings : 0},
            {month: "Feb",bookings : 0},
            {month: "Mar",bookings : 0},
            {month: "Apr",bookings : 0},
            {month: "May",bookings : 0},
            {month: "Jun",bookings : 0},
            {month: "Jul",bookings : 0},
            {month: "Aug",bookings : 0},
            {month: "Sep",bookings : 0},
            {month: "Oct",bookings : 0},
            {month: "Nov",bookings : 0},
            {month: "Dec",bookings : 0}
        ];
        for(let i=0;i<db_data.length;i++){
            if(db_data[i].Trip_Date.length>0){
                let x = db_data[i].Trip_Date.split("-")
                const trip_date = new Date(x[0],x[1],x[2])
                console.log("tripdate",trip_date);
                graph_db.filter(data=>data.month===month_list[trip_date.getMonth()-1]).map(data=>(data.bookings++));

            }
        }
        return graph_db;
    }
    function handleDashboard(){
        console.log("regional trips");
        setDisableButton(false);
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://pnso58n3l1.execute-api.ap-south-1.amazonaws.com/dev");
        xhr.onload = function () {
            if (xhr.status === 200) {
              const responseData = JSON.parse(xhr.responseText);
              
              const body = JSON.parse(responseData['body']);
              let db_data = tranformResptodata(body);
              let graph_db = graphData(db_data);
              changeContent(<Dashboard db_data={graph_db} />)
            } else {
              console.error("Error:", xhr.status, xhr.statusText);
            }
        };
        xhr.onerror = function () {
            console.error("Request failed");
          };
        xhr.send();
    }
    return (
        <div className="container-fluid border p-0">
            <div className="row border m-0">  
                {/* //vh-100 */}
                <div className="col-md-2 col-sm-12 border container-fluid d-flex flex-column" id="sideNavbar">
                    <div className="row p-0 ps-3">
                            <div className="col-md-2 p-0 m-0">
                                <h3><i className="bi bi-x-square"></i></h3>
                            </div>
                            <div className="col-md-10 p-0 m-0">
                                <div className="d-flex flex-column">
                                <h5 className="m-0">RPTB</h5>
                                <p className="">Regional Paratransit Trip Booking</p>
                                </div>
                            </div>
                        
                    </div>
                    <div className="row p-0 ps-3">
                        <button className="btn btn-primary m-0 p-2 rounded-0" onClick={requestBooking} disabled={disbaleButton}> + Request Booking</button>
                    </div>
                    <div className="row p-0 ps-3">
                        <button className="btn m-0 p-2 border rounded-0" onClick={handleDashboard}><i className="bi bi-house-door"></i> Dashboard</button>
                    </div>
                    <div className="row p-0 ps-3">
                    <button className="btn m-0 p-2 border rounded-0"><i className="bi bi-inbox"></i> Inbox</button>
                    </div>
                    <div className="row p-0 ps-3">
                    <button className="btn m-0 p-2 border rounded-0" onClick={handleRegionalTrips}><i className="bi bi-tags"></i> Regional Trips</button>
                    </div>
                    <div className="row p-0 ps-3">
                    <button className="btn m-0 p-2 border rounded-0"><i className="bi bi-files"></i> Reports</button>
                    </div>
                    <div className="row p-0 ps-3 mt-auto">
                            <div className="col-md-2 p-0 m-0">
                                <h3><i className="bi bi-person-circle"></i></h3>
                            </div>
                            <div className="col-md-8 p-0 m-0">
                                <div className="d-flex flex-column">
                                <h6 className="m-0">Jane Doe</h6>
                                <p className="">Agency</p>
                                </div>
                            </div>
                            <div className="col-md-2 p-0 m-0">
                                <h5><i className="bi bi-gear"></i></h5>
                            </div>
                    </div>
                </div>
                {content}

                
            </div>
        </div>
    );
}
export default Home