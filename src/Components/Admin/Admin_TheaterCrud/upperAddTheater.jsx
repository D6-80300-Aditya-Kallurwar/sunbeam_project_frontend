export default function AddTheater(props) {
    return (
        
        <div className='container'>
            <div className='row text-start'>
                <div className="col-1"></div>
                <div className='col-5 '>
                    <div className="form-group mb-4">
                        <label htmlFor="name">Theater Name</label>
                        <input type="text" className="form-control" id="name" name="name" onChange={props.OnTextChanged} placeholder="" />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="address" name="address" onChange={props.OnTextChanged} placeholder="" />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="noOfSeatInRow">No Of Seats In a Row</label>
                        <input type="number" className="form-control" id="noOfSeatInRow" name="noOfSeatInRow" onChange={props.OnTextChanged} placeholder="" />
                    </div>
                    </div>
                    <div className='col-5 '>
                    <div className="form-group mb-4">
                        <label htmlFor="noOfPremiumSeat">No Of Premium Seats</label>
                        <input type="number" className="form-control" id="noOfPremiumSeat" name="noOfPremiumSeat" onChange={props.OnTextChanged} placeholder="" />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="noOfClassicSeat">No Of Classic Seats </label>
                        <input type="number" className="form-control" id="noOfClassicSeat" name="noOfClassicSeat" onChange={props.OnTextChanged} placeholder="" />
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
        </div>)
};