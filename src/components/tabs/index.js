import React, { Component } from 'react';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import {closetabs,addTabs} from "./actions"
import _ from 'lodash';


function query(tableData , startIndex = 0, endIndex = 7) {
        let arraytosend=[];
        tableData.map((item,index)=>{
            if(index >= startIndex || index <= endIndex){
                arraytosend.push(item);
            }
        })
    return tableData.length<8 ? tableData:arraytosend;
}
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
            this.setPage(1);
    }
    componentWillReceiveProps(props){
        console.log("tabs props recieve",props);
            this.setState({tabs:props.tabs})
    }

     closeTabs=(name)=>{
        console.log("wesa",name)
        if(name!=="menu"){
        let {tabs} = this.props;
        let Tab=[];
        tabs.map((item)=>{
            if(item.name!== name){
                Tab.push(item);
            }
        })
        this.props.closetabs(Tab);
        if( this.props.location.pathname.toLowerCase().replace(/\s/g, "").replace("/","")===name.toLowerCase().replace(/\s/g, "") ){
            console.log("in if of tabs", name);
            Tab[Tab.length-1].active=true
            let linkto=Tab.length>0 ? Tab[Tab.length-1].name:"/";
            this.props.history.push(`${linkto.toLowerCase().replace(/\s/g, "")}`)
        }
    }
    }
     goto=(name)=>{
        let {tabs}=this.props;
        let Tab = tabs;
        Tab.map((item)=>{
           if(item.name.toLowerCase().replace(/\s/g, "")===name.toLowerCase().replace(/\s/g, "")){
               item.active=true;
           }
           else{
               item.active=false;
           }
        })
         this.props.addTabs(Tab);

         this.props.history.push(`/${name.toLowerCase().replace(/\s/g, "")}`)
         this.forceUpdate();
    }
    getPager(totalItems, currentPage, pageSize) {
        currentPage = currentPage || 1;
        pageSize = pageSize || 8;
        let totalPages = Math.ceil(totalItems / pageSize);
        let startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        let pages = _.range(startPage, endPage + 1);
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
    setPage(page) {
        let countItems = this.state.tabs.length;
        let pager = this.state.pager;
        let pageSize = 8;
        if (page < 1 || page > pager.totalPages) {
            return;
        }
        console.log("more on this")
        pager = this.getPager(countItems, page, pageSize);
        this.setState({ pager: pager });
        this.handleChangePage(pager.startIndex, pager.endIndex + 1);
    }

    handleChangePage(startIndex, endIndex) {
        this.setState({ startIndex:  startIndex, endIndex: endIndex});
    }
       render(){
        let {pager}=this.state
           return (
               <div className="col-sm-12 pl-0 pr-0" id="menu">
                   <div className="tabs-button">
                       {
                           this.state.tabs.length>8 &&
                           <i className="fa fa-chevron-left mr-3" onClick={() => this.setPage(pager.currentPage - 1)}/>
                       }
                       {
                           console.log("tbsasdlkfj", query(this.state.tabs, this.state.startIndex, this.state.endIndex))
                       }
                       {
                           this.state.tabs &&
                           query(this.state.tabs, this.state.startIndex, this.state.endIndex).map((item,index)=>{
                               return <button  className={

                                      item.active===true ? "blue-back mr-1":"mr-1"
                               }
                                               key={index}><h1
                                   onClick={()=>{this.goto(item.name)}}
                               >{item.name}</h1><i className="fa fa-times" onClick={()=>{this.closeTabs(item.name)}}></i></button>
                           })
                       }
                       {
                           this.state.tabs.length>8  &&
                           <i className="fa fa-chevron-right next-butt" onClick={() => this.setPage(pager.currentPage + 1)}/>
                       }
                   </div>
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


