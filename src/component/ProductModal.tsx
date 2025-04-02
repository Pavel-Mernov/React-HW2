import Product from "./model/Product";
import Modal from 'react-modal'
import ProductImage from "./ProductImage";

interface ProductModalProps {
    product : Product,
    onClose : () => void,
}

const ProductModal : React.FC<ProductModalProps> = ({ product, onClose }) => {
    return <Modal className="product-modal" isOpen={true} onRequestClose={onClose}>
        <div className="scroll-modal-content">
            <label><strong className="f-25">{product.name}</strong></label>

            <br />
            {<ProductImage width={'80%'} height={'375px'} imgSource={product.imgSource} />} 
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
                typeof product.description === 'string' ? product.description : ''}</label>
        </div>
        <button className="btn-close-modal" onClick={onClose} >Свернуть</button>
    </Modal>
}

export default ProductModal