

export interface IProduct {
    pid: number,
    pname: string,
    price: number,
    img?: string,
    kind?: string,
}

export interface ICartItem {
    product: IProduct,
    qty: number
}
