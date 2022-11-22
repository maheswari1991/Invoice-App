import React, { Component } from 'react'
import '../../App.css';

export default class Footer extends Component {
    render() {
        return (
            <section id="footer">
            <div className="footer__services">
                <h1>SERVICES</h1>
                <ul>
                <li>Financial Services</li>
                <li>Retail Services</li>
                <li>Cloud Services</li>
                <li>Telecom Services</li>
                </ul>
            </div>
            <div className="footer__products">
            <h1>PRODUCTS</h1>
                <ul>
                <li>Invoice Generator</li>
                <li>Amazon Clone</li>
                <li>Youtube Clone</li>
                <li>Youtube Clone</li>

                </ul>
                </div>
            <div className="footer__addresses">
            <h1>ADDRESS</h1>

                <address>FinaTel Technologies Pvt. Ltd.<br />
                2nd Floor,96, Greeta Tech Park,<br/>
                Phase-1 VSI Industrial Estate,
                Perungudi, Chennai-600096.</address>
                <p>Phone : 044 - 56565963</p>
             </div>
            </section>
        )
    }
}
