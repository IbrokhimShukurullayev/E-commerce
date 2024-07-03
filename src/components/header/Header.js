import React , {useState , useEffect , memo} from 'react'
import "./header.scss"
import { NavLink } from 'react-router-dom';

import { HiOutlineMenuAlt1  } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { TbAntennaBars5 } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";

import logo from "../../assets/images/logo.png"
import { useSelector } from 'react-redux';

const Header = () => {

    const [isShirnk, setIsShirnk] = useState(false);
    const wishlist = useSelector(state => state.wishlist.value)

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsShirnk(true);
        } else {
            setIsShirnk(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <header id='header' className={isShirnk ? 'header navbar-shirnk' : 'header'}>
        <nav className="container nav">
            <div className="nav__top">
                <ul className="nav__list">
                    <li className="nav__item"><NavLink to={"/about"} className="nav__link">О компании</NavLink></li>
                    <li className="nav__item"><NavLink to={"/payment"} className="nav__link">Доставка и оплата</NavLink></li>
                    <li className="nav__item"><NavLink to={"/return"} className="nav__link">Возврат</NavLink></li>
                    <li className="nav__item"><NavLink to={"/garants"} className="nav__link">Гарантии</NavLink></li>
                    <li className="nav__item"><NavLink to={"/contact"} className="nav__link">Контакты</NavLink></li>
                    <li className="nav__item"><NavLink to={"/blog"} className="nav__link">Блог</NavLink></li>
                </ul>
                <div className="nav__top__phone">
                    <a href="tel: 8 (800) 890-46-56" target='_blank'>8 (800) 890-46-56</a>
                    <p>Заказать звонок</p>
                </div>
            </div>
            <div className="nav__bottom">
                <NavLink to={"/"} className="nav__logo">
                    <img src={logo} alt="" />
                </NavLink>
                <button className='nav__button'>
                    <HiOutlineMenuAlt1/>
                    Каталог
                </button>
                <div className="nav__search">
                    <input type="text" placeholder='Поиск по товарам' />
                    <IoSearch/>
                </div>
                <div className="nav__end">
                    <NavLink to={"/wishlist"} className="nav__heart">
                        <FaRegHeart/>
                        <p>Избранное</p>
                        <span>{wishlist.length}</span>
                    </NavLink>
                    <div className="nav__compare">
                        <TbAntennaBars5/>
                        <p>Сравнение</p>
                    </div>
                    <NavLink to={"/cart"} className="nav__cart">
                        <FiShoppingCart/>
                        <p>Корзина</p>
                        <span>0</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default memo(Header)