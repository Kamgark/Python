import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { connect } from "react-redux";

import BuildDetails from './builddetails';
import BuildDetails2 from './builddetails2';
class BuildDetailsView extends Component {
    render() {
        return (
            <div >
                <div className="container-fluid" >
                    <div className="row table-head">
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">BuildID#</label>
                                <div className="position-relative-search">
                                    <input type="text" className=" w-auto" />
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
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">SKU</label>
                                <div className="position-relative-search">
                                    <input type="text" className=" w-auto" />
                                    <i className="fa fa-search" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row table-head bordertop">
                        <div className="col-sm-3">
                            <div className="lab-inp">
                                <label className="mb-0">EmployeeID</label>
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
                            {/* <div className="sku-ex">
                            <i className="fa fa-times"/>
                            <p>Recently Reviewed</p>
                        </div> */}
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
                    <div className="row builddetails" id="openweek">
                        <div className="col-sm-12">
                            <Tabs defaultIndex={0}>
                                <TabList>
                                    <Tab><h1>View by SKU</h1></Tab>
                                    <Tab><h1>View by SKU and Employee</h1></Tab>
                                </TabList>
                                <TabPanel>
                                    <div className="row tab-row">
                                        <div className="col-sm-12">
                                            <div className="table-body weekly">
                                                <BuildDetails/>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="row tab-row">
                                        <div className="col-sm-12">
                                            <div className="table-body weekly">
                                                <BuildDetails2/>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({BuildDetailsView }) => {
    return {

        batch:BuildDetailsView.batch
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
)(BuildDetailsView);