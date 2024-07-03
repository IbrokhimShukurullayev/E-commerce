import React, { useEffect } from 'react'
import "./garant.scss"
import Breadcrumb from '../../components/breadCrumb/BreadCrumb'

const Garant = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section id="garant">
            <div className="garant container">
                <Breadcrumb />
                <div className="garant__wrapper">
                    <h2 className="garant__title">Гарантии</h2>
                    <div className="garant__content">
                        <h4>Обмен и возврат по желанию покупателя</h4>
                        <p>Все товары в магазине «NornLight» имеют гарантию. Она заявляется производителем и имеет определенный срок действия на различные группы товаров. Если ваше изделие вышло из строя в течение гарантийного срока вы можете обратиться к нам и получить бесплатный ремонт. Для этого нужно:</p>
                        <ul>
                            <li>Предоставить чек, накладную или сообщить почту или номер телефона, указанные при оформлении заказа.</li>
                            <li>Привезти товар к нам на склад или отправить его транспортной компанией.</li>
                            <li>После товар отправляется на экспертизу и ремонт. Если ремонт невозможен, мы обменяем изделие на аналогичное либо вернем деньги за покупку.</li>
                        </ul>
                        <p>Обращаем внимание, что «А-Свет» не является сервисным центром, а выполняет роль посредника между клиентом и поставщиком. Поэтому сроки проведения ремонта могут отличаться для товаров различных брендов.</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Garant