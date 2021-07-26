import * as React from "react"
import '../styles/global.css'
import Header from "./header"
import Footer from "./footer"
import { Link } from "gatsby"

const IndexPage = () => {
    return (
        <main class="min-h-screen flex flex-col justify-between">
            <div>
                <Header></Header>
                <div class="fixed -top-24 shadow-2xl z-40 w-full">
                    <div class="m-10 h-5 z-40 bg-red-300"></div>
                </div>
                <div class="sticky top-0 h-1 z-40 bg-blue-300">
                    <div class="h-full bg-blue-500 transition-all ease-out">
                    </div>
                </div>
                <div class="flex flex-col items-center w-full h">
                    <p class="mt-10 text-5xl sm:text-7xl text-center">Hi, I'm Francois Vogel</p>
                    <p class="max-w-md mt-20 sm:text-3xl text-xl text-center">I'm a student at Lycée Louis-le-Grand in Paris. I love programming ever since I started coding. Also, I like to play some Jazz and I'm a hobbyist drone pilot.</p>
                    <Link to="/about">
                        <p class="mt-16 p-2 text-3xl ring-4 ring-blue-200 rounded text-white bg-blue-500 duration-500 hover:bg-blue-400">Read more</p>
                    </Link>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}

export default IndexPage