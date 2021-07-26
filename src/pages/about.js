import * as React from "react"
import '../styles/global.css'
import Header from "./header"
import DarkTrace from "./darkTrace"
import ScrollProgressBar from "./scrollProgressBar"
import Footer from "./footer"
import Lnk from "./lnk"

const About = () => {
    return (
        <main class="min-h-screen flex flex-col justify-between">
            <div>
                <Header directory="../"/>
                <DarkTrace></DarkTrace>
                <ScrollProgressBar></ScrollProgressBar>
                <div class="flex flex-col items-center">
                    <p class="mt-10 text-5xl sm:text-7xl text-center">About Me</p>
                    <p class="max-w-lg mt-10 sm:text-3xl text-xl text-center">I'm a student at Lycée Louis-le-Grand in Paris. I love programming ever since I started coding. Also, I like to play some Jazz and I'm a hobbyist drone pilot.</p>
                    <p class="mt-10 text-2xl sm:text-5xl text-center">Competitive Programming</p>
                    <p class="mt-10 text-base sm:text-xl text-center sm:w-2/3">I love the feeling that I get upon submitting problems I've been working on for hours and seeing the AC verdict. I also have a <Lnk to="https://github.com/francoisvogel/cp" text="Github Repo"/> where I post resources on CP, though for now it's mostly empty (I'm in the process of migrating resources to it). I'm a <Lnk to="https://codeforces.com/profile/fvogel" text="Candidate Master" /> on Codeforces and am highly rated on <Lnk to="http://www.france-ioi.org/algo/rankingMain.php#:~:text=621-,4,571,-5" text="France-IOI"/>. Also, I regularly write posts on CP in my blog.</p>
                    <p class="mt-10 text-2xl sm:text-5xl text-center">Drone Flying</p>
                    <p class="mb-10 mt-10 text-base sm:text-xl text-center sm:w-2/3">I'm a DJI drone pilot, skilled in cinematography and terrain mapping, and a hobbyist flyer. Flyings my drone with Goggles gives me immersive sensations that I feel nowhere else, it's absolutely unique! Please contact me if you need drone services.</p>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}

export default About