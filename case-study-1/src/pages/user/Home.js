import { Link, Outlet } from "react-router-dom";


export default function Home() {
    return (
        <>
            <header class="container wrapper-header py-3" aria-label="Header container">
                <div class="row pb-2 align-items-center">
                    <div class="col-7 col-sm-4 wrapper-logo text-sm-left">
                        <Link to={'#'} title="Triangle">
                            <img class="logo" src="https://firebasestorage.googleapis.com/v0/b/c05casestudy.appspot.com/o/files%2Flogo-main.webp?alt=media&token=561300bc-d932-44e7-ba04-c0437322542c" alt="Triangle logo" />
                        </Link>
                    </div>
                    <div class="col-5 col-sm-8 d-block d-md-none text-right">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainMenu" aria-controls="navbarMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
                        </button>
                        <a class="navbar-toggler d-sm-inline-block d-md-none" href="https://rainstormstudio.neto.com.au/_mycart?tkn=cart&amp;ts=1720776452769247" aria-label="Shopping cart">
                            <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                            <span class="badge badge-pill badge-secondary" rel="a2c_item_count">0</span>
                        </a>
                    </div>
                    <div class="d-none d-md-block col-12 col-sm-8 col-md-4 col-lg-4">
                        <div class="header-search pt-2 pt-md-0">
                            <form name="productsearch" method="get" action="/" role="search" aria-label="Product search">
                                <input type="hidden" name="rf" value="kw" />
                                    <div class="input-group">
                                        <input class="form-control ajax_search" value="" id="name_search" autocomplete="off" name="kw" type="search" aria-label="Input search" nsearch-init="yes" nsearch-id="0" />
                                            <div class="input-group-append">
                                                <button type="submit" value="Search" class="btn btn-outline-secondary" aria-label="Search site"><i class="fa fa-search" aria-hidden="true"></i></button>
                                            </div>
                                    </div>
                            </form>
                        </div>
                    </div>
                    <div class="d-none d-md-block col-md-4 col-lg-4 text-right">
                        <div id="header-cart" class="btn-group" role="group">
                            <a href="https://rainstormstudio.neto.com.au/_mycart?tkn=cart&amp;ts=1720776452788193" class="btn btn-outline-secondary" id="cartcontentsheader">
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i> <span class="d-none d-lg-inline">Shopping Cart</span> - <span rel="a2c_item_count">0</span> Items
                            </a>
                            <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Shopping cart dropdown">
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-right float-right">
                                <li class="box" id="neto-dropdown">
                                    <div class="body" id="cartcontents"><font class="small">Your shopping cart is empty.
                                        Add items to your cart and they will appear here.</font></div>
                                    <div class="footer"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <nav class="navbar navbar-expand-md navbar-light bg-light mt-0 mt-md-2">
                    <div class="collapse navbar-collapse" id="navbarMainMenu">
                        <form class="d-block d-md-none" name="productsearch" method="get" action="/" role="search" aria-label="Product search">
                            <input type="hidden" name="rf" value="kw" />
                                <div class="input-group">
                                    <input class="form-control ajax_search" value="" id="name_search-xs" autocomplete="off" name="kw" type="search" aria-label="Input search" nsearch-init="yes" nsearch-id="1" />
                                        <div class="input-group-append">
                                            <button type="submit" value="Search" class="btn btn-outline-secondary" aria-label="Search site"><i class="fa fa-search" aria-hidden="true"></i></button>
                                        </div>
                                </div>
                        </form>
                        <ul class="navbar-nav mr-auto" role="navigation" aria-label="Main menu">
                            <li class="nav-item ">
                                <a href="/gift-gadgets/" class="nav-link ">Gift &amp; Gadgets</a>
                            </li><li class="nav-item dropdown ">
                                <a href="/gaming/" class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Gaming</a>
                                <ul class="dropdown-menu">
                                    <li class="dropdown dropdown-hover "> <a href="/gaming/pc-gaming/" class="nuhover dropdown-item">PC Gaming</a>
                                        <ul class="dropdown-menu dropdown-menu-horizontal">
                                            <li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="/gaming/pc-gaming/pc-games/">PC Games</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="/gaming/pc-gaming/gaming-laptops-desktop/">Gaming Laptops &amp; Desktop</a>
                                            </li>
                                        </ul>
                                    </li><li class="dropdown dropdown-hover "> <a href="/gaming/gaming-accessories/" class="nuhover dropdown-item">Gaming Accessories</a>
                                        <ul class="dropdown-menu dropdown-menu-horizontal">
                                            <li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="/gaming/pc-gaming/mice-keyboards/">Mice &amp; Keyboards</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="/gaming/pc-gaming/headsets/">Headsets</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="/gaming/pc-gaming/gaming-chairs/">Gaming Chairs</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="/gaming/pc-gaming/pc-speakers/">PC Speakers</a>
                                            </li>
                                        </ul>
                                    </li><li class="dropdown dropdown-hover "> <a href="" class="nuhover dropdown-item">Nintendo</a>
                                        <ul class="dropdown-menu dropdown-menu-horizontal">
                                            <li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">Nintendo Switch</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">Nintendo 3DS</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">Nintendo Amiibo Figurines</a>
                                            </li>
                                        </ul>
                                    </li><li class="dropdown dropdown-hover "> <a href="" class="nuhover dropdown-item">Play Station 4</a>
                                        <ul class="dropdown-menu dropdown-menu-horizontal">
                                            <li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">PS4 Consoles &amp; Bundles</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">PS4 Games</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">PS4 Controllers</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">PS4 Racing Gear</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">PS4 Headsets</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">PS4 Accessories</a>
                                            </li>
                                        </ul>
                                    </li><li class="dropdown dropdown-hover "> <a href="" class="nuhover dropdown-item">Xbox One</a>
                                        <ul class="dropdown-menu dropdown-menu-horizontal">
                                            <li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">Xbox One Consoles &amp; Bundles</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">Xbox One Games</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">Xbox One Controllers</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">Xbox One Headsets</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">Xbox One Accessories</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li><li class="nav-item dropdown ">
                                <a href="/fitness-wearables/" class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fitness &amp; Wearables</a>
                                <ul class="dropdown-menu">
                                    <li class=""> <a href="/fitness-wearables/fitness-equipment/" class="nuhover dropdown-item">Fitness Equipment</a>
                                    </li><li class=""> <a href="/fitness-wearables/sport-headphones/" class="nuhover dropdown-item">Sport Headphones</a>
                                    </li><li class=""> <a href="" class="nuhover dropdown-item">Fitness Trackers</a>
                                    </li><li class=""> <a href="" class="nuhover dropdown-item">Smart Watches</a>
                                    </li><li class=""> <a href="" class="nuhover dropdown-item">Sport Watches</a>
                                    </li><li class=""> <a href="" class="nuhover dropdown-item">Smart Scales</a>
                                    </li>
                                </ul>
                            </li><li class="nav-item ">
                                <a href="/arts-crafts/" class="nav-link ">Arts &amp; Crafts</a>
                            </li><li class="nav-item media">
                                <a href="/boarding-games-puzzles/" class="nav-link ">Boarding Games &amp; Puzzles</a>
                            </li><li class="nav-item ">
                                <a href="/whats-new/" class="nav-link ">What's New</a>
                            </li><li class="nav-item dropdown ">
                                <a href="" class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tech Toys</a>
                                <ul class="dropdown-menu">
                                    <li class="dropdown dropdown-hover "> <a href="" class="nuhover dropdown-item">Drones</a>
                                        <ul class="dropdown-menu dropdown-menu-horizontal">
                                            <li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">Beginner Drones</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">Mini Drones</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">Camera Drones</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">Drone Accessories</a>
                                            </li>
                                        </ul>
                                    </li><li class="dropdown dropdown-hover "> <a href="" class="nuhover dropdown-item">Robotics</a>
                                        <ul class="dropdown-menu dropdown-menu-horizontal">
                                            <li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">Robots</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">Coding Robots</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">Cars &amp; Racing</a>
                                            </li><li class="">
                                                <a class="dropdown-item pl-5 pl-sm-4" href="">Robot Accessories</a>
                                            </li>
                                        </ul>
                                    </li><li class=""> <a href="" class="nuhover dropdown-item">Virtual Reality (VR)</a>
                                    </li><li class=""> <a href="" class="nuhover dropdown-item">Educational Tech Toys</a>
                                    </li><li class=""> <a href="" class="nuhover dropdown-item">Electric Scooters</a>
                                    </li><li class=""> <a href="" class="nuhover dropdown-item">Electric Skateboards</a>
                                    </li><li class=""> <a href="" class="nuhover dropdown-item">Electric Bikes</a>
                                    </li>
                                </ul>
                            </li><li class="nav-item sale-menu">
                                <a href="/sale-products/" class="nav-link ">On Sale</a>
                            </li><li class="nav-item ">
                                <a href="" class="nav-link ">On Sale 2</a>
                            </li><li class="nav-item ">
                                <a href="" class="nav-link ">On Sale 3</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav navbar-right" role="navigation" aria-label="Accounts menu">
                            <li class="nav-item dropdown">
                                <a href="https://rainstormstudio.neto.com.au/_myacct" role="button" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Account dropdown"><i class="fa fa-user"></i> <span class="visible-lg visible-inline-lg">My Account</span></a>
                                <ul class="dropdown-menu dropdown-menu-right">
                                    <li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/_myacct">Account Home</a></li>
                                    <li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/_myacct#orders">Orders</a></li>
                                    <li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/_myacct#quotes">Quotes</a></li>
                                    <li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/_myacct/payrec">Pay Invoices</a></li>
                                    <li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/_myacct/favourites">Reorder</a></li>
                                    <li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/_myacct/wishlist">Wishlists</a></li>
                                    <li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/_myacct/warranty">Resolution Centre</a></li>
                                    <li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/_myacct/edit_account">Edit My Details</a></li>
                                    <li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/_myacct/edit_address">Edit My Address Book</a></li>
                                    <li class="divider"><div class="dropdown-divider"></div></li>
                                    <li> <a class="dropdown-item" href="https://rainstormstudio.neto.com.au/_myacct/login" title="Login">Login</a> </li>
                                    <li> <a class="dropdown-item" href="https://rainstormstudio.neto.com.au/_myacct/register" title="Register">Register</a> </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
