import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AddTheater from './upperAddTheater';
import ShowCrud from '../Admin_Shows_Crud/Admin_Shows_crud';
import { NavLink, useNavigate } from 'react-router-dom';



export default function TheaterCrud() {
    const [reqTheaters, setreqTheaters] = useState([]);
    const [reqtheater, setreqTheater] = useState({ id: "", name: "", address: "", theaterseatlist: [] });
    const [searchText, setSearchText] = useState('');
    const [resTheater, setresTheater] = useState({ name: "", address: "", noOfSeatInRow: "", noOfPremiumSeat: "", noOfClassicSeat: "" });
    
    const url = "http://127.0.0.1:8081/theater"
    const navigate = useNavigate();

    useEffect(() => {
        GetTheaters();
    }, []);

    const GetTheaters = () => {
        let updatedUrl = url + "/TheaterList";
        axios.get(updatedUrl).then((result) => {
            var theaterReceived = result.data;
            setreqTheaters(theaterReceived);
        });
    }

    const getseatcount = (reqtheater) => {
        return reqtheater.theaterseatlist.length;
    }

    const RemoveRecord = (id) => {
        let updatedUrl = url + "/deleteTheater/" + id;

        axios.delete(updatedUrl).then((result) => {
            {
                GetTheaters();
            }
        });
    }

    const OnSearch = (args) => {
        setSearchText(args.target.value);
    }

    const AddRecord = () => {
        let updatedUrl = url + "/addNew";
        axios.post(updatedUrl, resTheater).then((result) => {
            GetTheaters();
        });
    }
    const OnTextChanged = (args) => {
        var copyOfTheater = { ...resTheater };
        copyOfTheater[args.target.name] = args.target.value;
        setresTheater(copyOfTheater)
    }

    function callShowCrud(theater) {
        let obj = { id: theater.id, name: theater.name, address: theater.address };
        // console.log(obj);
        sessionStorage.setItem("reqInfo", JSON.stringify(obj));
        navigate("/showscrud");
    }
   


    return (<div className='container'>
        <hr />
        <div className='row'>
            <div className='col'>
                <h1>Welcome Admin</h1>

            </div>
            <div className='col text-end'>
                <NavLink to={"/Admin"}>
                    <button type="button" class="btn btn-dark">Home</button>
                </NavLink>

            </div>
        </div>
        <center>
            <hr></hr>

            <div className='container'>
                <h3>Add Theater</h3>
                <br />

                <AddTheater resTheater={resTheater}
                    OnTextChanged={OnTextChanged}
                    AddRecord={AddRecord}
                />
            </div>
            <hr />
            <hr />

            <div className='text-start row'>
                <div className='col-2 text-center'>
                </div>
                <div className="input-group w-75 col">
                    <span className="input-group-text" id="basic-addon1"> @ Search </span>
                    <input type="text" className="form-control" placeholder="Movie Name" aria-describedby="basic-addon1" value={searchText}
                        onChange={OnSearch} />
                </div>
                <div className='col-2 text-center'>
                </div>

            </div>

            <hr></hr>
            <div className='table-responsive'>
                <table className='table table-hover text-center'>
                    <thead>
                        <tr>
                            <th>Theater Name</th>
                            <th>Theater Address</th>
                            <th>Seats</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reqTheaters.map((reqtheater) => {
                                if (searchText !== "") {
                                    if (reqtheater.name.toLowerCase().includes(searchText.toLowerCase())) {
                                        return <tr key={reqtheater.id}>
                                            <td>{reqtheater.name}</td>
                                            <td>{reqtheater.address}</td>
                                            <td>{getseatcount(reqtheater)}</td>

                                            {/* <td>{theater.noofseats}</td> */}
                                            <td >
                                                <button
                                                    className='btn btn-danger '
                                                    onClick={() => {
                                                        RemoveRecord(reqtheater.id)
                                                    }}
                                                >
                                                    Delete
                                                </button>

                                            </td> <td>
                                                {/* <NavLink to={'/showscrud'} state={{ id: {theater_id},type:"theater" }} className="btn btn-secondary">Shows </NavLink> */}
                                                <button onClick={() => { callShowCrud(reqtheater) }} className="btn btn-secondary">Shows</button>
                                            </td>
                                        </tr>
                                    }
                                    else {
                                        return null;
                                    }
                                }
                                else {
                                    return <tr key={reqtheater.id}>
                                        <td>{reqtheater.name}</td>
                                        <td>{reqtheater.address}</td>
                                        <td>{getseatcount(reqtheater)}</td>

                                        <td className='text-end'>
                                            <button
                                                className='btn btn-danger'
                                                onClick={() => {
                                                    RemoveRecord(reqtheater.id)
                                                }}
                                            >
                                                Delete
                                            </button>

                                        </td>
                                        <td>
                                            {/* <NavLink to={'/showscrud'} state={{ id: {theater_id},type:"theater" }} className="btn btn-secondary">Shows </NavLink> */}
                                            <button onClick={() => { callShowCrud(reqtheater) }} className="btn btn-secondary">Shows</button>

                                        </td>
                                    </tr>
                                }

                            })
                        }
                    </tbody>

                </table>
            </div>
        </center>
    </div>);
}
