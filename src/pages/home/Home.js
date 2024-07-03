import React, { useState } from 'react'
import "./home.scss"
import { GoArrowRight } from "react-icons/go";
import HeroBanner from '../../components/hero-banner/HeroBanner'
import Katalog from '../../components/katalog/Katalog'
import Norlight from '../../components/norlight/Norlight'
import Brands from '../../components/brands/Brands'
import Blogcard from '../../components/blogcard/Blogcard'
import { NavLink } from 'react-router-dom'
import Card from '../../components/card/Card';
import { useGetProductQuery } from '../../context/productApi'


const Home = () => {
      const [productLimit, setProductLimit] = useState(8)
    const { data, error, isLoading } = useGetProductQuery()
  return (
    <div>
        <HeroBanner/>
        <Katalog/>
        <Norlight/>
        <Card
                data={data?.slice(0, productLimit)}
                setProductLimit={setProductLimit}
            />
        <Brands/>
        <div className="container">
          <div className='blog__header'>
            <h3>Блог</h3>
            <NavLink to={"/blog"}>
              Перейти в блог
              <GoArrowRight />
            </NavLink>
          </div>
            <Blogcard/>
        </div>
    </div>
  )
}

export default Home