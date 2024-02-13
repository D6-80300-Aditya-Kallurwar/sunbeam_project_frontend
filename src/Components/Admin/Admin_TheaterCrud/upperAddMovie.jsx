export default function AddTheater(props) {
    return (
        <div className='container-fluid'>
            <div className='row text-start'>
                <div className='col w-50 '>
                    <div class="form-group mb-4">
                        <label for="theaterName">Theater Name</label>
                        <input type="text" class="form-control" id="theaterName" name="theaterName" onChange={props.OnTextChanged} placeholder="" />
                    </div>
                    <div class="form-group mb-4">
                        <label for="address">Address</label>
                        <input type="text" class="form-control" id="address" name="address" onChange={props.OnTextChanged} placeholder="" />
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