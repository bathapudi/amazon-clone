import React from 'react'
import style from './Header.module.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../../context/ShoppingCart'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

function Header() {
    const [{ basket, user }] = useStateValue();

    const navigate = useNavigate();
    const signOutUser = () => {
        if (user.islogged) {
            const auth = getAuth();
            signOut(auth)
                .then(() => {
                    navigate('/login')
                }).catch((error) => {
                    // An error happened.
                });

        }
    }
    return (
        <div className={style.header}>
            <Link to="/">
                <img className={style.header_logo} src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
            </Link>
            <div className={style.header_search}>
                <input type="text" className={style.header_searchInput}></input>
                <SearchIcon className={style.header_searchIcon}></SearchIcon>
            </div>
            <div className={style.header_nav}>
                <Link to='/login'>
                    <div className={style.header_option}>
                        <span className={style.header_optionLineOne}>Hello, {user.islogged ? user.email : "Guest"}</span>
                        <span className={style.header_optionLineTwo} onClick={() => signOutUser()}> {user.islogged ? "Sign out" : "SignIn"}</span>
                    </div>
                </Link>


                <div className={style.header_option}>
                    <span className={style.header_optionLineOne}>Return</span>
                    <span className={style.header_optionLineTwo}>Orders</span>
                </div>
                <div className={style.header_option}>
                    <span className={style.header_optionLineOne}>Your</span>
                    <span className={style.header_optionLineTwo}>Prime</span>
                </div>

                <Link to="/checkout">
                    <div className={style.header_optionBasket}>
                        <ShoppingCartIcon></ShoppingCartIcon>
                        <span className={style.header_optionLineTwo}>{basket?.length}</span>
                    </div>
                </Link>


            </div>

        </div>
    )
}

export default Header
