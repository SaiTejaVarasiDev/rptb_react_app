function BookingPreview({onSubmit, onCancel, data}){
    function handleSave(e){
        e.preventDefault();
        onSubmit(e);
    }
    function handleCancel(e){
        e.preventDefault();
        onCancel(e);
    }
    return (
        <div className="container row justify-content-center pt-5">
            <div className="col-10 border">
                
                <div className="row row-cols-1">
                <h5>Client</h5>
                <div className="col">
                    <p>Regional ADA Client ID</p>
                    <p>{data.Regional_ADA_Client_ID}</p>
                    </div>
                </div>
                <div className="row row-cols-2">
                    <div className="col">
                        <p>Agency ID</p>
                        <p>{data.Agency_Client_ID}</p>
                    </div>
                    <div className="col">
                        <p>Agency Name</p>
                        <p>{data.Agency_Name}</p>
                    </div>
                </div>
                <div className="row row-cols-2">
                    <div className="col">
                        <p>First Name</p>
                        <p>{data.First_Name}</p>
                    </div>
                    <div className="col">
                        <p>Last Name</p>
                        <p>{data.Last_Name}</p>
                    </div>
                </div>
                <div className="row row-cols-1">
                    <div className="col">
                        <p>Phone</p>
                        <p>{data.Phone}</p>
                    </div>
                </div>
                <div className="row row-cols-1">
                    <div className="col">
                        <p>Number of Companions</p>
                        <p>N/A</p>
                    </div>
                </div>

                <div className="row row-cols-1">
                    <div className="col">
                        <p>Requested Accommodation Details</p>
                        <p>{data.Requested_Accommodation_Details}</p>
                    </div>
                </div>
                <hr></hr>
                <h5>Trip</h5>
                <div className="row row-cols-2">
                    <div className="col">
                        <p>Trip ID</p>
                        <p>N/A</p>
                    </div>
                    <div className="col">
                        <p>Group ID</p>
                        <p>N/A</p>
                    </div>
                </div>
                <div className="row row-cols-2">
                    <div className="col">
                        <p>Trip Date</p>
                        <p>{data.Trip_Date}</p>
                    </div>
                    <div className="col">
                        <p>Trip Day of Week</p>
                        <p>{data.Trip_Day_of_Week}</p>
                    </div>
                </div>
                <div className="row row-cols-2">
                    <div className="col">
                        <p>Pickup Location</p>
                        <p>{data.Pickup_Location}</p>
                    </div>
                    <div className="col">
                        <p>Pickup Time</p>
                        <p>{data.Pickup_Time}</p>
                    </div>
                </div>
                <div className="row row-cols-2">
                    <div className="col">
                        <p>Drop off Location</p>
                        <p>{data.Drop_off_Location}</p>
                    </div>
                    <div className="col">
                        <p>Drop off Time</p>
                        <p>{data.Drop_off_Time}</p>
                    </div>
                </div>
                <div className="row row-cols-1">
                    <div className="col">
                        <p>Notes</p>
                        <p>{data.Notes}</p>
                    </div>
                </div>
                <div className="row row-cols-1 form tile">
                    <div className="col d-flex justify-content-end">
                        <button className="btn btn-outline-primary" onClick={handleCancel}>Cancel</button>
                        <button className="btn btn-primary" type="submit" onClick={handleSave} >{data.Booked ? "Close" : "Submit"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BookingPreview