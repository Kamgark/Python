import React, { Component } from 'react';
import { connect } from "react-redux";
// import  Layout from './components/layout'
import Login from './components/login';
import Users from './components/user';
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
import ScrollToHOC from "./scroll.js";
import TimeRegistrationFormTwo from "./components/timeRegistrationFormTwo";
import { addTabs } from "./components/tabs/actions";
import BuildDetailsForm from "./components/buildDetailsForm";
import Layout from './components/layout'
import { Route, Switch, withRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import './App.css';

class App extends Component {
  componentDidMount() {

    this.props.addTabs([{ id: `1`, name: "Menu" ,active:true}]);
    // this.props.history.push("/menu/1");
  };
  render() {
    return (
      <div className="App">


        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Menu} />
              {/*<Route exact path="/scroll" component={ScrollToHOC} />*/}
              <Route exact path="/login/:id" component={Login} />
              <Route exact path="/users/:id" component={Users} />
              <Route exact path="/menu/:id" component={Menu} />
              <Route exact path="/selectdatabase/:id" component={SelectDatabase} />
              <Route exact path="/createuser/:id" component={CreateUser} />
              <Route exact path="/employeeaccess/:id" component={EmployeeAccess} />
              <Route exact path="/useractivity/:id" component={UserActivity} />
              <Route exact path="/currentopenview/:id" component={CurrentOpenView} />
              <Route exact path="/maintaincomments/:id" component={MaintainComments} />
              <Route exact path="/maintainactivity/:id" component={MaintainActivity} />
              <Route exact path="/maintainsetting/:id" component={MaintainSetting} />
              <Route exact path="/weeklybuild/:id" component={WeeklyBuild} />
              <Route exact path="/openweeklybuild/:id" component={OpenWeeklyBuild} />
              <Route exact path="/pendingreview/:id" component={PendingReview} />
              <Route exact path="/builddetailsview/:id" component={BuildDetailsView} />
              <Route exact path="/batchprint/:id" component={BatchPrint} />
              <Route exact path="/individualprint/:id" component={IndividualPrint} />
              <Route exact path="/emailprint/:id" component={EmailPrint} />
              <Route exact path="/reviewform/:id" component={ReviewForm} />
              <Route exact path="/timeregistration/:id" component={TimeRegistration} />
              <Route exact path="/managepatch/:id" component={ManagePatch} />
              <Route exact path="/recentapplication/:id" component={RecentApplication} />
              <Route exact path="/excelfile/:id" component={ExcelFile} />
              <Route exact path="/timeregistrationform/:id" component={TimeRegistrationForm} />
              <Route exact path="/timeregistrationformtwo/:id" component={TimeRegistrationFormTwo} />
              <Route exact path="/builddetailsform/:id" component={BuildDetailsForm} />
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
