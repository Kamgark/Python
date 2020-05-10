import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Line, Polar } from 'react-chartjs-2';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { connect } from "react-redux";
import { Link,withRouter } from 'react-router-dom'
import Menucomp from '../menu/menuComponent';
const line = {
    labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    datasets: [
        {
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 2,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(195,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 2,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [29, 40, 50, 51, 36, 50, 20],
        },
    ],
};
const polar = {
    datasets: [
        {
            data: [
                11,
                16,
                7,
                3,
                14,
            ],
            backgroundColor: [
                '#FF6384',
                '#4BC0C0',
                '#FFCE56',
                '#E7E9ED',
                '#36A2EB',
            ],
            label: 'My dataset' // for legend
        }],
    labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue',
    ],
};
const options = {
    tooltips: {
        enabled: false,
        custom: CustomTooltips
    },
    maintainAspectRatio: false
}

class Menu extends Component {
   
    clossTab=(index)=>{
        console.log("warka dang");
        // let {tabheaddata}=this.state;
        // let tabhead= tabheaddata;
        // tabhead.splice(index, 1);
        // this.setState({tabheaddata:tabhead});

        // let {tabbodydata}=this.state;
        // let tabbody= tabbodydata;
        // tabbody.splice(index, 1);
        // this.setState({tabbodydata:tabbody});

    };
    render() {
        return (
                    <div className="col-sm-12 pl-0" id="menu">
                        <Menucomp/>
                    </div>
         
        )
    }
} 

const mapStateToProps = ({sidebar, openweekly, menu }) => {
    return {

        wesal:sidebar.wesal,
        ali:openweekly.ali,
        tabheaddata:menu.tabheaddata,
        tabbodydata:menu.tabbodydata
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
)(withRouter(Menu));


