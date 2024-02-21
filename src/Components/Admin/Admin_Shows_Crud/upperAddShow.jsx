export default function AddShow(props) {
    var movies = props.getAllMovieNames;

    return (
        //showStartTime: "", showDate: "", theaterId: "", movieId: ""
        <div className='container'>
            <div className='row text-start'>
                <div className="col-1"></div>
                <div className="col w-50">
                    <div className="form-group mb-4">
                        <label htmlFor="starttime">Show StartTime</label>
                        <input type="time" className="form-control border-none" id="showstarttime" name="showStartTime" onChange={props.OnTextChanged} placeholder="" />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="date">Show Date</label>
                        <input type="date" className="form-control" id="showdate" min="1" max="10" name="showDate" onChange={props.OnTextChanged} placeholder="" />

                    </div>

                </div>

                <div className="col w-50">
                    <div className="form-group mb-4">
                        <label htmlFor="theaterid">Classic seat price</label>
                        <input type="number" className="form-control border-none" id="priceOfClassicSeat" name="priceOfClassicSeat" onChange={props.OnTextChanged} placeholder="" />
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="theaterid">Premium seat price</label>
                        <input type="number" className="form-control border-none" id="priceOfPremiumSeat" name="priceOfPremiumSeat" onChange={props.OnTextChanged} placeholder="" />
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="movieSelection">Select movie </label>
                        <select className="form-control border-none" name="movieId" onChange={props.OnTextChanged}>
                            <option >Movies</option>
                            {
                                movies.map((movie) => {
                                    return <option value={movie.id}>{movie.movieName}</option>
                                })
                            }
                        </select>
                    </div>

                   
                </div>

                <br />
                <div className="text-end">
                    <button className='btn btn-success'

                        onClick={props.AddRecord}>
                        Save
                    </button>
                </div>



            </div>

        </div>
    )
};