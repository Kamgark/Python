import React, { Component } from 'react';
import TimeRegistrationFormTwo from '../timeRegistrationFormTwo';
import { connect } from "react-redux";

class TimeRegistrationForm extends Component {
    render() {
        return (
            <div >
                <div className="container-fluid" >
                    <div className="row table-head">
                        <div className="col-sm-6 left-content">
                            <div className="lab-inp">
                                <label className="mb-0 esd">ESD Time Registrator</label>
                            </div>
                            <div className="lab-inp">
                                <label className="mb-0">ID</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="col-sm-6 right-button">
                            <div className="lab-inp">
                                <button>SAVE</button>
                                <button>CLOSE</button>
                            </div>
                            <div className="lab-inp">
                                <button>UNDO</button>
                                <button>DELETE</button>
                            </div>
                        </div>
                    </div>
                    <div className="row table-head bordertop">
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">Emp ID</label>
                                <div className="position-relative pend-extra">
                                    <select className="w-100 ml-2">
                                        <option>Production</option>
                                        <option>Test1</option>
                                        <option>Test2</option>
                                    </select>
                                    <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">Date</label>
                                <div className="position-relative-search">
                                    <input type="date" className=" w-auto" />
                                    <i className="fa fa-calendar" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                        </div>
                    </div>
                    <div className="table-body excelfile">
                        <table>
                            <thead>
                                <th>Activity ID</th>
                                <th>Description</th>
                                <th>Start</th>
                                <th>End</th>
                                <th>Total Minutes</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Activiy 1</td>
                                    <td>Lorem Ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</td>
                                    <td>00:00:00</td>
                                    <td>00:00:00</td>
                                    <td>55</td>
                                </tr>
                                <tr>
                                    <td>Activiy 2</td>
                                    <td>Lorem Ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</td>
                                    <td>00:00:00</td>
                                    <td>00:00:00</td>
                                    <td>66</td>
                                </tr><tr>
                                    <td>Activiy 3</td>
                                    <td>Lorem Ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</td>
                                    <td>00:00:00</td>
                                    <td>00:00:00</td>
                                    <td>77</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({TimeRegistrationForm }) => {
    return {

        batch:TimeRegistrationForm.batch
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
)(TimeRegistrationForm);