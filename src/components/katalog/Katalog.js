import React from 'react'
import "./katalog.scss"

import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


import { KATALOG_ITEMS } from '../../static';

const Katalog = () => {

    let KATALOG = KATALOG_ITEMS?.map((el) => (
        <div key={el.id} className="katalog__card">
            <div className="katalog__card__left">
                <h2>{el.title}</h2>
                <NavLink> 
                    От 540₽
                    <FaArrowRightLong/>
                </NavLink>
            </div>
            <div className="card__right">
                <img src={el.image} alt="" />
            </div>
        </div>
    ))
  return (
    <div id='katalog'>
        <div className="container katalog">
            <div className="katalog__top">
                <h2>Каталог</h2>
                <NavLink>Весь каталог <FaArrowRightLong/></NavLink>
            </div>
            <div className="katalog__row">
                {KATALOG}
            </div>
        </div>
    </div>
  )
}

export default Katalog