import { useState, useEffect } from 'react';
import './ClientDetails.css'
function ClientDetails({onSubmit, onCancel, data}){
    
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
    // const [state_data, setStateData] = useState({
    //     Regional_ADA_Client_ID: "",
    //     Agency_Client_ID: "",
    //     Agency_Name: "",
    //     First_Name: "",
    //     Last_Name: "",
    //     Phone: "",
    //     Personal_Care_Assistant_Aide: "",
    //     Number_of_Companions: "",
    //     Requested_Accommodation_Details: "",
    //     Trip_Date: "",
    //     Trip_Day_of_Week: "",
    //     Pickup_Location: "",
    //     Pickup_Time: "",
    //     Drop_off_Location: "",
    //     Drop_off_Time: "",
    //     Notes: ""
    // })
    function handleSave(e){
        e.preventDefault();
        onSubmit(state_data);
    }
    function handleCancel(e){
        e.preventDefault();
        onCancel();
    }
    // useEffect(() => {
    //     // console.log("data->"+JSON.stringify(data));
    //     console.log('state_data1', state_data);
    //   }, [state_data])
    return (
        <div className="container row justify-content-center pt-5">
            <div className="col-10 border">
                <form>
                    <h5 className='formtitle'>ADA & Agency ID</h5>
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
                        <select id="AgencyName" className="form-select" value={state_data.Agency_Name} onChange={(e)=>setStateData({...state_data, Agency_Name:e.target.value})}>
                            <option value="">Select Agency</option>
                            <option value="VTA" selected = {state_data.Agency_Name==="VTA"? true : false}>VTA</option>
                            <option value="EBP" selected = {state_data.Agency_Name==="EBP"? true : false}>EBP</option>
                            <option value="STB" selected = {state_data.Agency_Name==="STB"? true : false}>STB</option>
                            <option value="OPD" selected = {state_data.Agency_Name==="OPD"? true : false}>OPD</option>
                        </select>
                        <div id="AgencyNameHelp" className="form-text">REQUIRED</div>

                        </div>
                    </div>
                    <hr></hr>
                    <h5>Client Information</h5>
                    <div className="row row-cols-2 formtile">
                        <div className="col">
                        <label htmlFor="FirstName" className="form-label">First Name</label>
                        <input type="text" id="FirstName" placeholder="Jane" className="form-control" value={state_data.First_Name} onChange={(e)=>setStateData({...state_data, First_Name:e.target.value})}></input>
                        </div>
                        <div className="col">
                        <label htmlFor="LastName" className="form-label">Last Name</label>
                        <input type="text" id="LastName" placeholder="Doe" className="form-control" value={state_data.Last_Name} onChange={(e)=>setStateData({...state_data, Last_Name:e.target.value})}></input>
                        </div>
                    </div>
                    <div className="row row-cols-1 formtile">
                        <div className="col">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="text" id="phone" placeholder="(000) 000-0000" className="form-control" value={state_data.Phone} onChange={(e)=>setStateData({...state_data, Phone:e.target.value})}></input>
                        <div id="phoneHelp" className="form-text">REQUIRED</div>
                        </div>
                    </div>
                    <div className="row row-cols-1 formtile">
                        <div className="col">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="Assistant" {...state_data.Personal_Care_Assistant_Aide ? "checked":""}/>
                            <label className="form-check-label" htmlFor="Assistant">
                            Personal Care Assistant / Aide
                            </label>
                        </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 formtile">
                        <div className="col">
                        <label htmlFor="Companions" className="form-label">Number of Companions</label>
                        <select id="Companions" className="form-select" value={state_data.Number_of_Companions} onChange={(e)=>setStateData({...state_data, Number_of_Companions:e.target.value})}>
                            <option value="0" selected = {state_data.Agency_Name==="0"? true : false}>0</option>
                            <option value="1" selected = {state_data.Agency_Name==="1"? true : false}>1</option>
                            <option value="2" selected = {state_data.Agency_Name==="2"? true : false}>2</option>
                        </select>
                        <div id="CompanionsHelp" className="form-text">Shall not exceed 2.</div>
                        </div>
                    </div>
                    <div className="row row-cols-1 formtile">
                        <div className="col">
                        <label htmlFor="Accommodationdetails" className="form-label">Requested Accommodation Details</label>
                        <select id="Accommodationdetails" className="form-select">
                            <option>Select items</option>
                        </select>
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
export default ClientDetails