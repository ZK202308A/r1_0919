import ProductsList from "./ProductsList.tsx";
import CartDiv from "./CartDiv.tsx";
import {ICartItem, IProduct} from "../../types/kiosk.ts";
import {useState} from "react";

function KioskMain() {

    const products: IProduct[] = [
        {pid:1, pname:'M1', price:3000, img:'http://localhost:8081/food/M1.jpeg'},
        {pid:2, pname:'M2', price:4000, img:'http://localhost:8081/food/M2.jpeg'},
        {pid:3, pname:'M3', price:5000, img:'http://localhost:8081/food/M3.jpeg'},
        {pid:4, pname:'M4', price:6000, img:'http://localhost:8081/food/M4.jpeg'},
        {pid:5, pname:'M5', price:7000, img:'http://localhost:8081/food/M5.jpeg'},
    ]

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


    return (
        <div className='w-full h-full p-3 flex'>
            <div className='w-2/3 bg-amber-700 m-2 p-2'>
                <ProductsList products = {products} addToCart={addToCart}></ProductsList>
            </div>
            <div className='w-1/3 bg-blue-600 m-2 p-2 '>
                <CartDiv></CartDiv>
            </div>

        </div>
    );
}

export default KioskMain;