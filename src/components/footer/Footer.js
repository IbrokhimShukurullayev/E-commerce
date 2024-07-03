import React from 'react'
import "./footer.scss"

import logo from "../../assets/images/logo.png"
import visa from "../../assets/images/visa.png"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer">
        <ul className="footer__list-1">
          <li><img src={logo} alt="" /></li>
          <li><h2>8 (800) 890-46-56</h2></li>
          <li><img src={visa} alt="" /></li>
          <li><p>Политика конфидециальности</p></li>
          <li><p>Политика конфидециальности</p></li>
        </ul>
        <ul className="footer__list-2">
          <li><h2>Покупателям</h2></li>
          <li><p>О компании</p></li>
          <li><p>Доставка и оплата</p></li>
          <li><p>Возврат</p></li>
          <li><p>Гарантии</p></li>
          <li><p>Контакты</p></li>
          <li><p>Блог</p></li>
        </ul>
        <ul className="footer__list-2">
          <li><h2 >Товары</h2></li>
          <li><p>Люстры</p></li>
          <li><p>Светильники</p></li>
          <li><p>Бра</p></li>
          <li><p>Торшеры</p></li>
          <li><p>Комплектуюшие</p></li>
          <li><p>Настольные лампы</p></li>
        </ul>
        <ul className="footer__list-2">
          <li><h2 className='footer__list__text'>Светодиодные</h2></li>
          <li><p>Споты</p></li>
          <li><p>Трековые светильники</p></li>
          <li><p>Уличные светильники</p></li>
          <li><p>Технические светильники</p></li>
          <li><p>Светодиодные ленты</p></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer