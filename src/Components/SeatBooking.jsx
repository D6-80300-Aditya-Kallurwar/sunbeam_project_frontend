import React, { useEffect, useState } from "react";
import logo from "../img/SignupImage.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSeat, deleteSeat, findSeat, removeItem} from "../features/seatSlice";
import axios from "axios";
import { toast } from "react-toastify";


const Seat = (prop) => {
    const dispatch = useDispatch();
    const arr=useSelector((state)=>[state.seat.items]);
    const [color,setcolor] = useState("bg-transparent");
    useEffect(()=>{
        console.log(prop.seat.seatNo);
        console.log(arr.includes(prop.seat.seatNo))
        dispatch(removeItem())
            if(prop.seat.isAvailable )
            setcolor("text-secondary");
        else
        setcolor("text-danger");
    // }
},[]);
var flag=false;
const dosomething =(seat)=>{
    // console.log(arr[0]);
    console.log(seat);
    // var ind=arr.find((tseat,index)=>{tseat==seat?flag=true:flag=false});
    
    if(arr[0].includes(seat)){
        
        // alert("inside");
            setcolor("text-secondary")
            dispatch(deleteSeat(seat));
            console.log(arr);
    }else{
        setcolor("text-success");
        dispatch(addSeat(seat));
        console.log(arr);
     }
        }
        return (
            <div  className={color} onClick={()=>prop.seat.isAvailable?dosomething(prop.seat.seatNo):flag=true} >
        <i className={'fas fa-chair p-2 coloring bold'} ></i>
    </div>
    );
};

const SeatBooking = () => {
    const location=useLocation();
    // console.log(location.state.theater);
    // console.log(location.state.showId);
    const dispatch = useDispatch();
    console.log(location.state.showId);
    var arr=useSelector((state)=>[state.seat.items]);
    const navigate = useNavigate();
    console.log(location.state);
    const submitarray=()=>{
        // console.log(arr.length);
        if(arr[0].length!==0){

            console.log(sessionStorage.getItem("userData"));
            const data ={
            showId: location.state.showId,
            userId: sessionStorage.getItem("userData")-0,
            requestSeats: arr[0]
          }
          console.log(data)
          axios.post("http://127.0.0.1:8081/ticket/book",data).then((result)=>{
              dispatch(removeItem());
              navigate("/");
              toast.success("Tickets booked succesfully");
              console.log(result);
            }).catch((e)=>{
                console.log(data.userId);
                if(data.userId==0){
                    toast.warning("Please Login first");
                    navigate("/login");
                }else{
                    
                    toast.error("Some error occured");
                    console.log(e);
                }
            })
        }else toast.warning("please select seats");
    }

    const [seatsData,setSeatsData]=useState([{id:0,seatNo:"",seatType:"",price:0,isAvailable:true,isFoodContains:false}]);
    console.log(location.state);
    useEffect(()=>{
    const data="";
    console.log(data);
    if(location.state.theater.length !== undefined){
        setSeatsData(location.state.theater);
    }
console.log(seatsData);
    },[location.state])
    return (

        <div className="container text-center">
                    <p className="display-3">Select Seats</p>
            <div className="row text-center my-4">
            <div className="col-md-3 col-12"></div>
                <div className="col-md-6 col-12 px-4 lead">
                <div  > SCREEN</div>
                    <div className="screen d-flex flex-wrap justify-content-center " style={{ borderTop: "4px solid skyblue" }}>
                       

                        <span className="w-100 mt-5"> Classic seats</span>
                        {seatsData.map((seat, index) => {
                           if(seat.seatType==="CLASSIC") return <Seat seat={seat}/>
                          
                        })}
                        <hr />
                        <span className="w-100"> Premium seats</span>
                        {seatsData.map((seat, index) => {
                           if(seat.seatType==="PREMIUM") return <Seat seat={seat}/>
                          
                        })}
                    </div>
                    <button className="btn btn-success my-2" onClick={submitarray} >Book Ticket</button>
                </div>
            <div className="col-md-3 col-12"></div>
               

            </div>
        </div>
    )
};

export default SeatBooking;
