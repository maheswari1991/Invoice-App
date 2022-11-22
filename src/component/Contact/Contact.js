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

export default function Contact() {

    const componentStyle = {
        cursor: 'pointer'
    }
 
    const classes= iconStyles();

    return (
        <section id="contact">
            {/* <div className="headerCnt">
                <h1>Who We Are ?</h1>
                <span>Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</span>
                </div> */}
                {/* <div className="contactworkVDo"> */}
                

                <div className="contactUs1">
                   <img src={require('../../img/office.png')} /> 
                   
              </div>
                <div className="contactUs2">
                <div >Track Sales, Invoices & Client's<br /> Payments Easily</div>
                    <p>The IGM Invoices innovative system enables you to invoice clients fast - receive and <br />
                    track payments online. Use built-in powerful features to manage recurring invoices and payments. <br />Combine this with easy transitions from estimates 
                    and quotes to active invoices and<br /> you will discover how it will help you to develop your business </p>                
                    </div>
                {/* </div> */}
                   
        </section>
    )
}
