import React, { memo } from 'react'
import "./wishlist.scss"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
// import Empty from '../../components/empty/Empty'
import CardProducts from '../../components/card-products/CardProducts'
import Empty from '../../components/empty/Empty'


const Wishlist = () => {
    const wishlist = useSelector(state => state.wishlist.value)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <section id="wishlist">
                <div className="wishlist container">
                    <h2 className='wishlist__title'>
                        Избранные товары
                        <span>{wishlist.length}</span>
                    </h2>
                    {
                        wishlist.length ? <div className="wishlist__wrapper">
                            {
                                wishlist.map(el => (
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
                                    />))
                            }
                        </div> : <Empty/>
                    }
                </div>
            </section>
        </>
    )
}

export default memo(Wishlist)