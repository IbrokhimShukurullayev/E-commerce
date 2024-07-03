import React from 'react'
import "./card.scss"
import { GoArrowRight } from "react-icons/go";

import { Link } from 'react-router-dom'
import { useGetCategoryQuery } from '../../context/categoryApi';
import { useState } from 'react';
import CardProducts from '../card-products/CardProducts';

const Card = ({ data, setProductLimit }) => {
    const [categoryValue, setCategoryValue] = useState("")
    const { data: dataGetCategory } = useGetCategoryQuery()

    const filteredProduct = categoryValue
        ? data?.filter(el => el.category === categoryValue)
        : data;
  return (
    <>
        <section id="products">
            <div className="container products">
                <div className="products__header">
                    <h3 className="products__title">Популярные товары</h3>
                    <Link className='products__header__link'>
                        Все товары
                        <GoArrowRight />
                    </Link>
                </div>
                <ul className="products__categories">
                    <li className="products__categories__item">
                        <button onClick={() => setCategoryValue("")} className="products__categories__btn">
                            All
                        </button>
                    </li>
                    {
                        dataGetCategory?.map(el => (
                            <li key={el.id} className="products__categories__item">
                                <button onClick={() => setCategoryValue(el.title)} className="products__categories__btn">
                                    {el.title}
                                </button>
                            </li>
                        ))
                    }
                </ul>
                <select
                    value={categoryValue}
                    onChange={(e) => setCategoryValue(e.target.value)}
                    name="" id="" className="products__category__select">
                    <option value="">All</option>
                    {
                        dataGetCategory?.map(el => (
                            <option key={el.id} value={el.title}>
                                {el.title}
                            </option>
                        ))
                    }
                </select>
                <div className={`products__wrapper ${filteredProduct?.length ? "" : "simple__products__wrapper"}`}>
                    {
                        filteredProduct?.length ? filteredProduct?.map(el => (
                            <CardProducts
                                key={el.id}
                                el={el}
                                id={el.id}
                                title={el.title}
                                description={el.description}
                                price={el.price}
                                oldPrice={el.oldPrice}
                                image={el.image}
                                category={el.category}
                            />
                        )) :
                            <div className="no__category">
                                <p>Bunday Categoriyalik Maxsulot Mavjud emas</p>
                            </div>
                    }
                </div>
                {
                    filteredProduct?.length ? <button
                        onClick={() => setProductLimit(p => p + 4)}
                        className="products__see__more__btn">
                        See More
                    </button> : ""
                }
            </div>
        </section >
    </>
  )
}

export default Card