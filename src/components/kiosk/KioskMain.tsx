import ProductsList from "./ProductsList.tsx";
import CartDiv from "./CartDiv.tsx";
import {IProduct} from "../../types/kiosk.ts";
import useKiosk, {IUseKiosk} from "../../hooks/useKiosk.ts";
import {useState} from "react";

function KioskMain() {

    const products: IProduct[] = [
        {pid:1, pname:'M1', price:3000, img:'http://localhost:8081/food/M1.jpeg',kind:'A'},
        {pid:2, pname:'M2', price:4000, img:'http://localhost:8081/food/M2.jpeg',kind:'A'},
        {pid:3, pname:'M3', price:5000, img:'http://localhost:8081/food/M3.jpeg',kind:'B'},
        {pid:4, pname:'M4', price:6000, img:'http://localhost:8081/food/M4.jpeg',kind:'B'},
        {pid:5, pname:'M5', price:7000, img:'http://localhost:8081/food/M5.jpeg',kind:'C'},
    ]

    const [type, setType] = useState<string>('ALL')

    const changeType = (choice:string):void => {
        setType(choice)
    }

    const filterKind = ():IProduct[] => {

        if(type === 'ALL'){
            return products
        }
        return products.filter(p => {
            if(p.kind === type){
                return p
            }
        })
    }

    console.log(filterKind())

    const {cartItems,addToCart,changeQty }:IUseKiosk = useKiosk()


    return (
        <div className='w-full h-full p-3 flex'>
            <div className='w-2/3 bg-amber-700 m-2 p-2'>
                <ProductsList products = {filterKind()} addToCart={addToCart} changeType={changeType}></ProductsList>
            </div>
            <div className='w-1/3 bg-blue-600 m-2 p-2 '>
                <CartDiv cartItems = {cartItems} changeQty={changeQty}></CartDiv>
            </div>

        </div>
    );
}

export default KioskMain;