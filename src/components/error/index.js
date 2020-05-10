import React, {Component} from 'react';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
class Error extends Component {
    
    render(){
        return(
            <div className="container" id="error">
                <div className="row pop">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-head">
                                <div className="card-left">
                                    <i className="fa fa-times-circle"/>
                                    <p>Error Message</p>
                                </div>
                                <i className="fa fa-times"/>
                            </div>
                            <div className="card-body">
                                <div className="left">
                                    <i className="fa fa-times-circle"/>
                                </div>
                                <div className="right">
                                    <p>Lorem Ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                                </div>
                            </div>
                            <div className="cardbot">
                                <button >CLOSE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ }) => {
    return {

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
)(Error);