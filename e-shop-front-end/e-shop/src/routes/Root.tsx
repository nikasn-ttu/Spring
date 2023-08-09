import { time } from "console";
import { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ListFormat } from "typescript";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ICartItem } from "../domain/ICartItem";
import { JwtResponse } from "../domain/JwtResponse";

export const AppContext = createContext<{
    isScreenSmall: boolean,
    setIsScreenSmall: ((data: boolean) => void),
    cartList: ICartItem[],
    setCartList: ((data: ICartItem[]) => void),
    jwt: JwtResponse | null,
    setJwt: ((data: JwtResponse | null) => void) | null,
    username: string | null,
    setUsername: ((data: string | null) => void) | null
    userPhoneNumber: string | null,
    setUserPhoneNumber: ((data: string | null) => void) | null,
    userFullname: string | null,
    setUserFullname: ((data: string | null) => void) | null

}>({
    isScreenSmall: false, setIsScreenSmall: () => { }, cartList: [], setCartList: () => { }
    , jwt: null, setJwt: () => { }, username: null, setUsername: null, userPhoneNumber: null, setUserPhoneNumber: null, userFullname: null, setUserFullname: null
});

const Root = () => {

    const [isScreenSmall, setIsScreenSmall] = useState(false);

    const [cartList, setCartList] = useState([] as ICartItem[]);

    const [jwt, setJwt] = useState(null as JwtResponse | null);

    const [username, setUsername] = useState(null as string | null);

    const [userPhoneNumber, setUserPhoneNumber] = useState(null as string | null);

    const [userFullname, setUserFullname] = useState(null as string | null);

    const naigate = useNavigate();


    useEffect(() => {

        if (Number(localStorage.getItem("cartExpired")) < Math.floor(Date.now() / 1000)) {
            localStorage.setItem("cartList", JSON.stringify([]));
        }
        if (localStorage.getItem("cartList") !== null) {
            setCartList(JSON.parse(localStorage.getItem("cartList") as string) as ICartItem[]);
        }
        console.log(localStorage.getItem("lang"));
        naigate(`/home/?lang=${localStorage.getItem("lang") === null ? "en" : localStorage.getItem("lang")}`);
    }, []);

    return (
        <>
            <AppContext.Provider value={{ isScreenSmall, setIsScreenSmall, cartList, setCartList, jwt, setJwt, username, setUsername, userPhoneNumber, setUserPhoneNumber, userFullname, setUserFullname }}>

                <Navbar />

                <div className="wrapper">
                    <div className="container">
                        <main role="main" id="main">
                            <Outlet />
                        </main>
                    </div>
                </div>

                <Footer />
            </AppContext.Provider>
        </>

    );
}

export default Root;