import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { connect } from "react-redux";

import data from '../../data.json'
import 'react-responsive-modal/styles.css';
class Patch extends Component {
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
        this.setState({firsttabledata:data.patch})
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
                <th>Patch ID</th>
                <th>Date Entered</th>
                <th>Description</th>
               
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
                                <td style={{width:"60%"}}>{item.edit===true ? <input style={{width:"90%"}} className="inputcontrol" type="text" defaultValue={item.name3}/>:item.name3}
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
)(Patch);