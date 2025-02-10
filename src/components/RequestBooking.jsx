import { useState, useEffect } from "react";
import ClientDetails from "./ClientDetails";
import TripDetails from "./TripDetails";
import BookingPreview from "./BookingPreview";
import "./RequestBooking.css"
function RequestBooking({onBookingCancel}){
    const [BookingData,setData] = useState({
        current_stage: 1,
        body: {
            1:{content: <ClientDetails onSubmit={nextStage} onCancel={prevStage}/>, completed: true, form_complete: false},
            2:{content: <TripDetails onSubmit={nextStage} onCancel={prevStage}/>, completed: false, form_complete: false},
            3:{content: <BookingPreview onSubmit={nextStage} onCancel={prevStage}/>, completed: false,form_complete: false}
        },
        Regional_ADA_Client_ID: "",
        Agency_Client_ID: "",
        Agency_Name: "",
        First_Name: "",
        Last_Name: "",
        Phone: "",
        Personal_Care_Assistant_Aide: false,
        Number_of_Companions: "",
        Requested_Accommodation_Details: "",
        Trip_Date: "",
        Trip_Day_of_Week: "",
        Pickup_Location: "",
        Pickup_Time: "",
        Drop_off_Location: "",
        Drop_off_Time: "",
        Notes: "",
        Booked: false

    });
    // useEffect(() => {
    //     console.log('stage', stage);
    //     console.log("child_data->"+child_data)
    //     setData(child_data);
    // }, [stage])
    // useEffect(() => {
    //     console.log('BookingData', BookingData);
    //     console.log('stage', stage);
    //     setBody(prevBody => ({
    //         ...prevBody,
    //         [stage]: { ...prevBody[stage], completed: true }
    //       }));
    // }, [BookingData])
    useEffect(() => {
        console.log('BookingData', BookingData);
      }, [BookingData])
    
    function nextStage(state_data){
        if(BookingData.current_stage<3){
            console.log(BookingData.current_stage)
            setData(prevBookingData=>({
                ...prevBookingData,
                current_stage: prevBookingData.current_stage+1,
                body : {
                    ...prevBookingData.body,
                    [prevBookingData.current_stage]:{...prevBookingData[prevBookingData.current_stage],completed:true,form_complete: true},
                    [prevBookingData.current_stage+1]:{...prevBookingData[prevBookingData.current_stage+1],completed:true,}
                },
                Regional_ADA_Client_ID: state_data.Regional_ADA_Client_ID,
                Agency_Client_ID: state_data.Agency_Client_ID,
                Agency_Name: state_data.Agency_Name,
                First_Name: state_data.First_Name,
                Last_Name: state_data.Last_Name,
                Phone: state_data.Phone,
                Personal_Care_Assistant_Aide: false,
                Number_of_Companions: state_data.Number_of_Companions,
                Requested_Accommodation_Details: state_data.Requested_Accommodation_Details,
                Trip_Date: state_data.Trip_Date,
                Trip_Day_of_Week: state_data.Trip_Day_of_Week,
                Pickup_Location: state_data.Pickup_Location,
                Pickup_Time: state_data.Pickup_Time,
                Drop_off_Location: state_data.Drop_off_Location,
                Drop_off_Time: state_data.Drop_off_Time,
                Notes: state_data.Notes,
            }));
        }else{
            if(BookingData.Booked){
                console.log("got to home")
            }else{
                
                const data = JSON.stringify({
                    Regional_ADA_Client_ID: BookingData.Regional_ADA_Client_ID,
                Agency_Client_ID: BookingData.Agency_Client_ID,
                Agency_Name: BookingData.Agency_Name,
                First_Name: BookingData.First_Name,
                Last_Name: BookingData.Last_Name,
                Phone: BookingData.Phone,
                Personal_Care_Assistant_Aide: false,
                Number_of_Companions: BookingData.Number_of_Companions,
                Requested_Accommodation_Details: BookingData.Requested_Accommodation_Details,
                Trip_Date: BookingData.Trip_Date,
                Trip_Day_of_Week: BookingData.Trip_Day_of_Week,
                Pickup_Location: BookingData.Pickup_Location,
                Pickup_Time: BookingData.Pickup_Time,
                Drop_off_Location: BookingData.Drop_off_Location,
                Drop_off_Time: BookingData.Drop_off_Time,
                Notes: BookingData.Notes,
                })
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://pnso58n3l1.execute-api.ap-south-1.amazonaws.com/dev');
                xhr.onload = function() {
                if (xhr.status === 200) {
                    console.log(JSON.parse(xhr.responseText));
                }
                };
                xhr.send(data);
                setData(prevBookingData=>({
                    ...prevBookingData,
                    body : {
                        ...prevBookingData.body,
                        [prevBookingData.current_stage]:{...prevBookingData[prevBookingData.current_stage],completed:true,form_complete: true}
                    },
                    Booked : true
                }))
                console.log("booking completed");
            }
            
            
        }
        
        
    }
    function prevStage(){
        if(BookingData.current_stage>1 && !BookingData.Booked){
            console.log(BookingData.current_stage)
            setData(prevBookingData=>({
                ...prevBookingData,
                current_stage: prevBookingData.current_stage-1,
                body : {
                    ...prevBookingData.body,
                    [prevBookingData.current_stage]:{...prevBookingData[prevBookingData.current_stage],completed:false},
                    [prevBookingData.current_stage-1]:{...prevBookingData[prevBookingData.current_stage-1],completed:true, form_complete: false}
                },
            }));
        }else{
            onBookingCancel();
        }
        
    }
    
    
    return (
        <div className="col-md-10 col-sm-12 container-fluid pe-5">
            <div className="row row-cols-1 ps-5 pt-2">
                <div className="col ps-0">
                    {BookingData.Booked ? <div><h2>Booking Request Created</h2><h5 id="booking_status">Success</h5></div> : <h2>Request Booking</h2> }
                </div>
                <div className="col">
                    <div className="row row-cols-3">
                        <div className={`col ${BookingData.body[1].form_complete ? "completedstagebar":BookingData.current_stage===1? "current_stagebar":"non-completed-stagebar"}`}>
                            <div className="row row-cols-2">
                                <div className="col-1 ps-1">
                                    {BookingData.current_stage===1 ? <i className="bi bi-circle"></i> : <i className="bi bi-check"></i>}
                                    
                                </div>
                                <div className="col-11 ps-0">
                                    <div className="d-flex align-items-start">1. Client Details</div>
                                    <div className="d-flex align-items-end ps-0">Active Step Text</div>
                                </div>
                            </div>
                            
                        </div>
                        <div className={`col ${BookingData.body[2].form_complete ? "completedstagebar":BookingData.current_stage===2? "current_stagebar":"non-completed-stagebar"}`}>
                            <div className="row row-cols-2">
                                <div className="col-1 ps-1">
                                {BookingData.current_stage<=2 ? <i className="bi bi-circle"></i> : <i className="bi bi-check"></i>}
                                </div>
                                <div className="col-11 ps-0">
                                    <div className="d-flex align-items-start">2. Trip Details</div>
                                    <div className="d-flex align-items-end">Active Step Text</div>
                                </div>
                            </div>
                            
                        </div>
                        <div className={`col ${BookingData.body[3].form_complete ? "completedstagebar":BookingData.current_stage===3? "current_stagebar":"non-completed-stagebar"}`}>
                            <div className="row row-cols-2">
                                <div className="col-1 ps-1">
                                {BookingData.Booked ? <i className="bi bi-check"></i> : <i className="bi bi-circle"></i>}
                                </div>
                                <div className="col-11 ps-0">
                                    <div className="d-flex align-items-start">3. Booking Preview</div>
                                    <div className="d-flex align-items-end ps-0">Active Step Text</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col">
                    {/* {BookingData.body[BookingData.current_stage].content} */}
                    {BookingData.current_stage===1 ? <ClientDetails onSubmit={nextStage} onCancel={prevStage} data={BookingData}/>:BookingData.current_stage===2 ? <TripDetails onSubmit={nextStage} onCancel={prevStage} data={BookingData}/>:  <BookingPreview onSubmit={nextStage} onCancel={prevStage} data={BookingData}/> }
                </div>
            </div>
        </div>
    );
}

export default RequestBooking;