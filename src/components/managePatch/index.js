import React, {Component} from 'react';
import { connect } from "react-redux";

class ManagePatch extends Component {
    render(){
        return(
            <div className="container" id="login">
                <div className="row pop">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-top">
                                <div className="maintain">
                                    <label className="mb-0">Date</label>
                                    <div>
                                        <p>03/23/2020</p>
                                    </div>
                                </div>
                                <div className="maintain">
                                    <label className="mb-0">Patch ID</label>
                                    <div>
                                        <p>XXXXXXXX</p>
                                    </div>
                                </div>
                                <div className="maintain">
                                    <label className="mb-0">Patch Description</label>
                                    <div>
                                        <p>orum ipsum dolor sit amit, consectetuer adipiscing elit. Aenean commado ligula eget dolor.</p>
                                    </div>
                                </div>
                                
                                <div className="maintain-button">
                                    <div className="manage">
                                        <button>SAVE</button>
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
const mapStateToProps = ({ManagePatch }) => {
    return {

        batch:ManagePatch.batch
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
)(ManagePatch);