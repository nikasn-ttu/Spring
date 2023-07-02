import { time } from "console";
import { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ListFormat } from "typescript";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ICartItem } from "../Domain/ICartItem";

export const AppContext = createContext<{
    isScreenSmall: boolean,
    setIsScreenSmall: ((data: boolean) => void),
    cartList: ICartItem[],
    setCartList: ((data: ICartItem[]) => void),
    
}>({ isScreenSmall: false, setIsScreenSmall: () => { }, cartList: [], setCartList: () => { }});

const Root = () => {

    const[isScreenSmall, setIsScreenSmall] = useState(false);

    const[cartList, setCartList] = useState([] as ICartItem[]);

    const naigate = useNavigate();


    useEffect(() => {
        
        if(Number(localStorage.getItem("cartExpired")) < Math.floor(Date.now() / 1000)){
            localStorage.setItem("cartList", JSON.stringify([]));
        }
        if(localStorage.getItem("cartList") !== null){
            setCartList(JSON.parse(localStorage.getItem("cartList") as string) as ICartItem[]);
        }
        console.log(localStorage.getItem("lang"));
        naigate(`/products/?lang=${localStorage.getItem("lang") === null ? "en" : localStorage.getItem("lang")}`);
    }, []);

    return (
        <>
        <AppContext.Provider value={{ isScreenSmall, setIsScreenSmall, cartList, setCartList}}>
            <Navbar />

            <div className="container">
                <main role="main" id="main">
                    <Outlet />
                </main>
            </div>

            <Footer />
           </AppContext.Provider>
        </>

    );
}

export default Root;