import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { GoogleLogin } from "react-google-login";
import useStyle from "./LandingPageStyle";
import {setCookie} from "../../Utility/cookieHelper";
import {Register} from "../../Redux/Action/commonAction";
import {API_URL} from "../../Utility/apiConstant";
const LandingPage: React.FC<any> = ({userData,loggedInFlag}) => {
  const responseGoogle = (response: any) => {
    if(response.profileObj){
      let data={
        accessToken:response.accessToken,
        email:response.profileObj.email,
        firstName:response.profileObj.firstName,
        lastName:response.profileObj.lastName,
        method:'POST',
        endPoint:API_URL.register
      }
      
      userData(data);
      if(loggedInFlag){
        setCookie("key",response.accessToken);
      window.location.href="/dashboard";
      }
    }
  };
  const classes = useStyle();
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} className={classes.mainContent}>
          <GoogleLogin
            className={classes.loginButton}
            clientId="274001693527-oqgrs4hpa8c3llmkqutk3phs18lgusre.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
};
function mapStateToProps(state: any) {
  return {
    loggedInFlag:state.global.loggedInFlag
  };
}

const mapDispatchToProps = {
  userData:Register
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
