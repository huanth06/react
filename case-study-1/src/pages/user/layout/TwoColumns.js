import React from 'react'
import {Link, Outlet} from 'react-router-dom'
export default function TwoColumns() {
    return (
        <>
            <aside class="col-12 col-md-3" id="left-sidebar">
                <div class="card d-none d-md-block mb-2">
                    <div class="card-header"><h3 class="h4 mb-0">Categories</h3></div>
                    <div class="list-group list-group-flush" role="navigation" aria-label="Category menu"><div class="position-relative border-bottom ">
                        <a class="text-dark list-group-item list-group-item-action" href="https://rainstormstudio.neto.com.au/arts-crafts/">Arts &amp; Crafts</a>
                    </div>
                        <div class="position-relative border-bottom dropdown dropdown-hover">
                            <a class="text-dark list-group-item list-group-item-action" href="https://rainstormstudio.neto.com.au/fitness-wearables/">Fitness &amp; Wearables</a>
                            <ul class="dropdown-menu dropdown-menu-horizontal"><li class="">
                                <a class="dropdown-item" href="https://rainstormstudio.neto.com.au/fitness-wearables/fitness-equipment/">Fitness Equipment</a>
                            </li><li class="">
                                    <a class="dropdown-item" href="https://rainstormstudio.neto.com.au/fitness-wearables/fitness-trackers/">Fitness Trackers</a>
                                </li><li class="">
                                    <a class="dropdown-item" href="https://rainstormstudio.neto.com.au/fitness-wearables/massage-guns/">Massage Guns</a>
                                </li><li class="">
                                    <a class="dropdown-item" href="https://rainstormstudio.neto.com.au/fitness-wearables/smart-scales/">Smart Scales</a>
                                </li><li class="">
                                    <a class="dropdown-item" href="https://rainstormstudio.neto.com.au/fitness-wearables/smart-watches/">Smart Watches</a>
                                </li><li class="">
                                    <a class="dropdown-item" href="https://rainstormstudio.neto.com.au/fitness-wearables/sport-headphones/">Sport Headphones</a>
                                </li></ul>
                        </div><div class="position-relative border-bottom dropdown dropdown-hover">
                            <a class="text-dark list-group-item list-group-item-action" href="https://rainstormstudio.neto.com.au/gaming/">Gaming</a>
                            <ul class="dropdown-menu dropdown-menu-horizontal"><li class="dropdown dropdown-hover">
                                <a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/nintendo/">Nintendo</a>
                                <ul class="dropdown-menu dropdown-menu-horizontal"><li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gift-gadgets/~-901">Gift &amp; Gadgets</a></li><li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/nintendo/nintendo-3ds/">Nintendo 3DS</a></li><li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/nintendo/nintendo-amiibo-figurines/">Nintendo Amiibo Figurines</a></li><li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/nintendo/nintendo-switch/">Nintendo Switch</a></li></ul>
                            </li><li class="dropdown dropdown-hover">
                                    <a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/pc-gaming/">PC Gaming</a>
                                    <ul class="dropdown-menu dropdown-menu-horizontal"><li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/gaming-accessories/">Gaming Accessories</a></li><li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/pc-gaming/gaming-laptops-desktop/">Gaming Laptops &amp; Desktop</a></li><li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/pc-gaming/pc-games/">PC Games</a></li></ul>
                                </li><li class="dropdown dropdown-hover">
                                    <a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/playstation-4/">PlayStation 4</a>
                                    <ul class="dropdown-menu dropdown-menu-horizontal"><li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/playstation-4/ps4-accessories/">PS4 Accessories</a></li><li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/playstation-4/ps4-consoles-bundles/">PS4 Consoles &amp; Bundles</a></li><li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/playstation-4/ps4-controllers/">PS4 Controllers</a></li><li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/playstation-4/ps4-games/">PS4 Games</a></li><li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/playstation-4/ps4-headsets/">PS4 Headsets</a></li><li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/playstation-4/ps4-racing-gear/">PS4 Racing Gear</a></li></ul>
                                </li><li class="dropdown dropdown-hover">
                                    <a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/xbox-one/">Xbox One</a>
                                    <ul class="dropdown-menu dropdown-menu-horizontal"><li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/xbox-one/xbox-one-accessories/">Xbox One Accessories</a></li><li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/xbox-one/xbox-one-consoles-bundles/">Xbox One Consoles &amp; Bundles</a></li><li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/xbox-one/xbox-one-controllers/">Xbox One Controllers</a></li><li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/xbox-one/xbox-one-games/">Xbox One Games</a></li><li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/xbox-one/xbox-one-headsets/">Xbox One Headsets</a></li><li><a class="dropdown-item" href="https://rainstormstudio.neto.com.au/gaming/xbox-one/xbox-one-racing-gear/">Xbox One Racing Gear</a></li></ul>
                                </li></ul>
                        </div><div class="position-relative border-bottom ">
                            <a class="text-dark list-group-item list-group-item-action" href="https://rainstormstudio.neto.com.au/gift-gadgets/">Gift &amp; Gadgets</a>
                        </div><div class="position-relative border-bottom ">
                            <a class="text-dark list-group-item list-group-item-action" href="https://rainstormstudio.neto.com.au/whats-new/">What's New</a>
                        </div></div>
                </div>
                <div class="card d-none d-md-block my-2">
                    <div class="card-header"><h3 class="h4 mb-0">Information</h3></div>
                    <div class="list-group list-group-flush" role="navigation" aria-label="Information menu"><div class="position-relative border-bottom ">
                        <a class="text-dark list-group-item list-group-item-action" href="/about_us">About Us</a>
                    </div><div class="position-relative border-bottom ">
                            <a class="text-dark list-group-item list-group-item-action" href="/returns_policy">Returns Policy</a>
                        </div><div class="position-relative border-bottom ">
                            <a class="text-dark list-group-item list-group-item-action" href="/contact-us">Contact Us</a>
                        </div></div>
                </div>
            </aside>
            <div className="col-12 col-md-9">
                <Outlet></Outlet>
            </div>
        </>
    )
}
