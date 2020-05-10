import React, {Component} from 'react';
import { connect } from "react-redux";

class MaintainComments extends Component {
    render(){
        return(
            <div className="container" id="login">
                <div className="row pop">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-top height">
                                <div className="maintain">
                                    <label className="mb-0">Comment ID</label>
                                    <div>
                                        <p>999999</p>
                                    </div>
                                </div>
                                <div className="maintain">
                                    <label className="mb-0">Comment Info</label>
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
                    </div>
                </div>
            </div>
        )
    }
}const mapStateToProps = ({MaintainComments }) => {
    return {

        batch:MaintainComments.batch
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
)(MaintainComments);