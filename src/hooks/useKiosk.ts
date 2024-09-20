import {useState} from "react";
import {ICartItem, IProduct} from "../types/kiosk.ts";


export interface IUseKiosk {
    cartItems: ICartItem[];
    addToCart(product: IProduct): void;
    changeQty(pid:number, qty:number): void;
}

const useKiosk = ():IUseKiosk => {

    const [ cartItems, setCartItems] = useState<ICartItem[]>([])

    //addToCart 파라미터  , 리턴타입
    const addToCart = (product: IProduct) :void  => {

        //카트안에 있는지 확인
        const target:ICartItem|undefined =  cartItems.find( item => item.product.pid === product.pid )

        if(!target) {
            setCartItems([...cartItems, {product:product, qty:1}])
            return
        }
        target.qty += 1
        setCartItems([...cartItems])
    }

    const changeQty = (pid:number, qty:number):void => {

        const target: ICartItem | undefined = cartItems.find(item => {
            return item.product.pid === pid
        })

        if(!target) {return}

        target.qty += qty
        setCartItems([...cartItems])
    }


    return {cartItems, addToCart,changeQty}
}


export default useKiosk