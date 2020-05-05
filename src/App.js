import React from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import NavBar from "./nav/Nav";
import Mein from "./mein/mein";
import Footer from "./Footer/footer";
import NoMatch from './NoMatch';
import About from "./About/About";
import ServicesPage from "./Services/ServicesPage";
import ContactUs from "./ContactUs/ContactUs";
import EligibilityIndicators from "./EligibilityIndicators/EligibilityIndicators";
import 'react-notifications-component/dist/theme.css'
import 'bootstrap/dist/css/bootstrap.css';
import ReactNotification from 'react-notifications-component'

function App() {
  return (
    <div className="App">
        <ReactNotification/>
      <header className="App-header">
        <NavBar/>
        <div className='empty'></div>
      </header>
        <Switch>
            <Route path='/eligibility-indicators'  component={EligibilityIndicators} />
            <Route path='/contact-us'  component={ContactUs} />
            <Route path='/services'  component={ServicesPage} />
            <Route path='/about-us'  component={About} />
            <Route path='/' exact component={Mein} />
            <Route path="*">
                <NoMatch />
            </Route>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
