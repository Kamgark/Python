import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { connect } from "react-redux";
import Buildbysku from './buildbysky'
import Pendingbysku from './pendingbuilds'

import data from '../../data.json'

class OpenWeeklyBuild extends Component {
    state={
        firsttabledata:[]
    }
    componentDidMount(){
        this.setState({firsttabledata:data.weeklybuild})
    }
    tick(index){
        let {firsttabledata}=this.state;
        let newdata=firsttabledata;
        newdata.map((item, inde)=>{
            item.edit=false;
            if(index===inde){
                item.edit=false;
            }
        })
        this.setState({firsttabledata:newdata})
    }
    edit(index){
        let {firsttabledata}=this.state;
        let newdata=firsttabledata;
        newdata.map((item, inde)=>{
            item.edit=false;
            if(index===inde){
                item.edit=true;
            }
        })
        this.setState({firsttabledata:newdata})
    }
    delete(index){
        let {firsttabledata}=this.state;
        let newdata=firsttabledata;
        let update=[]
        newdata.map((item, inde)=>{
            item.edit=false;
            if(index!==inde){
                update.push(item)
            }
        })
        this.setState({firsttabledata:update})
    }
    addtable=()=>{
    let {firsttabledata}=this.state;
    let newdata=firsttabledata;
    let update=[ {
        name1:"CYC2001",
        name2:"0",
        name3:"0",
        name4:"75",
        name5:"90",
        name6:"195",
        name7:"7106",
        edit:true
    },...newdata]

    this.setState({firsttabledata:update})
    }
    render(){
    let {firsttabledata}=this.state;
    return(
        <div className="container-fluid" >
            <div className="table-body weekly">
                <table>
                    <thead>
                    <th>Build SKU</th>
                    <th>Plan QTY</th>
                    <th>Qty Preset</th>
                    <th>OBJ</th>
                    <th>QTY Assigned</th>
                    <th>QTY Built</th>
                    <th>Built ID</th> <th><i className="fa fa-plus" onClick={()=> this.addtable()}></i></th>
                    </thead>
                    <tbody>
                    {
                        firsttabledata && firsttabledata.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    {
                                        console.log("item.edit",item.edit)
                                    }
                                    <td>{item.edit ===true ? <input className="inputcontrol" type="text" defaultValue={item.name1}/>:item.name1}
                                    </td>
                                    <td>{item.edit===true ? <input className="inputcontrol" type="text" defaultValue={item.name2}/>:item.name2}
                                    </td>
                                    <td>{item.edit===true ? <input className="inputcontrol" type="text" defaultValue={item.name3}/>:item.name3}
                                    </td>
                                    <td>{item.edit===true ? <input className="inputcontrol" type="text" defaultValue={item.name4}/>:item.name4}
                                    </td>
                                    <td>{item.edit===true ? <input className="inputcontrol" type="text" defaultValue={item.name5}/>:item.name5}
                                    </td>
                                    <td>{item.edit===true ? <input className="inputcontrol" type="text" defaultValue={item.name6}/>:item.name6}
                                    </td>
                                    <td>{item.edit===true ? <input className="inputcontrol" type="text" defaultValue={item.name7}/>:item.name7}
                                    </td>
                                    <td>{item.edit===true ? <i className="fa fa-check" onClick={()=>this.tick(index)}></i>:<i className="fa fa-edit" onClick={()=> this.edit(index)}></i>}
                                    </td>
                                    <td><i className="fa fa-trash cursor-pointer" onClick={()=> this.delete(index)}></i>
                                    </td>


                                </tr>
                            )
                        })
                    }

                    </tbody>
                </table>
            </div>
            <div className="row beforetab" >
                <div className="col-sm-2">
                    <p><strong>Product Name</strong></p>
                </div>
                <div className="col-sm-10 background">
                    <p>Grape Flavoured Pre-Rolled Hemp Wraps (50 packs)</p>
                </div>
            </div>
            <div className="row" id="openweek">
                <div className="col-sm-12">
                    <Tabs defaultIndex={0}>
                        <TabList>
                            <Tab><h1>Builds by SKU</h1></Tab>
                            <Tab><h1>Pending Builds</h1></Tab>
                        </TabList>
                        <TabPanel>
                            <div className="row tab-row">
                                <div className="col-sm-12">
                                    <div className="table-body weekly">
                                        <Buildbysku/>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="row tab-row">
                                <div className="col-sm-12">
                                    <div className="table-body weekly">
                                        <Pendingbysku/>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
}
const mapStateToProps = ({openweekly }) => {
    return {

        openweekly:openweekly.openweekly
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
)(OpenWeeklyBuild);