import React, {Component} from 'react';
import { connect } from "react-redux";


class BatchPrint extends Component {
    render(){
        return(
            <div className="container" id="login">
                <div className="row pop">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-top">
                                <div className="lab-inp">
                                    <label className="mb-0">Batch Individual Build Sheet from Build Week Number</label>
                                    <p>999999</p>
                                </div>
                                <div className="lab-inp batch">
                                <label className="mb-0">Skip Build Sheets already printed previously</label>
                                    <input type="checkbox"/>
                                </div>
                                <div className="batch-button">
                                    <div>
                                        <button>SAVE AS PDF</button>
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
const mapStateToProps = ({BatchPrint }) => {
    return {

        batch:BatchPrint.batch
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
)(BatchPrint);