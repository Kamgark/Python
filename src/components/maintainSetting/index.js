import React, {Component} from 'react';
import { connect } from "react-redux";

class MaintainSetting extends Component {
    render(){
        return(
            <div className="container" id="login">
                <div className="row pop">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-top">
                                <div className="lab-inp">
                                    <label className="mb-0">Next Weekly Build Counter</label>
                                    <p>999999</p>
                                </div>
                                <div className="lab-inp">
                                <label className="mb-0">Next Weekly Build By Sku Counter</label>
                                    <p>999999</p>
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Next Weekly Build By Sku Employee Counter</label>
                                    <p>999999</p>
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Next Time Entry Counter</label>
                                    <p>999999</p>
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
}
const mapStateToProps = ({MaintainSetting }) => {
    return {

        batch:MaintainSetting.batch
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
)(MaintainSetting);