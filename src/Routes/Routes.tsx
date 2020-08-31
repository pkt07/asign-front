import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Container from "@material-ui/core/Container";
import PageDashboard from "../Components/LandingPage/LandingPage";
import FirstPage from "../Components/FirstPage/FirstPage";
import {getCookie} from "../Utility/cookieHelper";
const Routes: React.FC<{}> = () => {
    return getCookie("key")!=null?(
    <Router>
      <div>
        <main >
          <Container maxWidth="lg">
            <Switch>
              <Route path='/dashboard' exact component={FirstPage} />  
              <Redirect to="/dashboard" />  
            </Switch>
          </Container>
        </main>
      </div>
    </Router>
    ):(
      <Router>
        <Route path="/" component={PageDashboard} />
      </Router>
    );
};

export default Routes;
