import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import { useGlobalData } from '../../context/GlobalContext';
import { Button } from '@material-ui/core';
import { auth } from '../firebase';
import { selectBasketTotalItem } from '../../context/reducer';
import Sidebar from 'react-sidebar';


const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [{ basket, loggedinUser }] = useGlobalData();
    const [input, setInput] = useState('');
    const history = useHistory();
    
    const signout = () => {
        auth.signOut();
        history.push('/')
    }
    const onSetSidebarOpen = (open) => {
        setSidebarOpen(open)
    }

    return (
        <>
            <div className="header">
                <div className="header__sidebar">
                    <Sidebar
                        sidebar={
                            <>
                                <h3 className="header__sidebar-title">Shop by Category</h3>
                                <Link to="/basket" className="header__sidebar-link"><p>Prime Video</p></Link>
                                <Link to="/" className="header__sidebar-link"> <p>Amazon Music</p> </Link>
                                <Link to="/" className="header__sidebar-link"><p>Apps</p></Link>
                                <Link to="/" className="header__sidebar-link"><p>Fire TV</p></Link>
                                <hr className="header__sidebar-divider" />
                                <h3 className="header__sidebar-title">Technology</h3>
                                <Link to="/" className="header__sidebar-link"><p>Fire Tables</p></Link>
                                <Link to="/" className="header__sidebar-link"><p>Audible Audiobooks</p></Link>
                                <Link to="/" className="header__sidebar-link"><p>Films,Tv,Games</p></Link>
                            </>
                        }
                        open={sidebarOpen}
                        onSetOpen={onSetSidebarOpen}
                        styles={{
                            sidebar: {
                                background: "rgba(0,0,10,.9)",
                                color: '#333',
                                padding: '50px',
                                position: 'fixed',
                                zIndex: '99',
                            },
                            overlay: { zIndex: '2' },
                            dragHandle: { zIndex: '2' }
                        }}
                    >
                    </Sidebar>
                </div>

                <div className="header__left">
                    <Button className="header__burger-btn" onClick={() => onSetSidebarOpen(true)}>
                        <MenuIcon />
                    </Button>

                    <Link to="/" className="header__link">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" class="header__left-logo" alt="logo" />
                    </Link>
                </div>
                <form className="header__search" >
                    <select name="list" id=""></select>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="search" />
                    <SearchIcon />
                </form>

                <div className="header__right">
                    <Link to="/" className="header__link">
                        <div className="header__right-link">
                            <p className="header__right-linkGreeting">Hello, <span className="header__right-linkUser">{loggedinUser?.displayName ? loggedinUser.displayName : loggedinUser?.email ? loggedinUser.email : 'visitor'}</span></p>
                            <p>Account</p>
                        </div>
                    </Link>
                    <Link to="/" className="header__link">
                        <div className="header__right-link">
                            <p>Returns</p>
                            <p>  Orders</p>
                        </div>
                    </Link>
                    <Link to="/" className="header__link">
                        <div className="header__right-link">
                            <p>Try</p>
                            <p>Prime</p>
                        </div>
                    </Link>
                    <Link to="/basket" className="header__link">
                        <div className="header__right-basket">
                            <div className="header__right-basketFlexCol">
                                <p className="header__right-basketQty">{selectBasketTotalItem(basket)}</p>
                                <ShoppingCartOutlinedIcon />
                            </div>
                            <p> Basket </p>
                        </div>
                    </Link>
                    <Link to={!(loggedinUser?.displayName) && '/signin'} className="header__link">
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            className="header__right-signout"
                            onClick={signout} >{loggedinUser?.displayName ? 'sign out' : 'sign in'}</Button>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Header 
