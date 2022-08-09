import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams();
    console.log(params.productId);
    return (
        <h1>{params.productId}</h1>
    )
}

export default ProductDetails;