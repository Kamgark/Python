import React, { Component } from 'react';
import Login from '../login';
import Menucomp from '../menu/menuComponent';
import SelectDatabase from "../selectDatabase";
import CreateUser from "../createUser";
import EmployeeAccess from "../employeeAccess";
import UserActivity from "../userActivity";
import CurrentOpenView from "../currentOpenView";
import MaintainComments from "../maintainComments";
import MaintainActivity from "../maintainActivity";
import MaintainSetting from "../maintainSetting";
import WeeklyBuild from "../weeklyBuild";
import OpenWeeklyBuild from "../openWeeklyBuild";
import PendingReview from "../pendingReview";
import BuildDetailsView from "../buildDetailsView";
import BatchPrint from "../batchPrint";
import IndividualPrint from "../individualPrint";
import EmailPrint from "../emailPrint";
import ReviewForm from "../reviewForm";
import TimeRegistration from "../timeRegistration";
import ManagePatch from "../managePatch";
import RecentApplication from "../recentApplication";
import ExcelFile from "../excelFile";
import TimeRegistrationForm from "../timeRegistrationForm";
import TimeRegistrationFormTwo from "../timeRegistrationFormTwo";
import BuildDetailsForm from "../buildDetailsForm";

const initialState = {
    tabheaddata: [
        { name: "Menu", id: "0" },
        { name: "Login", id: "1" },
        { name: "Select Database", id: "2" },
        { name: "Create User", id: "3" },
        { name: "Employee Access", id: "4" },
        { name: "User Activity", id: "5" },
        { name: "Current Open View", id: "6" },
        { name: "Maintain Comments", id: "7" },
        { name: "Maintain Activity", id: "8" },
        { name: "Maintain Setting", id: "9" },
        { name: "Weekly Build", id: "10" },
        { name: "Open Weekly Build", id: "11" },
        { name: "Pending Review", id: "12" },
        { name: "Build Detals view", id: "13" },
        { name: "Batch Print", id: "14" },
        { name: "Individual Print", id: "15" },
        { name: "Email Print", id: "16" },
        { name: "Review Form", id: "17" },
        { name: "Time Registration", id: "18" },
        { name: "Manage Patch", id: "19" },
        { name: "Recent Application", id: "20" },
        { name: "Excel File", id: "21" },
        { name: "Time Registration Form", id: "22" },
        { name: "Time Registration Form t", id: "23" },
        { name: "Build Details Form", id: "24" }
    ],
    tabbodydata: [
        { name: "Menu", component: <Menucomp />, id: "0" },
        { name: "Login", component: <Login />, id: "1" },
        { name: "Select Database", component: <SelectDatabase />, id: "2" },
        { name: "Create User", component: <CreateUser />, id: "3" },
        { name: "Employee Access", component: <EmployeeAccess />, id: "4" },
        { name: "User Activity", component: <UserActivity />, id: "5" },
        { name: "Current Open View", component: <CurrentOpenView />, id: "6" },
        { name: "Maintain Comments", component: <MaintainComments />, id: "7" },
        { name: "Maintain Activity", component: <MaintainActivity />, id: "8" },
        { name: "Maintain Setting", component: <MaintainSetting />, id: "9" },
        { name: "Weekly Build", component: <WeeklyBuild />, id: "10" },
        { name: "Open Weekly Build", component: <OpenWeeklyBuild />, id: "11" },
        { name: "Pending Review", component: <PendingReview />, id: "12" },
        { name: "Build Detals view", component: <BuildDetailsView />, id: "13" },
        { name: "Batch Print", component: <BatchPrint />, id: "14" },
        { name: "Individual Print", component: <IndividualPrint />, id: "15" },
        { name: "Email Print", component: <EmailPrint />, id: "16" },
        { name: "Review Form", component: <ReviewForm />, id: "17" },
        { name: "Time Registration", component: <TimeRegistration />, id: "18" },
        { name: "Manage Patch", component: <ManagePatch />, id: "19" },
        { name: "Recent Application", component: <RecentApplication />, id: "20" },
        { name: "Excel File", component: <ExcelFile />, id: "21" },
        { name: "Time Registration Form", component: <TimeRegistrationForm />, id: "22" },
        { name: "Time Registration Form t", component: <TimeRegistrationFormTwo />, id: "23" },
        { name: "Build Details Form", component: <BuildDetailsForm />, id: "24" }]
};

export default (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case "LOGGED_IN":
            console.log("")
            break;
        default:
            break;

    }
    return newState;
};
