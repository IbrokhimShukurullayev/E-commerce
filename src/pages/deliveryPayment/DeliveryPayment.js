import React, { useEffect } from 'react'
import "./deliveryPayment.scss"
import Breadcrumb from '../../components/breadCrumb/BreadCrumb'

const DeliveryPayment = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <section id="payment">
        <div className="container payment">
            <Breadcrumb />
            <div className="payment__wrapper">
                <h2 className="payment__title">
                    Доставка и оплата
                </h2>
                <div className="payment__content">
                    <h3>Доставка</h3>
                    <p>Мы осуществляем доставку со склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, а так же по всем странам СНГ. <span>Сроки доставки: 4—6 недель</span></p>
                    <h3>Курьерская доставка</h3>
                    <p>БЕСПЛАТНО доставим в приделах МКАД любой заказ <span>от 5 000 ₽</span>.Заказы свыше <span>30 000 ₽ </span> имеют бесплатную доставку, включительно 15 км от МКАД</p>
                    <h3>Самовывоз</h3>
                    <p>Любой заказ можно забрать самостоятельно по адресу:г. Москва, Дмитровское шоссе д.100с2</p>
                </div>
            </div>
        </div>
        <div className="payment__map container__big">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.073069253112!2d69.20123767587322!3d41.285514171313025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sen!2s!4v1704806152799!5m2!1sen!2s"
                allowFullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </section>
  )
}

export default DeliveryPayment