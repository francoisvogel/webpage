import * as React from "react"
import '../styles/global.css'
import Lnk from "./lnk"

const Footer = () => {
    return (
        <footer class="flex flex-col justify-between bg-gray-700 text-white text-base text-center">
            <div class="flex flex-col lg:flex-row justify-evenly">
                <div class="p-2 flex flex-col justify-center">
                    <p>Privacy Policy & Legal</p>
                    <Lnk to="./policy" text="Privacy Policy" />
                    <Lnk to="https://docs.google.com/forms/d/e/1FAIpQLSe-aQQmF8RxCHE5z7mO-UiArPijXlzgiPls1wj2jMVt5h_LOw/viewform?embedded=true" text="Inquiries (secure)" />
                </div>
                <div class="p-2 flex flex-col justify-center">
                    <p>Contact Info</p>
                    <Lnk to="https://mailto:francois.g.vogel@gmail.com" text="Gmail (francois.g.vogel@gmail.com)" />
                    <Lnk to="https://discord.com" text="Discord Francois#6352" />
                    <Lnk to="https://github.com/francoisvogel" text="Github (francoisvogel)" />
                    <Lnk to="https://twitter.com/fgvogel" text="Twitter (fgvogel)" />
                </div>
                <div class="p-2 flex flex-col justify-center">
                    <p>Apps & Projects</p>
                    <Lnk to="https://francoisvogel.io" text="My personal webpage (built with React, Gatsby and Tailwind CSS)" />
                    <Lnk to="https://asciifinder.francoisvogel.io" text="ASCII Finder (helps find, search, and convert ASCII characters)" />
                </div>
            </div>
            <p class="text-center p-1">Copyright © 2021 Francois Vogel - All rights reserved</p>
        </footer>
    )
}

export default Footer