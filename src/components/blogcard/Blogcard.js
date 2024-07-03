import React from 'react'
import "./blogcard.scss"

import { RxArrowTopRight } from "react-icons/rx";
import blog1 from "../../assets/images/blog1.png"
import blog2 from "../../assets/images/blog2.png"
import blog3 from "../../assets/images/blog3.png"

const Blogcard = () => {
  return (
    <div id='blogs'>
        <div className="blog__row">
            <div className="blog__card">
                <div className="blog__card__img">
                    <img src={blog1} alt="" />
                </div>
                <div className="blog__card__body">
                    <div className="blog__card__text">
                        <h2>Как правильно освещать дом снаружи?</h2>
                        <RxArrowTopRight/>
                    </div>
                    <p>01.01.2024</p>
                </div>
            </div>
            <div className="blog__card">
                <div className="blog__card__img">
                    <img src={blog2} alt="" />
                </div>
                <div className="blog__card__body">
                    <div className="blog__card__text">
                        <h2>Как правильно освещать дом снаружи?</h2>
                        <RxArrowTopRight/>
                    </div>
                    <p>01.01.2024</p>
                </div>
            </div>
            <div className="blog__card">
                <div className="blog__card__img">
                    <img src={blog3} alt="" />
                </div>
                <div className="blog__card__body">
                    <div className="blog__card__text">
                        <h2>Как правильно освещать дом снаружи?</h2>
                        <RxArrowTopRight/>
                    </div>
                    <p>01.01.2024</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogcard