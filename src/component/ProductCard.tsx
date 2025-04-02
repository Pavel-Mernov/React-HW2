import Product from "./model/Product";
import ProductImage from "./ProductImage";

interface ProductCardProps {
    product : Product,
    onClick : () => void
}


const ProductCard : React.FC<ProductCardProps> = ({ product, onClick }) => {
    


    return <div className="product-card" onClick={onClick}>
        <label><strong className="f-25">{product.name}</strong></label>
        <br />
        {<ProductImage width={'600px'} height={'400px'} imgSource={product.imgSource} />} 
        <br />
        <label className="f-20"><strong>Количество товара:</strong></label>
        <br /> 
        <label className="f-20">{product.count} {product.unit}</label>

        <br />
        {
            typeof product.description === 'string' &&
            <label style = {{fontSize: '20px'}}><strong>Описание:</strong></label>
        }

        <br />
        <label style = {{fontSize: '20px'}}>{
              typeof product.description === 'string' ? 
             (product.description.length > 135 ? product.description.slice(0, 135) + '...' : product.description) 
            : ''}</label>
    </div>
}

export default ProductCard