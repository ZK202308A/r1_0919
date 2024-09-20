import {IProduct} from "../../types/kiosk.ts";
import {ReactElement} from "react";


interface ProductListProps {
    products: IProduct[];
    addToCart: (product: IProduct) => void;
    changeType: (choice:string) => void;
}

function ProductsList({products, addToCart, changeType}: ProductListProps): ReactElement {

    const productLI = products.map((product: IProduct) => {
        const {pid,pname,price,img} = product;
        return (
            <li className='border-2 w-1/4' key={pid} onClick={() => addToCart(product)}>
                {img && <img src={img} alt={pname} />}
                {pname} - {price}
            </li>
        )
    })

    return (
        <div>
            <div className='flex m-2 p-2 bg-blue-500 border-2 font-extrabold '>
                <div className='p-2'  onClick={() => changeType('ALL')} >ALL</div>
                <div className='p-2' onClick={() => changeType('A')} >A</div>
                <div className='p-2' onClick={() => changeType('B')} >B</div>
                <div className='p-2' onClick={() => changeType('C')} >C</div>
            </div>
            <ul className='flex flex-wrap '>
                {productLI}
            </ul>
        </div>
    );
}

export default ProductsList;