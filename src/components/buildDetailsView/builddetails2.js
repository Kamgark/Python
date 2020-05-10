import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { connect } from "react-redux";


import data from '../../data.json'

class buildDetails extends Component {
    state={
        firsttabledata:[]
    }
    componentDidMount(){
        this.setState({firsttabledata:data.builddetailsview})
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
            name1:"25266",
            name2:"10/29/2019",
            name3:"10/29/2019",
            name4:"7",
            name5:"CYW550505",
            name6:"77",
            name7:"77",
            name8:"77",
            name8:"77",
            edit:true
        },...newdata]

        this.setState({firsttabledata:update})
    }
    render(){
        let {firsttabledata}=this.state;
        return(

            <table>
                <thead>
                <th>Week Build #</th>
                <th>From</th>
                <th>To</th>
                <th>Build  SKU#</th>
                <th>SKU</th>
                <th>Employee</th>
                <th>Qty Planned</th>
                <th>QTY Objective</th>
                <th>QTYBuilt</th>
                <th><i className="fa fa-plus" onClick={()=> this.addtable()}></i></th>
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
                                <td>{item.edit===true ? <input className="inputcontrol"  type="text" defaultValue={item.name2}/>:item.name2}
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
                                <td>{item.edit===true ? <input className="inputcontrol" type="text" defaultValue={item.name8}/>:item.name8}
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
)(buildDetails);