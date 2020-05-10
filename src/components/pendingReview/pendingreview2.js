import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { connect } from "react-redux";


import data from '../../data.json'

class pendingreview1 extends Component {
    state={
        firsttabledata:[]
    }
    componentDidMount(){
        this.setState({firsttabledata:data.pendingreview2})
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
            name2:"0askdfjl alsfdkjasl lakdsflas dflanwfsa dflaskdfhnalsdknf ",
            name3:"0",
            name4:"75",
            name5:"75",
            name6:"75",
            name7:"75",
            name8:"75",
            name9:"asdklf;jasdklfjsal",
            edit:true
        },...newdata]

        this.setState({firsttabledata:update})
    }
    render(){
        let {firsttabledata}=this.state;
        return(

            <table>
                <thead>
                <th>ID</th>
                <th>EmpID</th>
                <th>SKU</th>
                <th>Build Date</th>
                <th>Total Date</th>
                <th>Build Hours	</th>
                <th>PS</th>
                <th>BTI</th>
                <th>Comments</th>
                <th><i className="fa fa-plus" onClick={()=> this.addtable()}></i></th>
                <th></th>

                </thead>
                <tbody>
                {
                    firsttabledata && firsttabledata.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.edit ===true ? <input className="inputcontrol" type="text" defaultValue={item.name1}/>:item.name1}
                                </td>
                                <td>{item.edit===true ? <input   className="inputcontrol" type="text" defaultValue={item.name2}/>:item.name2}
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
                                <td>{item.edit===true ? <input className="inputcontrol" type="text" defaultValue={item.name9}/>:item.name9}
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
)(pendingreview1);