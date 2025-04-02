interface Product {
    id : number,
    name : string,
    description? : string | null,
    count : number,
    unit : string,
    imgSource? : string | null
}

export default Product