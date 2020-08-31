import React ,{useState} from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ChipInput from "material-ui-chip-input";
import {getCookie} from "../../Utility/cookieHelper"
import useStyle from "./FirstPageStyle";
import {API_URL} from "../../Utility/apiConstant";
import {Register} from "../../Redux/Action/commonAction";
import { connect } from "react-redux";

const FirstPage: React.FC<any> = ({videoInfo}) => {
    const [userData, setUserData] = useState({
        videoUrl: "",
        accessToken:getCookie('key'),
        keyWords:""
      });
  const handleChange = (data: any) => {
    setUserData(Object.assign
        ({}, userData, {keyWords:data})
        )
  };
  const handleInput  = (event: any) => {
    setUserData(
      Object.assign({}, userData, { [event.target.name]: event.target.value })
    );
  };
  const handleSubmit = () =>{
    const { videoUrl,accessToken,keyWords } = userData;
    let endPoint = API_URL.video;
    let method = "POST";
    videoInfo({videoUrl,accessToken,keyWords,method,endPoint});
  }
  const classes = useStyle();
  return ( 
    <div>
      <Grid container spacing={4}>
        <Grid item md={2}></Grid>
        <Grid item md={6} className={classes.textSearch}>
          <TextField
            id="outlined-basic"
            label="Video Url"
            variant="outlined"
            size="small"
            name="videoUrl"
            onChange={handleInput}
            className={classes.textInput}
          />
          
          <Grid item md={2}>
            <Button
              variant="contained"
              color="primary"
              className={classes.btnInpt}
              onClick={handleSubmit}
            >
              Add Keyword
            </Button>
          </Grid>
          </Grid>
        <Grid item md={2}></Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item md={2}></Grid>
        <Grid item md={6}>
          <ChipInput
            defaultValue={[]}
            onChange={(chips) => handleChange(chips)}
            placeholder="Enter Keywords"
          />
        </Grid>
        <Grid item md={2}></Grid>
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
    videoInfo:Register
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);
