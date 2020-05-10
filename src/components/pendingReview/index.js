import React, { Component } from 'react';
import { connect } from "react-redux";
import Pendingreview1 from './pendingreview1'
import Pendingreview2 from './pendingreview2'
class PendingReview extends Component {
    render() {
        return (
            <div >
                <div className="container-fluid" >
                    <div className="row table-head">
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">Status</label>
                                <div className="position-relative pend-extra">
                                    <select className="w-100 ml-2">
                                        <option>Production</option>
                                        <option>Test1</option>
                                        <option>Test2</option>
                                    </select>
                                    <img src={require('../../Assets/images/down-chevron.svg')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">EmployeeID</label>
                                <div className="position-relative-search">
                                    <input type="text" className=" w-auto"/>
                                    <i className="fa fa-search" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">Date From</label>
                                <div className="position-relative-search">
                                    <input type="date" className=" w-auto" />
                                    <i className="fa fa-calendar" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">Date To</label>
                                <div className="position-relative-search">
                                    <input type="date" className=" w-auto" />
                                    <i className="fa fa-calendar" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row table-head bordertop">
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">SKU</label>
                                <div className="position-relative-search">
                                    <input type="text" className=" w-auto"/>
                                    <i className="fa fa-search" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="sku-ex">
                                <i className="fa fa-times" />
                                <p>Recently Reviewed</p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="lab-inp">
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="lab-inp">
                            </div>
                        </div>
                    </div>
                    <div className="table-body">
                        <Pendingreview1/>
                    </div>
                    <div className="table-body secondtable">
                        <Pendingreview2/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({PendingReview }) => {
    return {

        batch:PendingReview.batch
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
)(PendingReview);