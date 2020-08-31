import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContent:{
        position:'relative',
        marginTop:'15%',
        marginLeft:'3%'
    },
    loginButton:{
      color:"#fff !important",
      fontWeight:"bold",
      background:"red !important",
    }
  }),
);
export default useStyles;