import React, { Component } from 'react';
import {withRouter, Link } from 'react-router-dom';
import { connect } from "react-redux";
import {addTabs} from '../tabs/actions'
class SideBar extends Component {

    addTabs(name){
        let {tabs}=this.props;
        let tab=tabs;
        let Tabs=[];
        let isThere=true;
        tab.map((item)=>{

            if(item.name ===name){
                isThere=false;
                item.active=true
            }
            else{
                item.active=false
            }
        });
        if(isThere){
            Tabs.push(...tab,{id:`${tab.length+1}`,name:name,active:true})
        }
        else{
            Tabs.push(...tab);
        }
        this.props.addTabs(Tabs);
        this.props.history.push(`/${name.toLowerCase().replace(/\s/g, "")}`);
    }

    render() {

        return (
            
                <div className="sidenav">
                    <div onClick={()=>{this.addTabs("Users")}}>Users</div>
                    {/*<div onClick={()=>{this.addTabs("Create User")}}>Create User</div>*/}
                    {/*<div onClick={()=>{this.addTabs("Weekly Build")}}>weekly Build</div>*/}
                    <div
                        // onClick={()=>{this.addTabs("login")}}
                    >
                        Error Log  </div>
                    <div onClick={()=>{this.addTabs("Employee Access")}}>Employee Access  </div>
                     <div onClick={()=>{this.addTabs("Maintain Activity")}}>Activities </div>
                    <div
                        // onClick={()=>{this.addTabs("employeeaccess")}}
                    >
                        Products</div>
                    <div onClick={()=>{this.addTabs("User Activity")}}>User Activity Log</div>
                    <div onClick={()=>{this.addTabs("Current Open View")}}>Currently Open Forms</div>
                    <div onClick={()=>{this.addTabs("Manage Patch")}}>Manage Patches</div>
                    <div onClick={()=>{this.addTabs("Individual Print")}}>Print Build Sheet</div>
                    <div onClick={()=>{this.addTabs("Email Print")}}>Email Build Sheet</div>

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
