import React , {useState , useEffect , memo, useRef} from 'react'
import "./header.scss"
import { NavLink, useLocation } from 'react-router-dom';

import { HiOutlineMenuAlt1  } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { TbAntennaBars5 } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";

import logo from "../../assets/images/logo.png"
import { useSelector } from 'react-redux';
import { useGetProductQuery } from '../../context/productApi';

const Header = () => {
    const { data } = useGetProductQuery()
    const [isShirnk, setIsShirnk] = useState(false);
    const wishlist = useSelector(state => state.wishlist.value)
    const cart = useSelector(state => state.cart.value)

    const [showSearch, setShowSearch] = useState(false)
    const inputRef = useRef(null);
    const [searchValue, setSearchValue] = useState("")

    const handleSearchClick = () => {
        setShowSearch(true);
        inputRef.current.focus();
    };


    let filteredData = data?.filter(el => el.title.toLowerCase().includes(searchValue.toLowerCase().trim()))

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

    let { pathname } = useLocation();
    if (pathname.includes("/admin")) {
        return <></>;
    }
  return (
    <header id='header' className={isShirnk ? 'header navbar-shirnk' : 'header'}>
        <nav className={`nav container ${showSearch ? "hide__nav" : ""}`}>
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
                    <input 
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                     type="text" placeholder='Поиск по товарам' />
                    <IoSearch/>
                    {
                        searchValue ? filteredData?.length ?
                            <div className="nav__search__content__box">
                                {
                                    searchValue.trim() ? filteredData?.map(el => (
                                        <NavLink
                                            onClick={() => setSearchValue("")}
                                            key={el.id}
                                            to={`/single-product/${el.id}`}
                                            className="nav__search__item"
                                        >
                                            <p>{el.title}</p>
                                        </NavLink>
                                    )) : <></>
                                }
                            </div> : <div className='nav__search__content__box search__nothing__found'>Afsuski hech narsa topilmadi</div> : <></>
                    }
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
                        <span>{cart.length}</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default memo(Header)