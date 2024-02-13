import '../common/common.css';
import { toast } from 'react-toastify'
import axios from 'axios';
import { useState, useEffect } from 'react';
import AddMovie from './upperAddMovie';
// [
//     {
//       "movieName": "The Batman",
//       "duration": 176,
//       "rating": 7.8,
//       "genre": "ACTION",
//       "language": "ENGLISH"
//     },
//     {
//       "movieName": "WAR",
//       "duration": 135,
//       "rating": 8.9,
//       "genre": "ACTION",
//       "language": "HINDI"
//     },
//     {
//       "movieName": "IRONMAN",
//       "duration": 142,
//       "rating": 9,
//       "genre": "ACTION",
//       "language": "ENGLISH"
//     }
//   ]


function Dashboard() {
    const [Movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({ movieid: "", movieName: "", duration: "", rating: "", releaseDate: "", genre: "", language: "" });
    const [message, setMessage] = useState("");
    const [isDisabled, setisDisabled] = useState('disabled');
    const [searchText, setSearchText] = useState('');


    const url = "http://127.0.0.1:8080/movie"
    const urlimage = "http://127.0.0.1:8080/movie/MovieList"

    useEffect(() => {
        GetRecords();
    }, []); //as good as componentDidMount

    const GetRecords = () => {
        let updatedUrl = url + "/MovieList";
        axios.get(updatedUrl).then((result) => {
            var moviesReceived = result.data;
            setMovies(moviesReceived);
            // getImages();
        });

    }

    function getImages() {
        Movies.map((movie) => {
            axios.get(urlimage + "/" + movie.movieid).then((result) => {
                //Add image handling here
            });
        });

    }

    const RemoveRecord = (No)=>{
        let updatedUrl = url + "/" + No;

        axios.delete(updatedUrl).then((result)=>{
            {
                toast('Deleted');
                GetRecords();
            }
        });
    }

    const OnSearch = (args) => {
        setSearchText(args.target.value);
    }

    const AddRecord = () => {
        let updatedUrl=url+"/addNew";
        axios.post(updatedUrl, movie).then((result) => {
                toast(result);
                //    Reset();
                GetRecords();
            
        });
    }
    const OnTextChanged = (args) => {
        var copyOfMovie = { ...movie };
        copyOfMovie[args.target.name] = args.target.value;
        setMovie(copyOfMovie)
    }

    return (<div className='container'>
        <center>
            <hr></hr>
            {/* <div className='alert alert-info'>{message}</div> */}
            <div className='container'>
                <h3>Add Movie</h3>
                <AddMovie movie={movie}
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
                            <th>Movie Id</th>
                            <th>Movie Name</th>
                            <th>Duration</th>
                            <th>Rating</th>
                            <th>Release Date</th>
                            <th>Genre</th>
                            <th>Language</th>
                            <th></th>   
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Movies.map((movie) => {
                                if (searchText !== "") {
                                    if (movie.movieName.toLowerCase().includes(searchText.toLowerCase())) {

                                        return <tr key={movie.movieid}>
                                            <td>{movie.movieid}</td>
                                            <td>{movie.movieName}</td>
                                            <td>{movie.duration}</td>
                                            <td>{movie.rating}</td>
                                            <td>{movie.releaseDate}</td>
                                            <td>{movie.genre}</td>
                                            <td>{movie.language}</td>
                                            <td >
                                                <button
                                                    className='btn btn-danger '
                                                onClick={() => {
                                                    RemoveRecord(movie.movieid)
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
                                    return <tr key={movie.movieid}>
                                            <td>{movie.movieid}</td>
                                        <td>{movie.movieName}</td>
                                        <td>{movie.duration}</td>
                                        <td>{movie.rating}</td>
                                        <td>{movie.releaseDate}</td>
                                        <td>{movie.genre}</td>
                                        <td>{movie.language}</td>
                                        <td>
                                            <button
                                                className='btn btn-danger'
                                            onClick={() => {
                                                RemoveRecord(movie.movieid)
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