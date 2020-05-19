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
                <div className="row pop second-pop">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-top">
                                <div className="lab-inp">
                                    <label className="mb-0">SKU</label>
                                    <input type="text" />
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Name</label>
                                    <input type="text" />
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">System Name</label>
                                    <input type="text" />
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Brand Name</label>
                                    <input type="text" />
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Full System Name</label>
                                    <input type="text" />
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Product Status ID</label>
                                    <input type="text" />
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Product Category ID</label>
                                    <input type="text" />
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">SKU Type</label>
                                    <input type="text" />
                                </div>
                                
                                <div className="createuser">
                                    <div class="maintain-button w-100">
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