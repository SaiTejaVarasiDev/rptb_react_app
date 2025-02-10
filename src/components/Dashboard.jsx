import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie} from "recharts";
import "./Dashboard.css";
const data = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 7000 },
    { name: "May", sales: 6000 },
    { name: "Jun", sales: 8000 }
  ];
function Dashboard({db_data, pie_data}){
    return (
        <div className="col-md-10 col-sm-12 container-fluid pt-4 ps-5">
            <h4>Regional Paratransit Trips Dashboard</h4>
            <div className="row row-cols-5 ps-2 pt-3 pb-3">
                <div className="col border me-4 card text-bg-success">
                    <div className="card-body">

                    <h5 className="card-title">Booking Successful</h5>
                    <p className="card-text">{db_data.reduce((count,rec)=> count+rec.bookings,0)}</p>
                    </div>
                </div>
                
                <div className="col border me-4 card text-bg-success">
                    <div className="card-body">

                    <h5 className="card-title">Round Trips Booked</h5>
                    <p className="card-text">4</p>
                    </div>
                </div>
                
                
                <div className="col border me-4 card text-bg-danger">
                    <div className="card-body">

                    <h5 className="card-title">Trips Canceled</h5>
                    <p className="card-text">5</p>
                    </div>
                </div>
                
                
                <div className="col border me-4 card text-bg-warning">
                    <div className="card-body">

                    <h5 className="card-title">Bookings Failed</h5>
                    <p className="card-text">7</p>
                    </div>
                </div>
                

            </div>
            <div className="row row-cols-1 mt-3 me-5 customTile p-3">
                <div className="col">
                    <p className="TitleHeading">Trip Bookings</p>
                    <div>
                    <LineChart width={900} height={300} data={db_data} margin={{ top: 5, right: 0, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="bookings" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month"/>
                        <YAxis />
                        <Tooltip />
                    </LineChart> 
                    </div>
                       
                </div>
            </div>
            <div className="row row-cols-1 mt-3 me-5 customTile p-3">
                <div className="col">
                    <p className="TitleHeading">Agency Booked</p>
                    <div>
                    <PieChart width={900} height={300} margin={{ top: 5, right: 0, bottom: 5, left: 0 }}>
                        <Pie data={pie_data} dataKey="value" nameKey="Agency" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        <Tooltip />
                    </PieChart>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard