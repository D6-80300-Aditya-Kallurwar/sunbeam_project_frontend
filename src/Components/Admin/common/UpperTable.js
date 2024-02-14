function UpperTable(props) {
                                        

    return     <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <tbody>
                            <tr>
                                <td>movieName</td>
                                <td>
                                    <input type='text'
                                           value={props.emp.No}
                                           name="No"
                                           onChange={props.OnTextChanged}/>
                                </td>
                            </tr>

                            <tr>
                                <td>Name</td>
                                <td>
                                    <input type='text'
                                           value={props.emp.Name}
                                           name="Name"
                                           onChange={props.OnTextChanged}/>
                                </td>
                            </tr>

                            <tr>
                                <td>Address</td>
                                <td>
                                    <input type='text'
                                           value={props.emp.Address}
                                           name="Address"
                                           onChange={props.OnTextChanged}/>
                                </td>
                            </tr>
                                <tr>
                                <td></td>
                                <td>
                                    <button className='btn btn-primary' 
                                            onClick={props.AddRecord}>
                                        Add Record
                                    </button>
                                    {" "}
                                     <button 
                                            className='btn btn-success' 
                                            onClick={props.UpdateRecord}
                                            disabled={props.isDisabled}>
                                        Update
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
                </div>   ;
}

export default UpperTable;