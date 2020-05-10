import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { connect } from "react-redux";


import data from '../../data.json'

class currentopenview extends Component {
    state={
        firsttabledata:[]
    }
    componentDidMount(){
        this.setState({firsttabledata:data.currentopenview})
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
            name1:"FrmStockCountDetails",
            name2:"Open",
            name3:"EGUTI001",
            name4:"2",
            name5:"1796",
            name6:"11/04/2019 10:57:58:AM",
            name7:"StockCountID",
            edit:true
        },...newdata]

        this.setState({firsttabledata:update})
    }
    render(){
        let {firsttabledata}=this.state;
        return(

            <table>
                <thead>
                <th>Form Name</th>
                <th>Form Use Status</th>
                <th>UserID</th>
                <th>User Level</th>
                <th>Open Record ID</th>
                <th>Date/Time Open</th>
                <th>Record Type</th>
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
)(currentopenview);