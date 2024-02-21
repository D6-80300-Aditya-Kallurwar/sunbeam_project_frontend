import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AddShow from './upperAddShow';
import { NavLink } from 'react-router-dom';



export default function ShowCrud() {

    const [reqShows, setreqShows] = useState([]);//from backend
    const [reqShow, setreqShow] = useState({ showId: "", showStartTime: "", showDate: "", theaterId: "", movieId: "" });
    const [searchText, setSearchText] = useState('');
    const [resShow, setresShow] = useState({ showStartTime: "", showDate: "", theaterId: "", movieId: "", priceOfClassicSeat: "", priceOfPremiumSeat: "" })//to backend
    var movieName = "";
    const [Movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({ movieId: "", movieName: "", duration: "", rating: "", releaseDate: "", genre: "", language: "" });
   
    const [Theater, setTheater] = useState({ theaterid: "", theatername: "", address: "" });
    const url = "http://127.0.0.1:8081/show"

    useEffect(() => {
        getInfo();
        getMovieList();
    }, []);

    function getInfo() {
        let info = JSON.parse(sessionStorage.reqInfo);
        Theater.theaterid = info.id;
        Theater.theatername = info.name;
        Theater.address = info.address;
        let requrl = url + "/theater-shows/" + Theater.theaterid;
        axios.get(requrl).then((result) => {
            var showsreceived = result.data;
            setreqShows(showsreceived);
        });

        resShow.theaterId = Theater.theaterid;


    }
    function getMovieList() {
        let movielisturl = "http://127.0.0.1:8081/movie/MovieList";
        axios.get(movielisturl).then((result) => {
            var moviesReceived = result.data;
            setMovies(moviesReceived);
        })
    }

    //=====================================================================================================================

    const RemoveRecord = (id) => {
        let updatedUrl = url + "/deleteShow/" + id;
        axios.delete(updatedUrl).then((result) => {
            {
                console.log(result);
                //getMovieList();
                getInfo();
            }
        });
    }

    // const OnSearch = (args) => {
    //     setSearchText(args.target.value);
    // }
    

    const AddRecord = () => {

        let updatedUrl = url + "/addNew";
        resShow.theaterId = Theater.theaterid;
        Movies.map((result) => {
            console.log(result);
            if (result.movieName == resShow.movieId) {

                resShow.movieId = result.movieid;
            }

        })
        console.log("res: " + resShow.showStartTime + " " + resShow.priceOfClassicSeat + " " + resShow.priceOfPremiumSeat);
        var addResponse = { showStartTime: resShow.showStartTime, showDate: resShow.showDate, theaterId: resShow.theaterId, movieId: resShow.movieId, priceOfClassicSeat: resShow.priceOfClassicSeat, priceOfPremiumSeat: resShow.priceOfPremiumSeat };
        addResponse.showStartTime += ":00";
        console.log("resShow  " + addResponse.showStartTime);
        axios.post(updatedUrl, addResponse).then((result) => {
            getInfo();
        });
    }

    const getTheaterId = () => {
        return Theater.theaterid;
    }

    function getTheaterName() {
        // console.log("theatername" + Theater.theatername)
        return Theater.theatername;
    }


    const getMovieName = (idreceived) => {
        Movies.map((movie) => {
            if (movie.id == idreceived) {
                console.log(movie.movieName)
                movieName = movie.movieName;
            }
        });
    }

    const OnTextChanged = (args) => {
        var copyOfShow = { ...resShow };
        copyOfShow[args.target.name] = args.target.value;

        setresShow(copyOfShow);
    }
    //=====================================================================================================================

    return (
        <>
            <div className='container'>
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
                </div><center>
                    <hr></hr>
                    <div className='container'>
                        <h3>Add Show</h3>
                        <br />

                        <AddShow resShow={resShow}
                            getTheaterid={getTheaterId}
                            OnTextChanged={OnTextChanged}
                            AddRecord={AddRecord}
                            getAllMovieNames={Movies}
                            
                        />
                    </div>
                    <hr />
                    <hr />

                    <div className='text-start row'>
                        <div className='col-2 text-center'>
                        </div>
                        <div className=" col">
                            <div className='row'>
                                <div className='col'>
                                    <span className='fs-4 fw-bold'>Theater Name : </span>
                                    <span className='fs-4 '>{Theater.theatername}</span>
                                </div>
                                <div className='col'>
                                    <span className='fs-4 fw-bold'>Theater Address : </span>
                                    <span className='fs-4 '>{Theater.address}</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-2 text-center'>
                        </div>

                    </div>

                    <hr></hr>
                    <div className='table-responsive'>
                        <table className='table table-hover text-center'>
                            <thead>
                                <tr>
                                    <th>Show Time</th>
                                    <th>Show Date</th>
                                    <th>Movie Name</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {//showId: "", showStartTime: "", showDate: "", theaterId: "", movieId: ""

                                    reqShows.map((reqShow) => {
                                        console.log(reqShow.movieId);

                                        return <tr key={reqShow.showId}>
                                            <td>{reqShow.showStartTime}</td>
                                            <td>{reqShow.showDate}</td>
                                            <td>{getMovieName(reqShow.movieId)}{movieName}</td>

                                            <td className='text-end'>
                                                <button
                                                    className='btn btn-danger'
                                                    onClick={() => {
                                                        RemoveRecord(reqShow.showId)
                                                    }}
                                                >
                                                    Delete
                                                </button>

                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>

                        </table>
                    </div>
                </center>
            </div>
        </>);
}
