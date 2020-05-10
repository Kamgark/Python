import React, {Component} from 'react';
import { connect } from "react-redux";

import Currentopenview from './currentopenview'
class CurrentOpenView extends Component {
    render(){
        return(
            <div >
                <div className="container-fluid" >
                <div className="table-body">
                    <Currentopenview/>
                </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = ({CurrentOpenView }) => {
    return {

        batch:CurrentOpenView.batch
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
)(CurrentOpenView);