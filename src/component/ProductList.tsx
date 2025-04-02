import { useState } from 'react'
import Product from './model/Product'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

interface ProductListProps {
    products : Product[],
}

interface ProductListState {
    isSelected : boolean,
    selectedProduct? : Product
}

const ProductList : React.FC<ProductListProps> = ({ products }) => {
    const [state, setState] = useState<ProductListState>({ 
        isSelected: false, 
        selectedProduct: undefined
    })

    const OpenModal : (product : Product) => void = (product : Product) => {
        if (state.isSelected) {
            return;
        }
        setState({
            isSelected : true, 
            selectedProduct : product
        })
    } 

    const CloseModal = () => {
        setState({
            isSelected : false, 
            selectedProduct : undefined
        })        
    }

    return <div className="product-list">
        { products.map(product => 
            <ProductCard product={product} onClick={() => OpenModal(product)} />
        )}
        {
            (state.isSelected && state.selectedProduct != undefined) && <ProductModal product={state.selectedProduct} onClose={CloseModal} />
        }
    </div>
}

export default ProductList