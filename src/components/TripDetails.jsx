import { useState } from "react";
function TripDetails({onSubmit, onCancel, data}){
    const [state_data, setStateData] = useState({
        Regional_ADA_Client_ID: data.Regional_ADA_Client_ID ? data.Regional_ADA_Client_ID : "",
        Agency_Client_ID: data.Agency_Client_ID ? data.Agency_Client_ID : "",
        Agency_Name: data.Agency_Name ? data.Agency_Name : "",
        First_Name: data.First_Name ? data.First_Name : "",
        Last_Name: data.Last_Name ? data.Last_Name : "",
        Phone: data.Phone ? data.Phone : "",
        Personal_Care_Assistant_Aide: false,
        Number_of_Companions: data.Number_of_Companions ? data.Number_of_Companions : "",
        Requested_Accommodation_Details: data.Requested_Accommodation_Details ? data.Requested_Accommodation_Details : "",
        Trip_Date: data.Trip_Date ? data.Trip_Date : "",
        Trip_Day_of_Week: data.Trip_Day_of_Week ? data.Trip_Day_of_Week : "",
        Pickup_Location: data.Pickup_Location ? data.Pickup_Location : "",
        Pickup_Time: data.Pickup_Time ? data.Pickup_Time : "",
        Drop_off_Location: data.Drop_off_Location ? data.Drop_off_Location : "",
        Drop_off_Time: data.Drop_off_Time ? data.Drop_off_Time : "",
        Notes: data.Notes ? data.Notes : "" 
    })
    function handleSave(e){
        e.preventDefault();
        onSubmit(state_data);
    }
    function handleCancel(e){
        e.preventDefault();
        onCancel();
    }
    return (
        <div className="container row justify-content-center pt-5">
            <div className="col-10 border">
                <form>
                    <div className="row row-cols-1 formtile">
                        <div className="col">
                        <label htmlFor="ADAclientId" className="form-label">Regional ADA Client ID</label>
                        <input type="text" id="ADAclientId" placeholder="###" className="form-control" value={state_data.Regional_ADA_Client_ID} onChange={(e)=>setStateData({...state_data, Regional_ADA_Client_ID:e.target.value})}></input>
                        </div>
                    </div>
                    <div className="row row-cols-2 formtile">
                        <div className="col">
                        <label htmlFor="AgencyclientId" className="form-label">Agency Client ID</label>
                        <input type="text" id="AgencyclientId" placeholder="###" className="form-control" value={state_data.Agency_Client_ID} onChange={(e)=>setStateData({...state_data, Agency_Client_ID:e.target.value})}></input>
                        <div id="AgencyclientIdHelp" className="form-text">REQUIRED Adept for EBP users and Trapeze for VTA Access.</div>
                        </div>
                        <div className="col">
                        <label htmlFor="AgencyName" className="form-label">Agency Name</label>
                        <select id="AgencyName" className="form-select" value={state_data.Agency_Name} onChange={(e)=>setStateData({...state_data, Agency_Name:e.target.value})} >
                            <option value="">Select Agency</option>
                            <option value="VTA" selected = {state_data.Agency_Name==="VTA"? true : false}>VTA</option>
                            <option value="EBP" selected = {state_data.Agency_Name==="EBP"? true : false}>EBP</option>
                            <option value="STB" selected = {state_data.Agency_Name==="STB"? true : false}>STB</option>
                            <option value="OPD" selected = {state_data.Agency_Name==="STB"? true : false}>STB</option>
                        </select>
                        <div id="AgencyNameHelp" className="form-text">REQUIRED</div>

                        </div>
                    </div>
                    <hr></hr>
                    <h5>Trip Details</h5>
                    <div className="row row-cols-2 formtile">
                        <div className="col">
                        <label htmlFor="TripDate" className="form-label">Trip Date</label>
                        <input type="date" id="TripDate" placeholder="Placeholder" className="form-control" value={state_data.Trip_Date} onChange={(e)=>setStateData({...state_data, Trip_Date:e.target.value})}></input>
                        <div id="TripDateHelp" className="form-text">REQUIRED</div>
                        </div>
                        <div className="col">
                        <label htmlFor="DayWeek" className="form-label">Trip Day of Week</label>
                        <input type="text" id="DayWeek" placeholder="Placeholder" className="form-control" value={state_data.Trip_Day_of_Week} onChange={(e)=>setStateData({...state_data, Trip_Day_of_Week:e.target.value})}></input>
                        </div>
                    </div>
                    <div className="row row-cols-2 formtile">
                        <div className="col">
                        <label htmlFor="DropoffLocation" className="form-label">Pickup Location</label>
                        <select id="DropoffLocation" className="form-select">
                            <option>Placeholder</option>
                        </select>
                        <div id="DropoffLocationHelp" className="form-text">REQUIRED</div>
                        </div>
                        <div className="col">
                        <label htmlFor="PickupTime" className="form-label">Pickup Time</label>
                        <input type="text" id="PickupTime" placeholder="00:00" className="form-control" value={state_data.Pickup_Time} onChange={(e)=>setStateData({...state_data, Pickup_Time:e.target.value})}></input>
                        <div id="PickupTimeHelp" className="form-text">REQUIRED</div>
                        </div>
                        
                    </div>
                    <div className="row row-cols-2 formtile">
                        <div className="col">
                        <label htmlFor="Drop-offLocation" className="form-label">Drop-off Location</label>
                        <select id="offLocation" className="form-select">
                            <option>Placeholder</option>
                        </select>
                        <div id="PickupLocationHelp" className="form-text">REQUIRED</div>
                        </div>
                        <div className="col">
                        <label htmlFor="DropoffTime" className="form-label">Drop-off Time</label>
                        <input type="text" id="DropoffTime" placeholder="00:00" className="form-control" value={state_data.Drop_off_Time} onChange={(e)=>setStateData({...state_data, Drop_off_Time:e.target.value})}></input>
                        </div>
                    </div>
                    <div className="row row-cols-1 formtile">
                        <div className="col">
                        <label htmlFor="Notes" className="form-label">Notes</label>
                        <textarea id="Notes" placeholder="Placeholder" className="form-control" value={state_data.Notes} onChange={(e)=>setStateData({...state_data, Notes:e.target.value})}></textarea >
                        </div>
                    </div>
                    <div className="row row-cols-1 formtile">
                        <div className="col d-flex justify-content-end">
                            <button className="btn btn-outline-primary" onClick={handleCancel}>Cancel</button>
                            <button className="btn btn-primary" type="submit" onClick={handleSave}>Save and Next</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default TripDetails