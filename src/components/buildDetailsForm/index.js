import React, { Component } from 'react';
import { connect } from "react-redux";

class BuildDetailsForm extends Component {
    render() {
        return (
            <div id="Review">
                <div className="container-fluid" >
                    <div className="row backgroundcol">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="first justify-content-xl-between">
                                        <p>Build Details Form</p>
                                        <button>PRINT SHEET </button>
                                        <label className="mb-0">ID</label>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row backgroundcol bordertop">
                        <div className="col-sm-12">
                            <div className="second m-0">
                                <div className="row pt-3">
                                    <div className="col-sm-3">
                                        <label className="mb-0">Build SKU</label>
                                        <input type="text" />
                                    </div>

                                    <div className="col-sm-3">
                                        <label className="mb-0">Classic Lean Cones (100 Pack)</label>
                                    </div>

                                    <div className="col-sm-3">
                                    </div>

                                    <div className="col-sm-3">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row backgroundcol bordertop">
                        <div className="col-sm-12">
                            <div className="third m-0">
                                <div className="row pt-3">
                                    <div className="col-sm-9 third-inn">
                                        <label className="mb-0"><strong>Build Information</strong></label>

                                        <div>
                                            <label className="mb-0">Plan Date</label>
                                            <p>10/08/2019</p>
                                        </div>

                                        <div>
                                            <label className="mb-0">PlanQTY</label>
                                            <p>33</p>
                                        </div>

                                        <div>
                                            <label className="mb-0">Obj Un/Hr</label>
                                            <p>24</p>
                                        </div>

                                        <div>
                                            <label className="mb-0">Expected Time</label>
                                            <p>80</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row backgroundcol bordertop">
                        <div className="col-sm-12">
                            <div className="third m-0">
                                <div className="row pt-3">
                                    <div className="col-sm-3">
                                        <label className="mb-0">Emp ID</label>
                                        <div className="position-relative ">
                                            <select>
                                                <option>FLOPLO1</option>
                                                <option>FLOPLO1</option>
                                                <option>FLOPLO1</option>
                                            </select>
                                            <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-9">
                                        <label className="mb-0">Build Date</label>
                                        <div className="position-relative-search">
                                            <input type="date" className="unit w-auto" />
                                            <i className="fa fa-calendar" />
                                        </div>
                                        <label className="mb-0">Total Builds</label>
                                        <input className="unit" type="text" />

                                        <label className="mb-0">Un/Hr</label>
                                        <input className="unit" type="text" />

                                        <label className="mb-0">Total Min</label>
                                        <input className="unit" type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-5">
                        <div className="col-sm-4">
                            <label className="mb-0">Prep Time</label>
                            <table className="prepTables">
                                <tbody>
                                    <tr>
                                        <th></th>
                                        <th>Start</th>
                                        <th>End</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td></td>
                                        <td></td>
                                    </tr><tr>
                                        <td>3</td>
                                        <td></td>
                                        <td></td>
                                    </tr><tr>
                                        <td>4</td>
                                        <td></td>
                                        <td></td>
                                    </tr><tr>
                                        <td>5</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-sm-4">
                            <label className="mb-0">Build Time</label>
                            <table className="prepTables">
                                <tbody>
                                    <tr>
                                        <th></th>
                                        <th>Start</th>
                                        <th>End</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td></td>
                                        <td></td>
                                    </tr><tr>
                                        <td>3</td>
                                        <td></td>
                                        <td></td>
                                    </tr><tr>
                                        <td>4</td>
                                        <td></td>
                                        <td></td>
                                    </tr><tr>
                                        <td>5</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-sm-4">
                            <label className="mb-0">Turn In</label>
                            <table className="prepTables">
                                <tbody>
                                    <tr>
                                        <th></th>
                                        <th>Start</th>
                                        <th>End</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td></td>
                                        <td></td>
                                    </tr><tr>
                                        <td>3</td>
                                        <td></td>
                                        <td></td>
                                    </tr><tr>
                                        <td>4</td>
                                        <td></td>
                                        <td></td>
                                    </tr><tr>
                                        <td>5</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
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
const mapStateToProps = ({BuildDetailsForm }) => {
    return {

        batch:BuildDetailsForm.batch
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
)(BuildDetailsForm);