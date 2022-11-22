import React, { Component, useState,useRef } from 'react'
import '../../App.css';
import { BrowserRouter as Router, Route, Redirect,useHistory} from 'react-router-dom';
import { AnimationScroll as Scroll, Link} from 'react-scroll';
import Button from '@material-ui/core/Button';
import { makeStyles, createMuiTheme , ThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import HomeIcon from '@material-ui/icons/Home';
import {useDispatch , useSelector} from 'react-redux';
// import {ActionLogedin} from '../../action/action';
import {useAlert} from 'react-alert';
import {BASE_URL , LOGIN_URL} from '../../constants/action-types';

// import Login from '../login/Login';

// let email = "";
// let password = "";

const theme = createMuiTheme({
  palette:{
    primary:{
      main: '#ffc400'
    }
  },
  

});




const btnStyle = makeStyles(theme => ({

  root: {
          
    '& > *':{
      margin: theme.spacing(1),
      width: '40ch'
    },
    '& h6':{
        color: 'red'
    }
  
  },
  submit:{
    color: '#ffffff',
    fontWeight: 'bolder',
    marginTop: theme.spacing(4)
  },
  styledHeader: {
      
    '& h2': {
      color: '#ffc400',
      fontWeight: '700',
      fontSize: '24px',
      fontFamily: '',
    }
},
  

  button:{
    color: '#ffffff',
    backgroundColor: '#ffc400',
    paddingLeft: ' 25px',
    paddingRight: '25px'
  }

}))


export default function Navbar() {

  const alert = useAlert();


  const history = useHistory()
  const myInputRef = useRef();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [emailError, setEmailError] = useState(false);


  const [openModal , setOpen]= useState(false);

const handleClose =()=> {
    setOpen(false);
}

const clickOnModal = () => {
    console.log('open the modal');
    setOpen(true);
}

const toggleClass = () => {
console.log("Enter the toggle class");
  const getItem = document.querySelectorAll('.navMenu-item');
  console.log("the navmenu contians ", getItem)
  // getItem.classList.toggle('toggleNav_class')
  getItem.forEach(nav => nav.classList.toggle('toggleNav_class'))
}



  //   const Dispatch = useDispatch();
  //   const getLoginStatus = useSelector(state => {
  //     console.log("the state", state.LoginReducer.logInState.isLoggedIn);

  //     return(
  //       state = {
  //         isLoginSuccess : state.LoginReducer.logInState.isLoggedIn,
  //         errorMessage: state.LoginReducer.logInState.message,
  //         errorTitle: state.LoginReducer.logInState.title
  //       }
        
  //     )
      
      
  //   })
  
  
  //   if(getLoginStatus.isLoginSuccess){
  //     console.log("get the status to redirect",getLoginStatus.isLoginSuccess);
  //     history.push('/Main');
  // }
  // else{
  //   console.log("get the status to redirect",getLoginStatus.isLoginSuccess);

  //   console.log("the redirection failed");
  // }
  

  // const isEnabled = email.length > 0 && password.length > 0;


  //     const classes = btnStyle();
  return (
 <Router>
    <div>
      <header className="headerSection">
        <nav className="navMenu">
        <div className="NavigationLogo"><a href="/">INVOICE</a></div>
        <div className="Navbar__Link">
        <HomeIcon onClick={toggleClass} />
        
    </div>
        {/* <div className="spacer"></div> */}
        <ul className="navMenu-item">
        <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-10}
        duration= {3000}
    
        >Home</Link>
        <Link 
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-10}
        duration= {3000}    
        >About</Link>
        <Link
        activeClass="active"
        to="subscription"
        spy={true}
        smooth={true}
        offset={-10}
        duration={3000}
        >Subscriptions</Link>

        <Link 
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-10}
        duration= {3000}  
        >Services</Link>
        {/* <Button variant="contained" type="button" className={classes.button} onClick={clickOnModal}>LOGIN</Button> */}
{/*         
        <Button variant="contained" type="button" className={classes.button} onClick={() => {
                                    alert.success(<div style={{ color: '#009688'}}>Tax added Successfully</div>,{
                                      timeout: 5000,
                                      position: 'top right'
                                    });

        }}>LOGIN</Button> */}

          </ul>
          {/* <Route exact path="/login" component={Login} /> */}
      {/* <Button variant="contained" type="button" className={classes.button} onClick={clickOnModal}>LOGIN</Button> */}

          </nav>
        </header>


        {/* <ThemeProvider theme={theme}> */}
        {/* <Button className={classes.submit} type="submit" variant="contained" color="primary" onClick={clickOnModal}>Open Modal</Button> */}

        {/* <Dialog  open={openModal} onClose={handleClose} aria-labelledby='form-dialog-title'  id="Ldialog-form">
            <DialogTitle id="Lform-dialog-title" className={classes.styledHeader}>LOGIN FORM</DialogTitle>
            <DialogContent>
          
        <form   className={classes.root} noValidate>
        <TextField 
        id="outlined-email" 
        label="Email Address"
        variant="outlined"
        color="primary" */}
        {/* onChange = {(event) => {
          // email = event.target.value;
          console.log("the email field value", event.target.value)
          setEmail(event.target.value);
          
          // const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
          // const result = pattern.test(event.target.value);
          // if(result === false){
          //   setEmailError(true)

          // }
        }}
        
        /> */}
        {/* {email ? <span style={{color: "red"}}>Please Enter some value</span> : ''}  */}

        {/* <br />

        <TextField 
        id="outlined-pwd" 
        name="password"
        variant="outlined"
        color="primary"
        label="Password"
        type="password"
        id="password"
        onChange={event => {
                // password = event.target.value;
                setPassword(event.target.value);
              }}
                         
        /><br />
        

        <Button  className={classes.submit} variant="contained" color="primary"  
        disabled={!isEnabled}
         onClick = {()=> {

            // e.preventDefault();
            console.log("them email value is", {email}); */}
            {/* axios.post(BASE_URL + LOGIN_URL , {
            // axios.post('http://invoiceapi.ignitionminds.com/invoice/api/v1/login_user',{
              // email: email,
              // password: password,
              // device_type: 'W',

              email: email,
              password: password,
              device_type: 'W',
            })
            .then(res =>{
              console.log("the response data", res);
              alert.success(<div style={{ color: '#009688'}}>LoggedIn Successfully</div>,{
                timeout: 5000,
                position: 'top right'
              });
              const payload = {
                status : "true",
                message: "",
                accessToken: res.data.access,
                refreshToken: res.data.refresh
              }
              Dispatch(ActionLogedin(payload))
            })
            .catch(function(error){
              console.log("the issue",error);
              alert.error(<div style={{ color: '#009688'}}>error</div>,{
                timeout: 5000,
                position: 'top right'
              });
            })
          
          
        }}>LOGIN</Button>
          </form>

          

                </DialogContent>
            </Dialog>
        </ThemeProvider> */}

        </div>
      </Router>

        )
    }


