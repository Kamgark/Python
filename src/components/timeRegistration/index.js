import React, {Component} from 'react';
import TimeRegistrationForm from '../timeRegistrationForm';
import { connect } from "react-redux";

class TimeRegistration extends Component {
    render(){
        return(
            <div id="registration">
                <div className="container-fluid" >
                <div className="table-body">
                    <table>
                        <thead>
                            <th>Time ID</th>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Total Minutes</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>00:00:00 AM</td>
                                <td>YCA0012</td>
                                <td>Robert Ruth</td>
                                <td>88</td>
                            </tr>
                            <tr>
                                <td>00:00:00 AM</td>
                                <td>YCA0012</td>
                                <td>Robert Ruth</td>
                                <td>88</td>
                            </tr><tr>
                                <td>00:00:00 AM</td>
                                <td>YCA0012</td>
                                <td>Robert Ruth</td>
                                <td>88</td>
                            </tr><tr>
                                <td>00:00:00 AM</td>
                                <td>YCA0012</td>
                                <td>Robert Ruth</td>
                                <td>88</td>
                            </tr>
                        </tbody>
                    </table>
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