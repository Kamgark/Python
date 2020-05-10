import React, { Component } from 'react';
import { connect } from "react-redux";
// import  Layout from './components/layout'
import Login from './components/login';
import Menu from "./components/menu";
import SelectDatabase from "./components/selectDatabase";
import CreateUser from "./components/createUser";
import EmployeeAccess from "./components/employeeAccess";
import UserActivity from "./components/userActivity";
import CurrentOpenView from "./components/currentOpenView";
import MaintainComments from "./components/maintainComments";
import MaintainActivity from "./components/maintainActivity";
import MaintainSetting from "./components/maintainSetting";
import WeeklyBuild from "./components/weeklyBuild";
import OpenWeeklyBuild from "./components/openWeeklyBuild";
import PendingReview from "./components/pendingReview";
import BuildDetailsView from "./components/buildDetailsView";
import BatchPrint from "./components/batchPrint";
import IndividualPrint from "./components/individualPrint";
import EmailPrint from "./components/emailPrint";
import ReviewForm from "./components/reviewForm";
import TimeRegistration from "./components/timeRegistration";
import ManagePatch from "./components/managePatch";
import RecentApplication from "./components/recentApplication";
import ExcelFile from "./components/excelFile";
import TimeRegistrationForm from "./components/timeRegistrationForm";
import TimeRegistrationFormTwo from "./components/timeRegistrationFormTwo";
import { addTabs } from "./components/tabs/actions";
import BuildDetailsForm from "./components/buildDetailsForm";
import Layout from './components/layout'
import { Route, Switch, withRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import './App.css';

class App extends Component {
  componentDidMount() {
    // let {tabs}=this.props;
    // let Tabs=[];
    // let isThere=true;
    // tabs.map((item)=>{
    //     if(item.name ==="menu"){
    //         isThere=false
    //     }
    // });
    // if(isThere){
    //     Tabs.push()
    // }
    // else{
    //     Tabs.push(...tabs);
    // }
    this.props.addTabs([{ id: `1`, name: "menu" }]);
    this.props.history.push("/menu");
  };
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Menu} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/menu" component={Menu} />
              <Route exact path="/selectdatabase" component={SelectDatabase} />
              <Route exact path="/createuser" component={CreateUser} />
              <Route exact path="/employeeaccess" component={EmployeeAccess} />
              <Route exact path="/useractivity" component={UserActivity} />
              <Route exact path="/currentopenview" component={CurrentOpenView} />
              <Route exact path="/maintaincomments" component={MaintainComments} />
              <Route exact path="/maintainactivity" component={MaintainActivity} />
              <Route exact path="/maintainsetting" component={MaintainSetting} />
              <Route exact path="/weeklybuild" component={WeeklyBuild} />
              <Route exact path="/openweeklybuild" component={OpenWeeklyBuild} />
              <Route exact path="/pendingreview" component={PendingReview} />
              <Route exact path="/builddetailsview" component={BuildDetailsView} />
              <Route exact path="/batchprint" component={BatchPrint} />
              <Route exact path="/individualprint" component={IndividualPrint} />
              <Route exact path="/emailprint" component={EmailPrint} />
              <Route exact path="/reviewform" component={ReviewForm} />
              <Route exact path="/timeregistration" component={TimeRegistration} />
              <Route exact path="/managepatch" component={ManagePatch} />
              <Route exact path="/recentapplication" component={RecentApplication} />
              <Route exact path="/excelfile" component={ExcelFile} />
              <Route exact path="/timeregistrationform" component={TimeRegistrationForm} />
              <Route exact path="/timeregistrationformtwo" component={TimeRegistrationFormTwo} />
              <Route exact path="/builddetailsform" component={BuildDetailsForm} />
            </Switch>

          </Layout>
        </BrowserRouter>


      </div>
    );
  }
}

const mapStateToProps = ({ tabs}) => {
  return {
      tabs:tabs.tabs
  };
};

export default connect(
  mapStateToProps,
  {addTabs }
)(withRouter(App));
