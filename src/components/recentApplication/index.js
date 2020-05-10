import React, {Component} from 'react';
import { connect } from "react-redux";

class RecentApplication extends Component {
    render(){
        return(
            <div className="container" id="login">
                <div className="row pop">
                    <div className="col-sm-6">
                        <p className="text-center">Please see new features/fixed on the application!</p>
                        <div className="card">
                            <div className="card-top">
                                <table>
                                    <tr>
                                        <td>Date</td>
                                        <td>Patch Description</td>
                                    </tr>
                                    <tr>
                                        <td>03/23/2020</td>
                                        <td>Patch 1</td>
                                    </tr>
                                    <tr>
                                        <td>03/23/2020</td>
                                        <td>Patch 2</td>
                                    </tr>
                                    <tr>
                                        <td>03/23/2020</td>
                                        <td>Patch 3</td>
                                    </tr>
                                </table>
                                
                                <div className="maintain-button">
                                    <div className="manage">
                                        <button>CONTINUE</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-bottom-1">
                                <input type="checkbox"/>Don't Show this Again
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({RecentApplication }) => {
    return {

        batch:RecentApplication.batch
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
)(RecentApplication);