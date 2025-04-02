import { CSSProperties } from "react"

interface ProductImageProps {
  imgSource? : string | null,
  width? : string | number,
  height ? : string | number
}

const ProductImage : React.FC<ProductImageProps> = ({ imgSource, width, height }) => {


  return typeof imgSource === 'string' ?
    <img src={imgSource} width={ width == undefined ? 'auto' : width} 
      height={height == undefined ? 'auto' : height} className="img-product-photo" />
    :
    <div className="no-photo-container" style={{width : width, height : height}}
      height={height == undefined ? 'auto' : height}>
        <p className="p-no-photo"><strong>Нет фото</strong></p>
    </div>
}

export default ProductImage