import React from 'react'
import { useFormatDate } from '../customhooks'
import './Footer.css'

const Footer = () => {
    const formatedDate = useFormatDate(new Date().toLocaleDateString())

    return (
        <>
            <div className="footer">
                <div className="footer__top">
                    <p className="footer__clone">Amazon Clone</p>
                    <p className="footer__date">13/Sept/2020  -  {formatedDate} &copy;Ongmu</p>
                </div>
                <div className="footer__bottom">
                    <a href="/">Home</a>
                    <a href="/">Send feedback</a>
                    <a href="/">Privacy</a>
                    <a href="/">Terms</a>
                </div>
            </div>
        </>
    )
}

export default Footer
