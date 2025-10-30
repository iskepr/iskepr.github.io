"use client";
import Link from "next/link";
import clientOnly from "client-only";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Loader from "@/components/loader";

export default function NotFound() {
    return (
        <>
            <Loader titles={["الصفحة غير موجودة"]}/>

            <Header />

            <div className="notfound">
                <div className="nums">
                    <h1 style={{ zIndex: 5 }}>4</h1>
                    <h1>0</h1>
                    <h1 style={{ zIndex: 5 }}>4</h1>
                </div>
                <Link className="mainbut" href="/">
                    ارجع
                </Link>
            </div>

            <div className="chape chape1"></div>
            <div className="chape chape2"></div>

            <Footer />

            <style jsx>{`
                @font-face {
                    font-family: "IBM";
                    src: url("/assets/Fonts/ibm.ttf");
                }

                @font-face {
                    font-family: "لاكسر";
                    src: url("/assets/Fonts/لاكسر.otf");
                }

                @font-face {
                    font-family: "زعتر";
                    src: url("/assets/Fonts/زعتر.otf");
                }

                a {
                    color: var(--tx-color);
                    text-decoration: none;
                    display: flex;
                    justify-content: center;
                }

                button {
                    background: none;
                    border: none;
                    outline: none;
                    color: var(--tx-color);
                    font-family: IBM;
                }

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    transition: 0.5s;
                }

                :root {
                    --bg-color: #111;
                    --tx-color: #fff;
                    --primary-color: green;
                    --secondary-color: #000;
                }

                .mainbut {
                    border: solid 1px var(--primary-color);
                    border-radius: 20px;
                    padding: 10px 120px;
                    font-size: 30px;
                    text-align: center;
                }

                .mainbut:hover {
                    background-color: var(--primary-color);
                }

                body {
                    height: 100vh;
                    opacity: 0.8;
                    background-image: radial-gradient(
                            circle at center center,
                            var(--primary-color),
                            #e5e5f7
                        ),
                        repeating-radial-gradient(
                            circle at center center,
                            #444cf7,
                            #444cf7,
                            10px,
                            transparent 20px,
                            transparent 10px
                        );
                    background-blend-mode: multiply;
                    transition: 0.5s;
                    background-color: var(--bg-color);
                    color: var(--tx-color);
                    overflow: hidden;
                    padding: 0 0 30px 0;
                }

                .notfound {
                    font-family: "زعتر";
                    font-size: 100px;
                    height: 75%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-evenly;
                }

                .notfound .nums {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .chape {
                    width: 150px;
                    height: 150px;
                    position: absolute;
                    backdrop-filter: blur(20px);
                    border: solid 1px var(--primary-color);
                    z-index: 3;
                    background-color: #00000050;
                    border-left: none;
                    border-right: none;
                }

                .chape1 {
                    border-radius: 100px 50px 30px 80px;
                    animation: chape1 35s infinite alternate ease-in-out;
                }

                .chape2 {
                    border-top: none;
                    border-radius: 300px 500px 300px 100px;
                    animation: chape2 30s infinite alternate ease-in-out;
                }

                @keyframes chape1 {
                    0% {
                        top: 100%;
                        left: 100%;
                        transform: rotate(0deg);
                    }
                    25% {
                        top: 50%;
                        left: 80%;
                        transform: rotate(90deg);
                    }
                    50% {
                        top: 70%;
                        left: 30%;
                        transform: rotate(180deg);
                    }
                    70% {
                        top: 0%;
                        left: 90%;
                        transform: rotate(180deg) scale(1.1);
                    }
                    75% {
                        top: 30%;
                        left: 60%;
                        transform: rotate(270deg);
                    }
                    100% {
                        top: 0%;
                        left: 0%;
                        transform: rotate(360deg);
                    }
                }

                @keyframes chape2 {
                    0% {
                        top: 0%;
                        left: 0%;
                        transform: rotate(0deg) scale(1);
                    }
                    20% {
                        top: 80%;
                        left: 20%;
                        transform: rotate(45deg) scale(1.2);
                    }
                    40% {
                        top: 40%;
                        left: 0%;
                        transform: rotate(90deg) scale(0.8);
                    }
                    60% {
                        top: 90%;
                        left: 50%;
                        transform: rotate(180deg) scale(1.1);
                    }
                    80% {
                        top: 20%;
                        left: 80%;
                        transform: rotate(270deg) scale(0.9);
                    }
                    100% {
                        top: 0%;
                        left: 10%;
                        transform: rotate(360deg) scale(1);
                    }
                }

                footer {
                    margin: 0 100px;
                }

                footer .top {
                    text-align: right;
                    margin-top: 50px;
                    display: flex;
                    justify-content: space-between;
                }

                footer .email {
                    display: flex;
                    margin: auto;
                    cursor: pointer;
                }

                footer .links {
                    display: flex;
                }

                footer span {
                    color: var(--primary-color);
                }

                @media (max-width: 500px) {
                    footer .top {
                        flex-wrap: wrap;
                        justify-content: space-around;
                    }

                    footer .email {
                        justify-content: center;
                    }
                }

                header {
                    font-family: "زعتر";
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    z-index: 10;
                }

                header .ul {
                    display: flex;
                    list-style: none;
                    justify-content: space-between;
                    align-items: center;
                    width: 90%;
                    font-size: 20px;
                }

                header .ul li {
                    margin: 5px;
                    transition: 0.5s;
                }

                header .ul li a:hover {
                    margin-top: 7px;
                    color: var(--primary-color);
                }

                header .ul .buts {
                    display: flex;
                    margin-right: -20px;
                }

                header .ul .logo {
                    margin-left: 20px;
                    font-size: 30px;
                    color: var(--primary-color);
                }
            `}</style>
        </>
    );
}
