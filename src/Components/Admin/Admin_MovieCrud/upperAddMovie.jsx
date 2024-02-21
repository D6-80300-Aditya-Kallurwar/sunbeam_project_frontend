export default function AddMovie(props) {
    return (
        <div className='container-fluid'>
            <div className='row text-start'>
                <div className='col w-50 '>
                    <div className="form-group mb-4">
                        <label htmlFor="moviename">Movie Name</label>
                        <input type="text" className="form-control" id="moviename" name="movieName" onChange={props.OnTextChanged} placeholder="" />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="duration">Duration</label>
                        <input type="number" className="form-control" id="duration" aria-describedby="durationhelp" name="duration" onChange={props.OnTextChanged} placeholder="" />
                        <small id="durationhelp" className="form-text text-muted">Enter the duration in mins</small>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="genre">Genre</label>
                        <select className="form-control" id="genre" name="genre" onChange={props.OnTextChanged}>
                            <option>DRAMA</option>
                            <option>THRILLER</option>
                            <option>ACTION</option>
                            <option>ROMANTIC</option>
                            <option>COMEDY</option>
                            <option>HISTORICAL</option>
                            <option>ANIMATION</option>
                            <option>SPORTS</option>
                            <option>SOCIAL</option>
                            <option>WAR</option>
                        </select>
                    </div>

                </div>
                <div className='col w-50'>

                    <div className="form-group mb-4">
                        <label htmlFor="ReleaseDate">ReleaseDate</label>
                        <input type="date" className="form-control" id="ReleaseDate" min="1" max="10" name="releaseDate" onChange={props.OnTextChanged} placeholder="" />
                    </div>                                    <div className="form-group mb-4">
                        <label htmlFor="rating">Rating</label>
                        <input type="number" className="form-control" id="rating" aria-describedby="ratinghelp" name="rating" onChange={props.OnTextChanged} min="1" max="10" placeholder="" />
                        <small id="ratinghelp" className="form-text text-muted">Range 1 - 10</small>
                    </div>
                    <div className="form-group mb-5">
                        <label htmlFor="language">Language</label>
                        <select className="form-control" id="language" name="language" onChange={props.OnTextChanged}>
                            <option>HINDI</option>
                            <option>ENGLISH</option>
                            <option>TELUGU</option>
                            <option>TAMIL</option>
                            <option>MARATHI</option>
                            <option>PUNJAB</option>
                            <option>KANNADA</option>
                        </select>
                    </div>
                    <div className='col-sm-12 col-md-8 align-middle text-center mt-4'>
                            <label htmlFor='imageInput' className='lead mb-4 '>Upload Profile Photo</label>
                            <input type='file' className='form-control' name='imageInput' id='imageInput' onChange={props.handleImageChange} accept="image/*" required></input>
                        </div>
                    <div className="text-end">
                        <button className='btn btn-success'
                            onClick={props.AddRecord}>
                            Save
                        </button>
                    </div>
                </div>

            </div>
        </div>)
};