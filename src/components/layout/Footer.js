import React, { Fragment } from 'react'
import '../../App.css'
const Footer = () => {
    return (
        <Fragment>
            <footer className="py-1">
                <p className="ml-10 mt-1">
                    <footer className="footer">
                        <div className="footer__container">
                            <div className="footer__section_main footer__section-input">
                                <p className='p'>BE THE FIRST TO KNOW</p>
                                <p> Sign up for update from metta muse.</p>
                                <div className="footer__input-container">
                                    <input type="text" placeholder=" Please SignIn" />
                                    <button>Subscribe</button>
                                </div>
                            </div>
                            <div className="footer__section footer__section-know">
                                <p>CONTACT US</p>
                                <p>+44 221 133 5360</p>
                                <p>customercare@gmail.com</p>

                                <p>CURRENCY</p>
                                <div className="d-flex">
                                    <img src='' alt='' />
                                    <h5>.USB</h5>
                                </div>
                                <p>Transaction will be completed Euros</p>
                            </div>
                        </div>
                        <p className='container-mobile'>
                            Loprem ipsum dolor sit amet consectetur.Amet est posuere rhourse<br />
                            scelerisuque.Dolor integer scelerisque nibh amet mi ut elementum dolor
                        </p>
                    </footer>
                </p>
            </footer>
        </Fragment>
    )
}

export default Footer
