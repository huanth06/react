import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function Header() {
    let [qtyCart, setQtyCart] = useState();
    let [cates, setCates] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/carts").then((res) => {
            let data = res.data;
            let products = [];
            data.map(item => {
                products = [...products, ...item.products]
            });
            let newQty = 0;
            products.reduce((accument, currentValue) => {
                newQty = accument + currentValue.quantity;
                return newQty;
            }, 0)
            setQtyCart(newQty);
        });
    }, []);
    useEffect(() => {
        axios.get("http://localhost:3000/categories").then((res) => {
            setCates(res.data);
        });
    }, []);
    return (
        <>
            <header className="wrapper-header" aria-label="Header container">
                <div className="container py-4">
                    <div className="row align-items-center">
                        <div className="col-7 col-sm-4 wrapper-logo text-sm-left">
                            <Link to={'/'} title="OCAM">
                                <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/case-study-1%2Flogo-main.webp?alt=media&token=056c99fb-88dc-41c6-8b77-2dc0fc204b11" alt="Triangle logo" />
                            </Link>
                        </div>
                        <div className="col-5 col-sm-8 d-block d-md-none text-right">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainMenu" aria-controls="navbarMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa fa-bars fa-lg" aria-hidden="true"></i>
                            </button>
                            <a className="navbar-toggler d-sm-inline-block d-md-none" href="https://rainstormstudio.neto.com.au/_mycart?tkn=cart&amp;ts=1720776452769247" aria-label="Shopping cart">
                                <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                                <span className="badge badge-pill badge-secondary" rel="a2c_item_count">{qtyCart}</span>
                            </a>
                        </div>
                        <div className="d-none d-md-block col-12 col-sm-8 col-md-4 col-lg-4">
                            <div className="header-search pt-2 pt-md-0">
                                <form name="productsearch" method="get" action="/" role="search" aria-label="Product search">
                                    <input type="hidden" name="rf" value="kw" />
                                    <div className="input-group">
                                        <input className="form-control ajax_search" value="" id="name_search" autocomplete="off" name="kw" type="search" aria-label="Input search" nsearch-init="yes" nsearch-id="0" />
                                        <div className="input-group-append">
                                            <button type="submit" value="Search" className="btn btn-outline-secondary" aria-label="Search site"><i className="fa fa-search" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="d-none d-md-block col-md-4 col-lg-4 text-right">
                            <div id="header-cart" className="btn-group" role="group">
                                <Link to="#" className="btn btn-outline-secondary" id="cartcontentsheader">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i> <span className="d-none d-lg-inline">Shopping Cart</span> - <span rel="a2c_item_count">{qtyCart}</span> Items
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-md navbar-light bg-light mt-0 mb-4 pt-sm-3 pt-md-2">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarMainMenu">
                            <form className="d-block d-md-none" name="productsearch" method="get" action="/" role="search" aria-label="Product search">
                                <input type="hidden" name="rf" value="kw" />
                                <div className="input-group">
                                    <input className="form-control ajax_search" value="" id="name_search-xs" autocomplete="off" name="kw" type="search" aria-label="Input search" nsearch-init="yes" nsearch-id="1" />
                                    <div className="input-group-append">
                                        <button type="submit" value="Search" className="btn btn-outline-secondary" aria-label="Search site"><i className="fa fa-search" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </form>
                            <ul className="navbar-nav mr-auto">
                                {cates.map(category => (
                                    <li className="nav-item ">
                                        <Link to="#" className="nav-link ">{category.name}</Link>
                                    </li>
                                ))}
                            </ul>
                            <ul className="navbar-nav navbar-right" role="navigation" aria-label="Accounts menu">
                                <li className="nav-item dropdown">
                                    <Link to="/_myacct" className="nav-link" ><i className="fa fa-user"></i> <span className="visible-lg visible-inline-lg">My Account</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
