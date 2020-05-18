import React, { Component } from 'react';
import { connect } from "react-redux";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import SideBar from "../sideBar";
import {addTabs} from '../tabs/actions'
import Tabs from "../tabs"
import {withRouter} from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';

class Layout extends Component {
    state = {
        openstate: false,
    }
    open1 = () => {
        this.setState({ openstate: !this.state.openstate });
    }
    goto(name){
        let {tabs}=this.props;
        let tab=tabs;
        let Tabs=[];
        let isThere=true;
        tab.map((item)=>{
            item.active=false
        //     if(item.id ===id){
        //         isThere=false;
        //         item.active=true
        //     }
        //     else{
        //         item.active=false
        //     }
        });
        // if(isThere){
        //     Tabs.push(...tab,{id:`${tab.length+1}`,name:name,active:true})
        // }
        // else{
        //     Tabs.push(...tab);
        // }
        Tabs.push(...tab,{id:`${parseInt(tab[tab.length-1].id)+1}`,name:name,active:true})
        this.props.addTabs(Tabs);
        this.props.history.push(`/${name.toLowerCase().replace(/\s/g, "")}/${parseInt(tab[tab.length-1].id)+1}`);
    }
    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 pl-0 pr-0 d-flex justify-content-between color-topbar" >
                        <div className="topbar ml-10m" >
                            {/* <i className="fa fa-search" onClick={() => { this.open1() }}></i> */}

                            {/* <button onClick={()=>{this.open1()}}>File </button> */}
                            <DropdownButton id="dropdown-item-button" title="File">
                                <Dropdown.Item as="button" onClick={()=> this.goto("Build Details View")} >Build Details View</Dropdown.Item>

                            </DropdownButton>
                            <DropdownButton id="dropdown-item-button" title="Edit">
                                <Dropdown.Item as="button">Action</Dropdown.Item>
                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                            </DropdownButton>  
                            {/*<p>Build System</p>*/}
                            {
                                this.props.tabs.map((item)=>{
                                   return item.active=== true && <p className="pagetitle">
                                        {
                                            item.name
                                        }
                                    </p>
                                })
                            }

                            </div>
                        <div className="topbar  ">
                            <DropdownButton id="dropdown-item-button"  className="right-topbar-sign-in" title="Sign In" onClick={()=> this.goto("Login")}>

                            </DropdownButton>
                            <DropdownButton id="dropdown-item-button" className="right-topbar-sign-in " title="Sign up">

                            </DropdownButton>
                        </div>

                    </div>
                </div>
                <div className="row pos-relative">
                    <OutsideClickHandler
                        onOutsideClick={() => {
                            console.log("open state", this.state.openstate)
                            this.setState({openstate:false})
                        }}
                    >
                        <button role="button" className="sidenav-toggle---23_Hl posi-top" aria-expanded="false" onClick={() => {this.open1()} }>
                            <span className="icon-bar---2jamJ"></span>
                            <span className="icon-bar---2jamJ"></span>
                            <span className="icon-bar---2jamJ"></span>
                        </button>
                        <div id="mySidenav" className={this.state.openstate ? "sidenav width-250":"sidenav width-0"} >
                            {
                                this.state.openstate ?

                                    <SideBar />
                                    : null
                            }
                        </div>
                    </OutsideClickHandler>

                    <div className="col-sm-12 menu-margin">
                    <Tabs/>
                   {this.props.children}  
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({BatchPrint,tabs }) => {
    return {
        tabs:tabs.tabs,
        batch:BatchPrint.batch
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
)(Layout));
