import React, { Component } from 'react';
import { connect } from "react-redux";

class TimeRegistrationFormTwo extends Component {
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

                        </div>
                    </div>
                    <div className="row table-head bordertop">
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">Emp ID</label>
                                <div className="position-relative">
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
                        <div className="col-sm-6 d-flex justify-content-center">
                            <div className="lab-inp">
                                <label className="mb-0">Total minutes</label>
                                <input type="text"  />
                            </div>
                        </div>
                    </div>
                    <div className="row paddtab">
                        <div className="col-sm-6">
                            <div>
                                <label className="mb-0">Activity 1:</label>
                                <div className="activitytab">
                                    <div className="position-relative extra">
                                        <select>
                                            <option></option>
                                            <option></option>
                                            <option></option>
                                        </select>
                                        <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Start</th>
                                                <th>End</th>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div>
                                <label className="mb-0">Activity 1:</label>
                                <div className="activitytab">
                                    <div className="position-relative extra">
                                        <select>
                                            <option></option>
                                            <option></option>
                                            <option></option>
                                        </select>
                                        <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Start</th>
                                                <th>End</th>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row paddtab">
                        <div className="col-sm-6">
                            <div>
                                <label className="mb-0">Activity 1:</label>
                                <div className="activitytab">
                                    <div className="position-relative extra">
                                        <select>
                                            <option></option>
                                            <option></option>
                                            <option></option>
                                        </select>
                                        <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Start</th>
                                                <th>End</th>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div>
                                <label className="mb-0">Activity 1:</label>
                                <div className="activitytab">
                                    <div className="position-relative extra">
                                        <select>
                                            <option></option>
                                            <option></option>
                                            <option></option>
                                        </select>
                                        <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Start</th>
                                                <th>End</th>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row paddtab">
                        <div className="col-sm-6">
                            <div>
                                <label className="mb-0">Comment List</label>
                                <div className="comment-div">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Current ID</th>
                                                <th>Description</th>
                                            </tr>
                                            <tr>
                                                <td>999999</td>
                                                <td>orum ipsum dolor sit amit, consectetuer adipiscing elit. Aenean commado ligula eget dolor.</td>
                                            </tr>
                                            <tr>
                                                <td>999999</td>
                                                <td>orum ipsum dolor sit amit, consectetuer adipiscing elit. Aenean commado ligula eget dolor.</td>
                                            </tr>
                                            <tr>
                                                <td>999999</td>
                                                <td>orum ipsum dolor sit amit, consectetuer adipiscing elit. Aenean commado ligula eget dolor.</td>
                                            </tr>
                                            <tr>
                                                <td>999999</td>
                                                <td>orum ipsum dolor sit amit, consectetuer adipiscing elit. Aenean commado ligula eget dolor.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({TimeRegistrationFormTwo }) => {
    return {

        batch:TimeRegistrationFormTwo.batch
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
)(TimeRegistrationFormTwo);