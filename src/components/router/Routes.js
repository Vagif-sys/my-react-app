import React from "react";

import { BrowsweRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";

import Home from "../Home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import RegisterStep2 from "../Auth/RegisterStep2";
import LoginRegister from "../Auth/LoginRegister";
import MotherHome from "../../components1/MotherHome";
import Pay from "../../components1/Pay";
import Checkout from "../../components1/Checkout";
import Dashboard from "../../componentsdashboard/Dashboard";
import DashboardHotel from "../../componentsdashboard/DashboardHotelpage";
import DashboardPool from "../../componentsdashboard/DashboardPoolpage";
import DashboardPartial from "../../componentsdashboard/Dashboardpartials";
import DashboardPayout from "../../componentsdashboard/Dashboardpayouts";
import DashboardReward from "../../componentsdashboard/Dashboardrewards";
import Blog from "../Blog";
import Blog1 from "../Blog1";
import Blog2 from "../Blog2";
import Faq from "../Faq";
import About from "../About";
import Contact from "../Contact";
import Services from "../Services";
import Navbar from "../Common/Navbar";
import NewNavbar from "../Common/NewNavbar";
import Footer from "../Common/Footer";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <MotherHome />
    </Route>

    <Route exact path="/services">
      <Navbar />
      <Services />
      <Footer />
    </Route>

    <Route exact path="/blog">
      <Navbar />
      <Blog />
      <Footer />
    </Route>

    <Route exact path="/Chia.Az/,/Chia/PLOT/xidmətini/aktivləşdirdi">
      <Navbar />
      <Blog1 />
      <Footer />
    </Route>

    <Route exact path="/Chia.AZ/3/istiqamətdə/xidmət/verməyə/hazırlaşır">
      <Navbar />
      <Blog2 />
      <Footer />
    </Route>

    <Route exact path="/faq">
      <Navbar />
      <Faq />
      <Footer />
    </Route>

    <Route exact path="/about">
      <Navbar />
      <About />
      <Footer />
    </Route>

    <Route exact path="/contact">
      <Navbar />
      <Contact />
      <Footer />
    </Route>

    <Route exact path="/checkout">
      <Navbar />
      <Checkout />
      <Footer />
    </Route>

    <Route exact path="/pay">
      <Navbar />
      <Pay />
      <Footer />
    </Route>

    <Route exact path="/loginRegister">
      <Navbar />
      <LoginRegister />
      <Footer />
    </Route>

    <Route exact path="/dashboard">
      <NewNavbar />
      <Dashboard />
      <Footer />
    </Route>

    <Route exact path="/dashboardhotel">
      <NewNavbar />
      <DashboardHotel />
      <Footer />
    </Route>

    <Route exact path="/dashboardpool">
      <NewNavbar />
      <DashboardPool />
      <DashboardReward />
      <Footer />
    </Route>

    <Route exact path="/dashboardpartial">
      <NewNavbar />
      <DashboardPool />
      <DashboardPartial />
      <Footer />
    </Route>

    <Route exact path="/dashboardpayout">
      <NewNavbar />
      <DashboardPool />
      <DashboardPayout />
      <Footer />
    </Route>

    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/registerStep2" component={RegisterStep2} />
    <PrivateRoutes path="/home" component={Home} exact />
  </Switch>
);

export default Routes;
