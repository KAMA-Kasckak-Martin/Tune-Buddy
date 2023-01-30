import React from "react";
import car from "./images/car.jpeg"
import {User} from "../models/User";
/*export type ProfileProps={
    user: User
}*/

export default function ProfilePage(){
    return(
        <div>
            <h1>Profile</h1>
            <img src={car}/>
            <p>I'm baby bruh copper mug artisan salvia you probably haven't heard
                of them cornhole flexitarian tacos heirloom subway tile meditation
                mixtape. Enamel pin meh coloring book la croix sus fam JOMO. Hammock unicorn
                waistcoat hell of fanny pack, flannel listicle. Umami 8-bit hexagon bodega
                boys flexitarian yuccie lyft letterpress trust fund. </p>
            <ul>
                <li>
                    <a href={"https://www.kfzteile24.de/artikeldetails?search=1330-100999&utm_medium=PV&utm_source=getprice&utm_campaign=CPC&gclid=CjwKCAiAwomeBhBWEiwAM43YIFSZlDZSb-fZtci9UDVnLr2-OhW-BtCCvYrWpYTN0l4kKMZVbSl9DhoC_EQQAvD_BwE"}>felge</a>
                </li>
                <li>
                    <a href={"https://www.kfzteile24.de/artikeldetails?search=1330-100999&utm_medium=PV&utm_source=getprice&utm_campaign=CPC&gclid=CjwKCAiAwomeBhBWEiwAM43YIFSZlDZSb-fZtci9UDVnLr2-OhW-BtCCvYrWpYTN0l4kKMZVbSl9DhoC_EQQAvD_BwE"}>felge</a>
                </li>
                <li>
                    <a href={"https://www.kfzteile24.de/artikeldetails?search=1330-100999&utm_medium=PV&utm_source=getprice&utm_campaign=CPC&gclid=CjwKCAiAwomeBhBWEiwAM43YIFSZlDZSb-fZtci9UDVnLr2-OhW-BtCCvYrWpYTN0l4kKMZVbSl9DhoC_EQQAvD_BwE"}>felge</a>
                </li>
            </ul>
           {/* <p>Profile page</p>
            <h2>{props.user.name}</h2>
            <img src={props.user.car.img}/>
            <p>{props.user.car.description}</p>
            <div>
                <li>{props.user.car.tuningParts.name}</li>
                <li>{props.user.car.tuningParts.shopUrl}</li>*/}

        </div>
    )
}