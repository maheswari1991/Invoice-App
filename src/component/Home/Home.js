import React, { Component } from 'react';
import '../../App.css';
// import FormuserDetails from '../userForm/FormuserDetails';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const hmeBtn = makeStyles(theme => ({

  button : {
    border: '1px solid #009688',
    backgroundColor: '#009688',
    marginTop: '25px',
    "&:hover" : {
      backgroundColor: '#009688'
    }
  }

}))

function Home()  {

  const classes = hmeBtn();
  return (
        <section id="home">
          <div className="leftContent">
            <div className="content">
              <h1>Online GST invoicing software for your business</h1>
              <span>invoicing software that helps you craft professional invoices, automatically send payment reminders,<br /> and get paid faster online.
 </span>
              <div>
              <Button className={classes.button} type="button" variant="outlined">SignUp for free</Button>
              {/* <Button className="demoBtn" variant="contained" color="secondary">View Demo</Button> */}
                </div>
              </div>

        </div>
q    <div className="rightContent">
    {/* <FormuserDetails /> */}
    </div>
    {/* <Login /> */}
          </section>

  );
    }


export default Home;
