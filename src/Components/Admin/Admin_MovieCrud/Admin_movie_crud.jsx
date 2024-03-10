import { toast } from 'react-toastify'
import axios from 'axios';
import { useState, useEffect } from 'react';
import AddMovie from './upperAddMovie';
import { NavLink } from 'react-router-dom';

export default function MovieCrud() {
    const [Movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({ id: "", movieName: "", duration: "", rating: "", releaseDate: "", genre: "", language: "" });
    const [message, setMessage] = useState("");
    const [isDisabled, setisDisabled] = useState('disabled');
    const [searchText, setSearchText] = useState('');
    const [image, setImage] = useState(null);

    const url = "http://127.0.0.1:8081/movie"
    const urlimage = "http://127.0.0.1:8081/movie/MovieList"
    const imageurl = "http://127.0.0.1:8081/movie/images/"
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
            axios.get(urlimage + "/" + movie.id).then((result) => {
                //Add image handling here
            });
        });

    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const imageSize = file.size / 1024;
        console.log(imageSize)
        if (imageSize < 1024) {
            if (file) {
                setImage(file);
            }
            else {
                setImage(null)
            }
        }
        else {
            toast.error("Image Size must be below 1MB")
            setImage(null)
        }
    }

    const RemoveRecord = (No) => {
        let updatedUrl = url + "/" + No;

        axios.delete(updatedUrl).then((result) => {
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
        let updatedUrl = url + "/addNew";
        console.log(movie);
        axios.post(updatedUrl, movie).then((result) => {
            console.log(result);
            console.log(image);
            const data=new FormData();
            data.append("imageFile" , image);
            console.log(data);
            axios.post(imageurl+result.data,data).then((result)=>{
                toast.success("movie saved succesfully");
                GetRecords();
            }).catch((e)=>{
                toast.error(e);
            });

            //    Reset();

        });
    }
    const OnTextChanged = (args) => {
        var copyOfMovie = { ...movie };
        copyOfMovie[args.target.name] = args.target.value;
        setMovie(copyOfMovie)
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
            {/* <div className='alert alert-info'>{message}</div> */}
            <div className='container'>
                <h3>Add Movie</h3>
                <br />
                <AddMovie movie={movie}
                    OnTextChanged={OnTextChanged}
                    AddRecord={AddRecord}
                    isDisabled={isDisabled}
                    handleImageChange={handleImageChange} />
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

                                        return <tr key={movie.id}>
                                            <td>{movie.id}</td>
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
                                                        RemoveRecord(movie.id)
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
                                    return <tr key={movie.id}>
                                        <td>{movie.id}</td>
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
                                                    RemoveRecord(movie.id)
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
