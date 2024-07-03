import React from 'react'
import "./norlight.scss"

import { GoArrowRight } from "react-icons/go";

import {  NavLink } from 'react-router-dom'
import { NORLIGHT_DATA } from '../../static';

const Norlight = () => {
    return (
        <>
            <section id="norlight">
                <div className="container norlight">
                    <div className="norlight__header">
                        <h3 className="norlight__title">Почему NORNLIGHT?</h3>
                        <NavLink className='norlight__header__link'>
                            О компании
                            <GoArrowRight />
                        </NavLink>
                    </div>
                    <div className="norlight__wrapper">
                        {
                            NORLIGHT_DATA.map(el => (
                                <div key={el.id} className="norlight__box">
                                    <div className="norlight__box__frame">
                                        <img src={el.image} alt="" />
                                    </div>
                                    <h4 className="norlight__box__title">{el.title}</h4>
                                    <p className="norlight__box__description">{el.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Norlight