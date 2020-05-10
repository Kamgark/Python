import { combineReducers } from "redux";
import globalReducer from "./globalState";
import sideBarReducer from '../components/sideBar/reducer'
import openweeklybuildReducer from '../components/openWeeklyBuild/reducer'
import menuReducer from '../components/menu/reducer'
import LoginReducer from '../components/login/reducer';
import SelectDatabaseReducer from "../components/selectDatabase/reducer";
import CreateUserReducer from "../components/createUser/reducer";
import EmployeeAccessReducer from "../components/employeeAccess/reducer";
import UserActivityReducer from "../components/userActivity/reducer";
import CurrentOpenViewReducer from "../components/currentOpenView/reducer";
import MaintainCommentsReducer from "../components/maintainComments/reducer";
import MaintainActivityReducer from "../components/maintainActivity/reducer";
import MaintainSettingReducer from "../components/maintainSetting/reducer";
import WeeklyBuildReducer from "../components/weeklyBuild/reducer";
import PendingReviewReducer from "../components/pendingReview/reducer";
import BuildDetailsViewReducer from "../components/buildDetailsView/reducer";
import BatchPrintReducer from "../components/batchPrint/reducer";
import IndividualPrintReducer from "../components/individualPrint/reducer";
import EmailPrintReducer from "../components/emailPrint/reducer";
import ReviewFormReducer from "../components/reviewForm/reducer";
import TimeRegistrationReducer from "../components/timeRegistration/reducer";
import ManagePatchReducer from "../components/managePatch/reducer";
import RecentApplicationReducer from "../components/recentApplication/reducer";
import ExcelFileReducer from "../components/excelFile/reducer";
import TimeRegistrationFormReducer from "../components/timeRegistrationForm/reducer";
import TimeRegistrationFormTwoReducer from "../components/timeRegistrationFormTwo/reducer";
import BuildDetailsFormReducer from "../components/buildDetailsForm/reducer";
import tabsReducer from "../components/tabs/reducer";

const rootReducer = combineReducers({
	main: globalReducer,
	sidebar: sideBarReducer,
	tabs: tabsReducer,
	openweekly:openweeklybuildReducer,
	menu:menuReducer,
	login:LoginReducer,
	SelectDatabase:SelectDatabaseReducer,
	CreateUser:CreateUserReducer,
	EmployeeAccess:EmployeeAccessReducer,
	UserActivity:UserActivityReducer,
	CurrentOpenView:CurrentOpenViewReducer,
	MaintainComments:MaintainCommentsReducer,
	MaintainActivity:MaintainActivityReducer,
	MaintainSetting:MaintainSettingReducer,
	WeeklyBuild:WeeklyBuildReducer,
	PendingReview:PendingReviewReducer,
	BuildDetailsView:BuildDetailsViewReducer,
	BatchPrint:BatchPrintReducer,
	IndividualPrint:IndividualPrintReducer,
	EmailPrint:EmailPrintReducer,
	ReviewForm:ReviewFormReducer,
	TimeRegistration:TimeRegistrationReducer,
	ManagePatch:ManagePatchReducer,
	RecentApplication:RecentApplicationReducer,
	ExcelFile:ExcelFileReducer,
	TimeRegistrationForm:TimeRegistrationFormReducer,
	TimeRegistrationFormTwo:TimeRegistrationFormTwoReducer,
	BuildDetailsForm:BuildDetailsFormReducer

});

export default rootReducer;
