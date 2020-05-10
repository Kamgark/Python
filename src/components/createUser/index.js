import React, { Component } from 'react';
import { connect } from "react-redux";

// import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

class CreateUser extends Component {
    // constructor(props) {
    //     super(props);

    //     this.toggle = this.toggle.bind(this);
    //     this.state = {
    //       dropdownOpen: new Array(6).fill(false),
    //     };
    //   }
    // toggle(i) {
    //     const newArray = this.state.dropdownOpen.map((element, index) => {
    //       return (index === i ? !element : false);
    //     });
    //     this.setState({
    //       dropdownOpen: newArray,
    //     });
    //   }

    render() {
        return (
            <div className="container" id="login">
                <div className="row pop">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-top">
                                <div className="createuserimg">
                                    <img src={require('../../Assets/images/user.svg')} alt="" />
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Username</label>
                                    <input type="text" />
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Name</label>
                                    <input type="text" />
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Password</label>
                                    <input type="text" />
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Confirm Password</label>
                                    <input type="text" />
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Select</label>
                                    <div className="position-relative ">
                                        <select>
                                            <option>0 - User</option>
                                            <option>1 - Admin</option>
                                            <option>2 - SuperAdmin</option>
                                        </select>
                                        <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                    </div>

                                    {/* <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                                        this.toggle(0);
                                    }}>
                                        <DropdownToggle >
                                            0 - User
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>0 - User</DropdownItem>
                                            <DropdownItem >1 - Admin</DropdownItem>
                                            <DropdownItem>2 - SuperAdmin</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown> */}
                                </div>
                                <div className="createuser">
                                    <div className="right">
                                        <button>Save</button>
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
const mapStateToProps = ({CreateUser }) => {
    return {

        batch:CreateUser.batch
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
)(CreateUser);