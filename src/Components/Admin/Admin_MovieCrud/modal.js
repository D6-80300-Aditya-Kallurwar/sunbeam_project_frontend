function ModalTable(props) {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                {/* Launch demo modal */}
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className='table-responsive'>
                                <table className='table table-bordered'>
                                    <tbody>
                                        <tr>
                                            {/* "movieName": "string",
                                            "duration": 0,
                                            "rating": 0,
                                            "releaseDate": "2024-02-09",
                                            "genre": "DRAMA",
                                            "language": "HINDI" */}
                                            <td>Movie Name</td>
                                            <td>
                                                <input type='text'
                                                    value={props.movie.movieName}
                                                    name="movieName"
                                                    onChange={props.OnTextChanged} />
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Duration</td>
                                            <td>
                                                <input type='text'
                                                    value={props.movie.duration}
                                                    name="duration"
                                                    onChange={props.OnTextChanged} />
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Rating</td>
                                            <td>
                                                <input type='text'
                                                    value={props.movie.rating}
                                                    name="rating"
                                                    onChange={props.OnTextChanged} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>releaseDate</td>
                                            <td>
                                                <input type='date'
                                                    value={props.movie.releaseDate}
                                                    name="releaseDate"
                                                    onChange={props.OnTextChanged} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>genre</td>
                                            <td>
                                                <input type='radio'
                                                    value={props.movie.genre}
                                                    name="genre"
                                                    onChange={props.OnTextChanged} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>language</td>
                                            <td>
                                                <input type='radio'
                                                    value={props.movie.language}
                                                    name="language"
                                                    onChange={props.OnTextChanged} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <button className='btn btn-primary'
                                                    onClick={props.AddRecord}>
                                                    Add Movie
                                                </button>
                                                {" "}
                                                <button
                                                    className='btn btn-success'
                                                    onClick={props.UpdateRecord}
                                                    disabled={props.isDisabled}>
                                                    Update Movie
                                                </button>
                                                {" "}
                                                <button className='btn btn-primary'
                                                    onClick={props.Reset}>
                                                    Reset
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="text-center">
                <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm">Launch
                    Modal Login Form</a>
            </div>
        </div>)
};