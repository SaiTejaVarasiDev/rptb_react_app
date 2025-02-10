import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";
const data = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 7000 },
    { name: "May", sales: 6000 },
    { name: "Jun", sales: 8000 }
  ];
function Dashboard({db_data}){
    return (
        <div className="col-md-10 col-sm-12 container-fluid">
            <h4>Regional Paratransit Trips Dashboard</h4>
            <div className="row row-cols-5 ps-3 pt-3 pb-3">
                <div className="col border me-4">
                    <p>Booking Successful</p>
                    <p>{db_data.reduce((count,rec)=> count+rec.bookings,0)}</p>
                </div>
                <div className="col border me-4">
                    <p>Round Trips Booked</p>
                </div>
                <div className="col border me-4">
                    <p>Trips Canceled</p>
                </div>
                <div className="col border me-4">
                    <p>Bookings Failed</p>
                </div>

            </div>
            <div className="row row-cols-1">
                <div className="col">
                    <p>Trip Bookings</p>
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
    )
}
export default Dashboard