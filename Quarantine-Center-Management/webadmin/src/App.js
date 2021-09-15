import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//common navigation components
import Header from './components/Common/Navigation/Header';
import Sidebar from './components/Common/Navigation/Sidebar';

//component
import Login from './components/exampleComponent/Loginform';


//Page Route
import addStaffMember from './pages/StaffMenagement/addStaffMember' //--Added by Isuru Pathum Herath--
import allStaffMembers from './pages/StaffMenagement/allStaffMembers' //--Added by Isuru Pathum Herath--
import updateStaffMember from './pages/StaffMenagement/updateStaffMember' //--Added by Isuru Pathum Herath--
import addSalary from './pages/StaffMenagement/addSalaryforStaff' //--Added by Isuru Pathum Herath--
import singleProfile from './pages/StaffMenagement/singleStaffProfile'  //--Added by Isuru Pathum Herath-- | TEMP
import filterStaffMember from './pages/StaffMenagement/filterStaffMember'  //--Added by Isuru Pathum Herath-- | TEMP
import viewTickets from './pages/TicketManagement/viewTickets'; //--Added by Vishara Prabuddhi--
import replyTickets from './pages/TicketManagement/replyTickets'; //--Added by Vishara Prabuddhi--


class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Sidebar />
        <div class="page-wrapper">
          <div class="content container-fluid">
                    
            <Switch>
              <Route path="/login" exact component={Login} />

              <Route path="/viewalltickets" exact component={viewTickets}/> {/*--Added by Vishara Prabuddhi--*/}
              <Route path="/edit/:id" exact component={replyTickets}/> {/*--Added by Vishara Prabuddhi--*/}
              <Route path="/addStaffMember" exact component={addStaffMember} />         {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/allStaffMembers" exact component={allStaffMembers} />       {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/updateStaffMember/:id" exact component={updateStaffMember} />   {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/singleProfile/:id" exact component={singleProfile} />   {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/filterStaffMember" exact component={filterStaffMember} />   {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/addSalary" exact component={addSalary} />   {/*--Added by Isuru Pathum Herath--*/}
              
            
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
