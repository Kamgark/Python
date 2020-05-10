import React, { Component } from 'react';
import { connect } from "react-redux";


class IndividualPrint extends Component {
    render() {
        return (
            <div className="container" id="login">
                <div className="row pop">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-top">
                                <div className="lab-inp">
                                    <label className="mb-0">Print Individual Build Sheet Number</label>
                                    <div className="position-relative build-input">
                                        <select className="ml-2">
                                            <option>Build 999999</option>
                                            <option>Build 999998</option>
                                            <option>Build 999997</option>
                                        </select>
                                        <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                    </div>
                                </div>
                                <div className="maintain-button">
                                    <div>
                                        <button>PRINT</button>
                                        <button>CANCEL</button>
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
const mapStateToProps = ({ IndividualPrint }) => {
    return {

        batch: IndividualPrint.batch
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
)(IndividualPrint);