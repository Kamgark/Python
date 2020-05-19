import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { connect } from "react-redux";

import { Modal } from 'react-responsive-modal';
import ProductEntry from '../productEntry';
import data from '../../data.json'
import 'react-responsive-modal/styles.css';
class Products extends Component {
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
        this.setState({firsttabledata:data.product})
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
            name3:"low",

            edit:true
        },...newdata]

        this.setState({firsttabledata:update})
    }
    render(){
        let {firsttabledata,open}=this.state;
        return(
        <>
            <table>
                <thead>
                <th>SKU</th>
                <th>Name</th>
                <th>System Name</th>
                <th>Brand Name</th>
                <th>Status ID</th>
                <th>Catogory ID</th>
                <th>SKU Type ID</th>

                <th><i className="fa fa-plus" onClick={()=> this.onOpenModal()}></i></th>
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
                                <td>{item.edit===true ? <input className="inputcontrol" type="text" defaultValue={item.name3}/>:item.name4}
                                </td>
                                <td>{item.edit===true ? <input className="inputcontrol" type="text" defaultValue={item.name3}/>:item.name5}
                                </td>
                                <td>{item.edit===true ? <input className="inputcontrol" type="text" defaultValue={item.name3}/>:item.name6}
                                </td>
                                <td>{item.edit===true ? <input className="inputcontrol" type="text" defaultValue={item.name3}/>:item.name7}
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
        <Modal open={open} onClose={this.onCloseModal} >
            <ProductEntry/>
        </Modal>
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
)(Products);