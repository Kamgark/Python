import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { connect } from "react-redux";


import data from '../../data.json'

class timeregistration extends Component {
    state={
        firsttabledata:[]
    }
    componentDidMount(){
        this.setState({firsttabledata:data.timeregistration})
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
            name1 :"5064",
            name2 :"10/29/2019",
            name3 :"10/29/2019",
            name4 :"7",
            edit :"true"
        },...newdata]

        this.setState({firsttabledata:update})
    }
    render(){
        let {firsttabledata}=this.state;
        return(

            <table>
                <thead>
                <th>BuildID</th>
                <th>From</th>
                <th>To</th>
                <th>Qty SKUs</th>
                <th><i className="fa fa-plus" onClick={()=> this.addtable()}></i></th>
                </thead>
                <tbody>
                {
                    firsttabledata && firsttabledata.map((item, index)=>{
                        return(
                            <tr key={index}>

                                <td>{item.edit ===true ? <input className="inputcontrol" type="text" defaultValue={item.name1}/>:item.name1}
                                </td>
                                <td>{item.edit===true ? <input className="inputcontrol" type="text" defaultValue={item.name2}/>:item.name2}
                                </td>
                                <td>{item.edit===true ? <input className="inputcontrol" type="text" defaultValue={item.name3}/>:item.name3}
                                </td>
                                <td>{item.edit===true ? <input className="inputcontrol" type="text" defaultValue={item.name4}/>:item.name4}
                                </td>
                                <td>{item.edit===true ? <i className="fa fa-check ml-0" onClick={()=>this.tick(index)}></i>:<i className="fa fa-edit ml-0" onClick={()=> this.edit(index)}></i>}
                                    <i className="fa fa-trash cursor-pointer" onClick={()=> this.delete(index)}></i>
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
)(timeregistration);