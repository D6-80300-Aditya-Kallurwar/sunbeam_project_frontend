import '../common/common.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AddTheater from './upperAddMovie';

function Dashboard() {
    const [Theaters, setTheaters] = useState([]);
    const [theater, setTheater] = useState({ theaterid: "", theaterName: "", address: ""});
    const [message, setMessage] = useState("");
    const [isDisabled, setisDisabled] = useState('disabled');
    const [searchText, setSearchText] = useState('');


    const url = "http://127.0.0.1:8080/theater"
    const urlimage = "http://127.0.0.1:8080/theater/MovieList"

    useEffect(() => {
        GetRecords();
    }, []); //as good as componentDidMount

    const GetRecords = () => {
        let updatedUrl = url + "/MovieList";
        axios.get(updatedUrl).then((result) => {
            var moviesReceived = result.data;
            setTheaters(moviesReceived);
            // getImages();
        });

    }


    const RemoveRecord = (No)=>{
        let updatedUrl = url + "/" + No;

        axios.delete(updatedUrl).then((result)=>{
            {
                ShowMessage(result);
                GetRecords();
            }
        });
    }

    const OnSearch = (args) => {
        setSearchText(args.target.value);
    }

    const AddRecord = () => {
        let updatedUrl=url+"/addNew";
        axios.post(updatedUrl, theater).then((result) => {
                ShowMessage(result);
                //    Reset();
                GetRecords();
            
        });
    }
    const OnTextChanged = (args) => {
        var copyOfTheater = { ...theater };
        copyOfTheater[args.target.name] = args.target.value;
        setTheater(copyOfTheater)
    }

    return (<div className='container'>
        <center>
            <hr></hr>
            {/* <div className='alert alert-info'>{message}</div> */}
            <div className='container'>
                <h3>Add Movie</h3>
                <AddTheater theater={theater}
                    OnTextChanged={OnTextChanged}
                    AddRecord={AddRecord}
                    isDisabled={isDisabled} />
            </div>
            <hr />
            <hr />  

            <div className='text-start row'>
            <div className='col-2 text-center'>
                </div>
                <div class="input-group w-75 col">
                    <span class="input-group-text" id="basic-addon1"> @ Search </span>
                    <input type="text" class="form-control" placeholder="Movie Name" aria-describedby="basic-addon1" value={searchText}
                        onChange={OnSearch} />
                </div>
                <div className='col-2 text-center'>
                </div>

            </div>

            <hr></hr>
            <div className='table-responsive'>
                <table className='table table-hover '>
                    <thead>
                        <tr>
                            <th>Theater Id</th>
                            <th>Theater Name</th>
                            <th>Address</th>
                            <th>No of seats</th>
                            <th></th>   
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Theaters.map((theater) => {
                                if (searchText !== "") {
                                    if (theater.theaterName.toLowerCase().includes(searchText.toLowerCase())) {

                                        return <tr key={theater.theaterid}>
                                            <td>{theater.theaterid}</td>
                                            <td>{theater.theaterName}</td>
                                            <td>{theater.address}</td>
                                            <td>{theater.noofseats}</td>
                                            <td >
                                                <button
                                                    className='btn btn-danger '
                                                onClick={() => {
                                                    RemoveRecord(theater.theaterid)
                                                }}
                                                >
                                                    Delete
                                                </button>

                                            </td>
                                        </tr>
                                    }
                                    else {
                                        return null;
                                    }
                                }
                                else {
                                    return <tr key={theater.theaterid}>
                                            <td>{theater.theaterid}</td>
                                        <td>{theater.theaterName}</td>
                                        <td>{theater.address}</td>
                                        <td>{theater.noofseats}</td>
                                        <td>
                                            <button
                                                className='btn btn-danger'
                                            onClick={() => {
                                                RemoveRecord(theater.theaterid)
                                            }}
                                            >
                                                Delete
                                            </button>

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

export default Dashboard;