import React, {Component} from 'react';
import { connect } from "react-redux";

class MaintainActivity extends Component {
    render(){
        return(
            <div className="container" id="login">
                <div className="row pop">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-top height">
                                <div className="maintain">
                                    <label className="mb-0">Activity ID</label>
                                    <div>
                                        <p>999999</p>
                                    </div>
                                </div>
                                <div className="maintain">
                                    <label className="mb-0">Activity Name</label>
                                    <div>
                                        <p>orum ipsum dolor sit amit, consectetuer adipiscing elit. Aenean commado ligula eget dolor. Aenean massa. Cum sociis natoque</p>
                                    </div>
                                </div>
                                <div className="maintain-button">
                                    <div>
                                        <button>SAVE</button>
                                        <button>CANCEL</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-top height">
                                <div className="maintain">
                                    <label className="mb-0">Activity ID</label>
                                    <div>
                                        <p>Activity Name</p>
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
const mapStateToProps = ({MaintainActivity }) => {
    return {

        batch:MaintainActivity.batch
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
)(MaintainActivity);