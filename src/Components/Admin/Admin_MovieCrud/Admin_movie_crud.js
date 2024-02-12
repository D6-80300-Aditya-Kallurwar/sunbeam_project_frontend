import UpperTable from '../common/UpperTable';
import '../common/common.css';
import Logo from '../../../img/logo.png'
import axios from 'axios';
import { useState, useEffect } from 'react';

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
    const [movie, setMovie] = useState({ movieName: "", duration: "", rating: "", releaseDate: "", genre: "", language: "" });
    const [message, setMessage] = useState("");
    const [isDisabled, setisDisabled] = useState('disabled');
    const [searchText, setSearchText] = useState('');

    const url = "http://127.0.0.1:8080/movie/MovieList"

    useEffect(() => {
        GetRecords();
    }, []); //as good as componentDidMount

    const GetRecords = () => {
        axios.get(url).then((result) => {
            var moviesReceived = result.data;
            setMovies(moviesReceived);
        });
    }
    const ShowMessage = (msg) => {
        setMessage(msg);
        setTimeout(() => {
            setMessage("");
        }, 2000);
    }

    const AddRecord = () => {
        axios.post(url, movie).then((result) => {
            if (result.data.affectedRows !== undefined &&
                result.data.affectedRows > 0) {
                ShowMessage("Record Added!");
                Reset();
                GetRecords();
            }
            else {
                ShowMessage("Something went wrong!")
            }
        });
    }

    

    const OnTextChanged = (args) => {
        var copyOfMovie = { ...movie };
        copyOfMovie[args.target.name] = args.target.value;
        setMovie(copyOfMovie)
    }

    const Reset = () => {
        setMovie({ No: "", Name: "", Address: "" });
    }

    const RemoveRecord = (No) => {
        var updatedUrl = url + "/" + No;

        axios.delete(updatedUrl).then((result) => {
            if (result.data.affectedRows !== undefined &&
                result.data.affectedRows > 0) {
                ShowMessage("Record Removed!");
                GetRecords();
            }
            else {
                ShowMessage("Something went wrong!")
            }
        });
    }

    
    const EditRecord = (movieToEdit) => {
        setMovie({ ...movieToEdit });
        setisDisabled(null);
    }

    const UpdateRecord = () => {
        var updatedUrl = url + "/" + movie.No;

        axios.put(updatedUrl, movie).then((result) => {
            if (result.data.affectedRows !== undefined &&
                result.data.affectedRows > 0) {
                ShowMessage("Record Updated!");
                Reset();
                GetRecords();
            }
            else {
                ShowMessage("Something went wrong!")
            }
        });
    }

    const OnSearch = (args) => {
        setSearchText(args.target.value);
    }

    return (<div className='container'>
        <Logo />
        <hr></hr>
        <center>
            {/* <UpperTable movie={movie}
                OnTextChanged={OnTextChanged}
                AddRecord={AddRecord}
                Reset={Reset}
                UpdateRecord={UpdateRecord}
                isDisabled={isDisabled} /> */}
            <hr></hr>
            <div className='alert alert-info'>{message}</div>
            <center>
                <strong>
                    Search By City Value:
                </strong> {" "}
                <input type='text' value={searchText}
                    onChange={OnSearch} />
            </center>
            <hr></hr>
            <div className='table-responsive'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Movie Name</th>
                            <th>Duration</th>
                            <th>Rating</th>
                            <th>Release Date</th>
                            <th>Genre</th>
                            <th>Language</th>

                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Movies.map((movie) => {
                                if (searchText !== "") {
                                    //Check the movie.Address
                                    if (movie.Address.toLowerCase().includes(searchText.toLowerCase())) {
                                        //return row

                                        {/* "movieName": "string",
                                            "duration": 0,
                                            "rating": 0,
                                            "releaseDate": "2024-02-09",
                                            "genre": "DRAMA",
                                            "language": "HINDI" */}

                                        return <tr key={movie.movieName}>
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
                                                        RemoveRecord(movie.No)
                                                    }}
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                            <td>
                                                <button
                                                    className='btn btn-warning'
                                                    onClick={() => {
                                                        EditRecord(movie)
                                                    }}
                                                >
                                                    Edit
                                                </button>

                                            </td>
                                        </tr>
                                    }
                                    else {
                                        return null;
                                    }
                                }
                                else {
                                    //Show all records
                                    {/* "movieName": "string",
                                            "duration": 0,
                                            "rating": 0,
                                            "releaseDate": "2024-02-09",
                                            "genre": "DRAMA",
                                            "language": "HINDI" */}

                                    return <tr key={movie.movieName}>
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
                                                    RemoveRecord(movie.movieName)
                                                }}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                        <td>
                                            <button
                                                className='btn btn-warning'
                                                onClick={() => {
                                                    EditRecord(movie)
                                                }}
                                            >
                                                Edit
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