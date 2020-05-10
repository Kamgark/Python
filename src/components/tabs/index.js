import React, { Component } from 'react';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import {closetabs} from "./actions"
const Tabs =(props)=>{

    const closeTabs=(name)=>{
        console.log("wesa",name)
    if(name!=="menu"){

        let {tabs} = props;
        let Tab=[];
        tabs.map((item)=>{
            if(item.name!== name){
                Tab.push(item);
            }
        })
        props.closetabs(Tab);
        if( props.location.pathname.replace("/","")===name ){
            console.log("in if of tabs", name)
            let linkto=Tab.length>0 ? Tab[Tab.length-1].name:"/";
            props.history.push(`${linkto}`)
        }
    }
    }


        return (
            <div className="col-sm-12 pl-0 pr-0" id="menu">
                <div className="tabs-button">
                    {
                        props.tabs && props.tabs.map((item,index)=>{
                            return <button  className={
                                props.location.pathname.replace("/","")===item.name  ? "blue-back":""
                            }
                                           key={index}><h1
                                onClick={()=>{props.history.push(`/${item.name}`)}}
                            >{item.name}</h1><i className="fa fa-times" onClick={()=>{closeTabs(item.name)}}></i></button>
                        })
                    }

                </div>
            </div> 

        )
    }


const mapStateToProps = ({ tabs}) => {
    return {
        tabs:tabs.tabs
    };
};

const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};
export default connect(
    mapStateToProps,
    {closetabs}
)(withRouter(Tabs));


