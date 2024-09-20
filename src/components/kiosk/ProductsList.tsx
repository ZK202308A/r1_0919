import {IProduct} from "../../types/kiosk.ts";
import {ReactElement} from "react";


interface ProductListProps {
    products: IProduct[];
    addToCart: (product: IProduct) => void;
}

function ProductsList({products, addToCart}: ProductListProps): ReactElement {

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
            <ul className='flex flex-wrap '>
                {productLI}
            </ul>
        </div>
    );
}

export default ProductsList;