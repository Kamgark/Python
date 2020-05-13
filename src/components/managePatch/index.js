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
                                        <input type="date"/>
                                    </div>
                                </div>
                                <div className="maintain">
                                    <label className="mb-0">Patch ID</label>
                                    <div>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div className="maintain">
                                    <label className="mb-0">Patch Description</label>
                                    <div>
                                        <textarea cols="40" rows="5"></textarea>
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