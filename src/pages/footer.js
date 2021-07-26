import * as React from "react"
import '../styles/global.css'
import { Link } from "gatsby"

const Footer = () => {
    return (
        <footer class="flex flex-col justify-between bg-gray-700 text-white text-base text-center">
            <div class="flex flex-row justify-evenly">
                <div class="p-2 flex flex-col justify-center">
                    <p>Privacy Policy & Legal</p>
                    <Link to="./policy">
                        <p class="text-blue-200 duration-100 hover:text-blue-300">Privacy Policy</p>
                    </Link>
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSe-aQQmF8RxCHE5z7mO-UiArPijXlzgiPls1wj2jMVt5h_LOw/viewform?embedded=true">
                        <p class="text-blue-200 duration-100 hover:text-blue-300">Inquiries (secure)</p>
                    </Link>
                </div>
                <div class="p-2 flex flex-col justify-center">
                    <p>Contact Info</p>
                    <Link to="mailto:francois.g.vogel@gmail.com">
                        <p class="text-blue-200 duration-100 hover:text-blue-300">Gmail (francois.g.vogel@gmail.com)</p>
                    </Link>
                    <Link to="https://discord.com">
                        <p class="text-blue-200 duration-100 hover:text-blue-300">Discord (Francois#6352)</p>
                    </Link>
                    <Link to="https://github.com/francoisvogel">
                        <p class="text-blue-200 duration-100 hover:text-blue-300">Github (francoisvogel)</p>
                    </Link>
                    <Link to="https://twitter.com/fgvogel">
                        <p class="text-blue-200 duration-100 hover:text-blue-300">Twitter (fgvogel)</p>
                    </Link>
                </div>
            </div>
            <p class="text-center p-1">Copyright © 2021 Francois Vogel - All rights reserved</p>
        </footer>
    )
}

export default Footer