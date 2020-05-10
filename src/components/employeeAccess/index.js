import React, { Component } from 'react';
import { connect } from "react-redux";


class EmployeeAccess extends Component {
    render() {
        return (
            <div id="employee">
                <div className="container" >
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="">
                                <div className="form-set width2">
                                    <label className="mb-0">Add Form</label>
                                    <div className="position-relative ">
                                        <select>
                                            <option>Select Form</option>
                                            <option>Test1</option>
                                            <option>Test2</option>
                                        </select>
                                        <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                    </div>
                                </div>
                                <div className="d-flex d-md-inline-flex">
                                    <div className="employeebox">
                                        <h4>Build Form</h4>
                                        <i className="fa fa-times" />
                                    </div>
                                    <div className="employeebox">
                                        <h4>Review Form</h4>
                                        <i className="fa fa-times" />
                                    </div>
                                    <div className="employeebox">
                                        <h4>Time Sheet Entry</h4>
                                        <i className="fa fa-times" />
                                    </div>
                                    <div className="employeebox">
                                        <h4>Admin Panel</h4>
                                        <i className="fa fa-times" />
                                    </div>
                                    <div className="employeebox">
                                        <h4>Search Builds</h4>
                                        <i className="fa fa-times" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="form-set">
                                            <label className="mb-0">User List</label>
                                            {/* <select>
                                            <option>Select Form</option>
                                            <option>Test1</option>
                                            <option>Test2</option>
                                        </select> */}
                                            <div class="dropdown">
                                                <div className="position-relative w-100">
                                                    <input class="dropbtn" value="Select Users" readonly />
                                                    <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                                </div>

                                                <div class="dropdown-content">
                                                    <div>
                                                        <input type="checkbox" />
                                                        <p>DEPT01</p>
                                                    </div>
                                                    <div>
                                                        <input type="checkbox" />
                                                        <p>DEPT02</p>
                                                    </div>
                                                    <div>
                                                        <input type="checkbox" />
                                                        <p>DEPT03</p>
                                                    </div>
                                                    <div>
                                                        <input type="checkbox" />
                                                        <p>DEPT03</p>
                                                    </div>
                                                    <div>
                                                        <input type="checkbox" />
                                                        <p>DEPT03</p>
                                                    </div>
                                                    <div>
                                                        <input type="checkbox" />
                                                        <p>DEPT03</p>
                                                    </div>
                                                    <div>
                                                        <input type="checkbox" />
                                                        <p>DEPT03</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-set">
                                            <label className="mb-0">Action List</label>
                                            {/* <select>
                                                <option>Select Form</option>
                                                <option>Test1</option>
                                                <option>Test2</option>
                                            </select> */}
                                            <div class="dropdown">
                                                <div className="position-relative w-100">
                                                    <input class="dropbtn" value="Select Actions" readonly />
                                                    <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                                </div>
                                                <div class="dropdown-content drop-two">
                                                    <div>
                                                        <i className="fa fa-plus" />
                                                        <p>Add</p>
                                                    </div>
                                                    <div>
                                                        <i className="fa fa-envelope-open-o" />
                                                        <p>View</p>
                                                    </div>
                                                    <div>
                                                        <i className="fa fa-circle" />
                                                        <p>Change</p>
                                                    </div>
                                                    <div>
                                                        <i className="fa fa-trash" />
                                                        <p>Dirty</p>
                                                    </div>
                                                    <div>
                                                        <i className="fa fa-print" />
                                                        <p>Print</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({EmployeeAccess }) => {
    return {

        batch:EmployeeAccess.batch
    };
};

const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};
export default connect(
    mapStateToProps,
    {}
)(EmployeeAccess);