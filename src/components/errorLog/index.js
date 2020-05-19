import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { connect } from "react-redux";

import data from '../../data.json'
import 'react-responsive-modal/styles.css';
class ErrorLog extends Component {
    state={
        firsttabledata:[],
        open: false,
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    componentDidMount(){
        this.setState({firsttabledata:data.ErrorLog})
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
            name1:"12938",
            name2:"alskdf",
            name3:"alskdf",
            name4:"alskdf",
            name5:"alskdf",
            name6:"07/03/2019",
           
            edit:true
        },...newdata]

        this.setState({firsttabledata:update})
    }
    render(){
        let {firsttabledata,open}=this.state;
        return(
        <>
        <div >
                <div className="container-fluid" >
                    <div className="table-body">
            <table>
                <thead>
                <th>Emp ID</th>
                <th>Error No</th>
                <th>Error Description</th>
                <th>GSID</th>
                <th>User Activity Log ID</th>
                <th>Date Created</th>
               
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
                                <td >{item.edit ===true ? <input className="inputcontrol" type="text" defaultValue={item.name1}/>:item.name1}
                                </td>
                                <td >{item.edit ===true ? <input className="inputcontrol" type="text" defaultValue={item.name2}/>:item.name2}
                                </td>
                                <td style={{width:"30%"}}>{item.edit===true ? <input style={{width:"90%"}} className="inputcontrol" type="text" defaultValue={item.name3}/>:item.name3}
                                </td>
                                <td >{item.edit ===true ? <input className="inputcontrol" type="text" defaultValue={item.name4}/>:item.name4}
                                </td>
                                <td >{item.edit ===true ? <input className="inputcontrol" type="text" defaultValue={item.name5}/>:item.name5}
                                </td>
                                <td >{item.edit ===true ? <input className="inputcontrol" type="text" defaultValue={item.name6}/>:item.name6}
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
            </div>

        </div>
        </div>
        </>
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
)(ErrorLog);