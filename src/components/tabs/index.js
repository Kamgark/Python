import React, { Component } from 'react';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import {closetabs,addTabs} from "./actions"
import _ from 'lodash';


function query(tableData , startIndex = 0, endIndex = 7) {
        let arraytosend=[];
        console.log("start",startIndex,endIndex,tableData)
        tableData.map((item,index)=>{

            if(index >= startIndex && index < endIndex){
                arraytosend.push(item);
            }
        })
    return arraytosend;
}

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
class Tabs extends Component{
    state={
        tabs:[],
        pager: {},
        startIndex: 0,
        endIndex: 7,
        count: 1
    }


    componentDidMount(){
        this.setState({tabs:this.props.tabs})
            // this.setPage(1);
    }
    componentWillReceiveProps(props){
        console.log("tabs props recieve",props);
            this.setState({tabs:props.tabs})
    }

     closeTabs=(name,id,active)=>{
        console.log("wesa",name)
        if(name.toLowerCase().replace(/\s/g, "")!=="menu"){
        let {tabs} = this.props;
        let Tab=[];
        tabs.map((item)=>{
            if(item.id!== id){
                Tab.push(item);
            }
        })
        this.props.closetabs(Tab);

        if( this.props.location.pathname.toLowerCase().replace(/\s/g, "")===`/${name.toLowerCase().replace(/\s/g, "")}/${id}` && active===true ){
            console.log("in if of tabs", name);
            Tab[Tab.length-1].active=true
            let linkto=Tab.length>0 ? Tab[Tab.length-1].name:"/";
            this.props.history.push(`/${linkto.toLowerCase().replace(/\s/g, "")}/${Tab[Tab.length-1].id}`)
        }
    }
    }
     goto=(name,id)=>{
        let {tabs}=this.props;
        let Tab = tabs;
        Tab.map((item)=>{
           if(item.id===id){
               item.active=true;
           }
           else{
               item.active=false;
           }
        })
         this.props.addTabs(Tab);

         this.props.history.push(`/${name.toLowerCase().replace(/\s/g, "")}/${id}`)
         this.forceUpdate();
    }
    scrollleft(){
        window.scrollTo(500, 0);
    }
    scrollRIght(){

    }
       render(){
        let {pager}=this.state;
           console.log("if of tabs", this.props);
           return (
               <div className="col-sm-12 pl-0 pr-0 d-flex align-items-center menus" id="menu">
                   <i className="fa fa-chevron-left next-butt mr-3"
                        onClick={() => this.scrollleft()}
                   />
                   <div className="tabs-button container-scroll">


                       {
                           this.state.tabs &&
                           this.state.tabs.map((item,index)=>{
                               return <button  className={

                                      item.active===true ? `blue-back mr-1 ${item.name.toLowerCase().replace(/\s/g, "")}`:`mr-1 ${item.name.toLowerCase().replace(/\s/g, "")}`
                               }
                                               key={index}><h1
                                   onClick={()=>{this.goto(item.name,item.id)}}
                               >{item.name}</h1><i className="fa fa-times" onClick={()=>{this.closeTabs(item.name,item.id,item.active)}}></i></button>
                           })
                       }



                   </div>
                   <i className="fa fa-chevron-right next-butt"
                       onClick={() => this.scrollRIght()}
                   />
               </div>

           )
       }
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
    {closetabs,addTabs}
)(withRouter(Tabs));


