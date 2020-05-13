import React, {Component} from 'react';
import { connect } from "react-redux";

import Users from './users'
class CurrentOpenView extends Component {
    render(){
        return(
            <div >
                <div className="container-fluid" >
                    <div className="table-body">
                        <Users/>
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