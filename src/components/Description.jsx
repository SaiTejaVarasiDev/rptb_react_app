function Description({onRequestBooking}){
    return (
        <div className="col-md-10 col-sm-12 border container-fluid d-flex align-items-center p-5">
        <div className="d-flex flex-column w-50">
        <h1>Welcome</h1>
        <p>
        Pellentesque convallis accumsan suscipit aliquet eu diam quis nulla turpis.
        In mus massa lectus laoreet sed semper bibendum id. Iaculis purus
        malesuada porttitor aliquam pulvinar.
        </p>
        <div className="d-flex flex-row justify-content-start">
                <button className="btn btn-primary flex-fill me-4 rounded-0">Inbox</button>
                <button className="btn btn-primary flex-fill me-4 rounded-0" onClick={onRequestBooking}>Request Booking</button>
                <button className="btn btn-primary flex-fill me-4 rounded-0">Regional Trips List</button>
        </div>
        </div>
        </div>
    );
}
export default Description