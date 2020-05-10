import React, { Component } from 'react';
import {withRouter, Link } from 'react-router-dom';
import { connect } from "react-redux";
import {addTabs} from '../tabs/actions'
class SideBar extends Component {

    addTabs(name){
        let {tabs}=this.props;
        let Tabs=[];
        let isThere=true;
        tabs.map((item)=>{
            if(item.name ===name){
                isThere=false
            }
        });
        if(isThere){
            Tabs.push(...tabs,{id:`${tabs.length+1}`,name:name})
        }
        else{
            Tabs.push(...tabs);
        }
        this.props.addTabs(Tabs);
        this.props.history.push(`/${name}`);
    }
    render() {

        return (
            
                <div className="sidenav">
                    <div onClick={()=>{this.addTabs("employeeaccess")}}>Users</div>
                    <div onClick={()=>{this.addTabs("createuser")}}>Create User</div>
                    <div onClick={()=>{this.addTabs("weeklybuild")}}>weekly Build</div>
                    <div
                        // onClick={()=>{this.addTabs("login")}}
                    >
                        Error Log  </div>
                    <div onClick={()=>{this.addTabs("employeeaccess")}}>Employee Access  </div>
                     <div onClick={()=>{this.addTabs("maintainactivity")}}>Activities </div>
                    <div
                        // onClick={()=>{this.addTabs("employeeaccess")}}
                    >
                        Products</div>
                    <div onClick={()=>{this.addTabs("useractivity")}}>User Activity Log</div>
                    <div onClick={()=>{this.addTabs("currentopenview")}}>Currently Open Forms</div>
                    <div onClick={()=>{this.addTabs("managepatch")}}>Manage Patches</div>
                    <div onClick={()=>{this.addTabs("individualprint")}}>Print Build Sheet</div>
                    <div onClick={()=>{this.addTabs("emailprint")}}>Email Build Sheet</div>

                </div>
        )
    }
}


const mapStateToProps = ({openweekly,

    tabs
 }) => {
    return {


        tabs:tabs.tabs


    };
};

const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};
export default withRouter(connect(
    mapStateToProps,
    {addTabs}
)(SideBar));
// export default connect(
//     mapStateToProps,
//     {}
// )(withRouter());
//
