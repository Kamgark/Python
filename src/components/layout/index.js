import React, { Component } from 'react';
import { connect } from "react-redux";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import SideBar from "../sideBar";
import {addTabs} from '../tabs/actions'
import Tabs from "../tabs"
import {withRouter} from 'react-router-dom';
class Layout extends Component {
    state = {
        openstate: true,
    }
    open1 = () => {
        this.setState({ openstate: !this.state.openstate });
    }
    goto(name){
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
        console.log("layout ", this.state.openstate)
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 pl-0 pr-0" >
                        <div className="topbar " >
                            {/* <i className="fa fa-search" onClick={() => { this.open1() }}></i> */}
                            <button role="button" className="sidenav-toggle---23_Hl" aria-expanded="false" onClick={() => { this.open1() }}>
                                <span className="icon-bar---2jamJ"></span>
                                <span className="icon-bar---2jamJ"></span>
                                <span className="icon-bar---2jamJ"></span>
                            </button>
                            {/* <button onClick={()=>{this.open1()}}>File </button> */}
                            <DropdownButton id="dropdown-item-button" title="File">
                                <Dropdown.Item as="button" onClick={()=> this.goto("builddetailsview")} >Build Details View</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={()=> this.goto("login")} >Sign in</Dropdown.Item>
                                <Dropdown.Item as="button">Log Out</Dropdown.Item>
                            </DropdownButton>
                            <DropdownButton id="dropdown-item-button" title="Edit">
                                <Dropdown.Item as="button">Action</Dropdown.Item>
                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                            </DropdownButton>  
                            <p>Build System</p>                      
                            </div>

                    </div>
                </div>
                <div className="row">
                <div className="col-sm-2 pl-0 " >
                    {
                        this.state.openstate ? 
                        
                        <SideBar/>
                         : null
                    }
                    </div>
                    <div className="col-sm-10">
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
