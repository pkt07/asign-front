import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textSearch:{
        position:'relative',
        marginTop:'15%',
        display:'flex'
    },
    textInput:{
        width:'600px'
    },
    btnInpt:{
        width:'145px',
        position:'relative',
        left:'20%'
    }
  }),
);
export default useStyles;