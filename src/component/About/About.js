import React from 'react';
import '../../App.css';

function About() {
    return (
        
        <section id="about">
            <div className="headerAbt">
                <h1>What We Do ?</h1>
                <span>Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</span>
                </div>
                <div className="workVDo">
                <div className="item1">
                <div className="service1">
                    <img src={require("../../img/marketing.jpg")} />
                    </div>
                    <h3 className="serviceHeader3">Create invoices quickly</h3>
                    <p className="servicePara">Every invoice paid means more revenue <br />coming into your small business. Create and send <br />professional invoices to your customers in seconds.</p>
              </div>
                <div className="item2">
                <div className="service1">
                    <img src={require("../../img/custom.jpg")} />
                    </div>
                    <h3 className="serviceHeader3">Invoice on the go</h3>
                    <p className="servicePara">Send invoices whenever and <br />wherever you want with IGM Invoice<br /> for iOS and Android.</p>
            
                    
                </div>
                <div className="item3">

                <div className="service1">
                    <img src={require("../../img/marketing.jpg")} />
                    </div>
                    <h3 className="serviceHeader3">Instant notification</h3>
                    <p className="servicePara">Know when an invoice is becomes due, or gets paid,<br /> so you can take the right actions to <br />manage your cash flow. Set up invoice reminders to automatically<br /> email your customers when payment is due.</p>
              

                </div>
                </div>
        </section>
    
    )
}

export default About
