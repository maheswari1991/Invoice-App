import React from 'react';
import '../../App.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {makeStyles} from '@material-ui/core/styles';

const iconStyles = makeStyles( theme => ({

    root : {
        '& > *':{
            margin: theme.spacing(1),
            
        }
        
    }
}))

export default function Subscription() {

    const componentStyle = {
        cursor: 'pointer'
    }
 
    const classes= iconStyles();

    return (
        <section id="subscription">
        {/* <div className="subscription__left"> */}
        <h1 style={{fontSize: '45px',textAlign: 'center',color: 'white',paddingTop: '15px'}}>Invoice is free for 30 days 
        <br /><small style={{fontSize: '20px',fontWeight: 'normal'}}>After your Trial ends, pick up the plan that suits your need best</small>
        </h1>
        {/* </div> */}
    <div className="subscription__menu">
     <div className="subscription__right">
        <div className="subscription__form">
            <div className="subscription__text">
            <h4>From USD<br /><span style={{fontSize: '25px'}}> $16.50/<small>month</small></span></h4>
            <ul>
            <li>2 Customers</li>
            <li>1 Invoices per Month</li>
            <li>Unlimited downloads on evento Elements</li>
            <li>Cancel Anytime</li>
            </ul>
            </div>
            <div className="subscription__btn">
            <button>Subscribe with Envated Elements</button>
            </div>
        </div>
        </div>


        <div className="subscription__right">
        <div className="subscription__form">
            <div className="subscription__text">
            <h4>From USD<br /><span style={{fontSize: '25px'}}> $16.50/<small>month</small></span></h4>
            <ul>
            <li>1260 +videos</li>
            <li>240 +ebooks</li>
            <li>Unlimited downloads on evento Elements</li>
            <li>Cancel Anytime</li>
            </ul>
            </div>
            <div className="subscription__btn">
            <button>Subscribe with Envated Elements</button>
            </div>
        </div>
        </div>

        <div className="subscription__right">
        <div className="subscription__form">
            <div className="subscription__text">
            <h4>From USD<br /><span style={{fontSize: '25px'}}> $16.50/<small>month</small></span></h4>
            <ul>
            <li>1260 +videos</li>
            <li>240 +ebooks</li>
            <li>Unlimited downloads on evento Elements</li>
            <li>Cancel Anytime</li>
            </ul>
            </div>
            <div className="subscription__btn">
            <button>Subscribe with Envated Elements</button>
            </div>
        </div>
        </div>

        <div className="subscription__right">
        <div className="subscription__form">
            <div className="subscription__text">
            <h4>From USD<br /><span style={{fontSize: '25px'}}> $16.50/<small>month</small></span></h4>
            <ul>
            <li>1260 +videos</li>
            <li>240 +ebooks</li>
            <li>Unlimited downloads on evento Elements</li>
            <li>Cancel Anytime</li>
            </ul>
            </div>
            <div className="subscription__btn">
            <button>Subscribe with Envated Elements</button>
            </div>
        </div>
        </div>

        </div>
        </section>
    )
}
