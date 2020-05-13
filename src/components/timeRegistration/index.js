import React, {Component} from 'react';
import TimeRegistrationForm from '../timeRegistrationForm';
import { connect } from "react-redux";
import Timeregistration from './TimeRegistration'
class TimeRegistration extends Component {
    render(){
        return(
            <div id="registration">
                <div className="container-fluid" >
                <div className="table-body">
                    <Timeregistration/>
                </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = ({TimeRegistration }) => {
    return {

        batch:TimeRegistration.batch
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
)(TimeRegistration);