import React, { Component } from 'react';
import { connect } from "react-redux";


class ExcelFile extends Component {
    render() {
        return (
            <div >
                <div className="container-fluid" >
                    <div className="row table-head">
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">File Name</label>
                                <div className="lab-inp">
                                    <div className="position-relative-search">
                                        <input type="text" className=" w-auto" />
                                        <i className="fa fa-search" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">Group</label>
                                <div className="position-relative-search">
                                        <input type="text" className=" w-auto" />
                                        <i className="fa fa-search" />
                                    </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="lab-inp">
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="lab-inp">
                            </div>
                        </div>
                    </div>
                    <div className="table-body excelfile">
                        <table>
                            <thead>
                                <th>File Name</th>
                                <th>Description</th>
                                <th>Created</th>
                                <th>Updated</th>
                                <th>Last Open</th>
                                <th>Group</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="position-relative w-100">
                                            <select >
                                                <option>Temp_2345344B34(64545)</option>
                                                <option>Temp_2345344B34(64545)</option>
                                            </select>
                                            <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                        </div>
                                    </td>
                                    <td>Lorem Ipsum dolor sit amet, consectutuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</td>
                                    <td>
                                        <input value="10/29/2019" />
                                    </td>
                                    <td><input value="10/29/2019" /></td>
                                    <td><input value="10/29/2019" /></td>
                                    <td>
                                        <div className="position-relative w-100">
                                            <select >
                                                <option>Temp_2345344B34(64545)</option>
                                                <option>Temp_2345344B34(64545)</option>
                                            </select>
                                            <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-bot">
                                    <td colSpan="2">Amazone History Comparison Form : 05/31/2019 to 06/12/2019</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="position-relative w-100">
                                            <select >
                                                <option>Temp_2345344B34(64545)</option>
                                                <option>Temp_2345344B34(64545)</option>
                                            </select>
                                            <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                        </div>
                                    </td>
                                    <td>Lorem Ipsum dolor sit amet, consectutuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</td>
                                    <td>
                                        <input value="10/29/2019" />
                                    </td>
                                    <td><input value="10/29/2019" /></td>
                                    <td><input value="10/29/2019" /></td>
                                    <td>
                                        <div className="position-relative w-100">
                                            <select >
                                                <option>Temp_2345344B34(64545)</option>
                                                <option>Temp_2345344B34(64545)</option>
                                            </select>
                                            <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-bot">
                                    <td colSpan="2">Amazone History Comparison Form : 05/31/2019 to 06/12/2019</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="position-relative w-100">
                                            <select >
                                                <option>Temp_2345344B34(64545)</option>
                                                <option>Temp_2345344B34(64545)</option>
                                            </select>
                                            <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                        </div>
                                    </td>
                                    <td>Lorem Ipsum dolor sit amet, consectutuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</td>
                                    <td>
                                        <input value="10/29/2019" />
                                    </td>
                                    <td><input value="10/29/2019" /></td>
                                    <td><input value="10/29/2019" /></td>
                                    <td>
                                        <div className="position-relative w-100">
                                            <select >
                                                <option>Temp_2345344B34(64545)</option>
                                                <option>Temp_2345344B34(64545)</option>
                                            </select>
                                            <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-bot">
                                    <td colSpan="2">Amazone History Comparison Form : 05/31/2019 to 06/12/2019</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="position-relative w-100">
                                            <select >
                                                <option>Temp_2345344B34(64545)</option>
                                                <option>Temp_2345344B34(64545)</option>
                                            </select>
                                            <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                        </div>
                                    </td>
                                    <td>Lorem Ipsum dolor sit amet, consectutuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</td>
                                    <td>
                                        <input value="10/29/2019" />
                                    </td>
                                    <td><input value="10/29/2019" /></td>
                                    <td><input value="10/29/2019" /></td>
                                    <td>
                                        <div className="position-relative w-100">
                                            <select >
                                                <option>Temp_2345344B34(64545)</option>
                                                <option>Temp_2345344B34(64545)</option>
                                            </select>
                                            <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-bot">
                                    <td colSpan="2">Amazone History Comparison Form : 05/31/2019 to 06/12/2019</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ExcelFile }) => {
    return {

        batch:ExcelFile.batch
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
)(ExcelFile);