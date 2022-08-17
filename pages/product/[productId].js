//Dynamic Routing
//Nextjs treates [] as a dynamic segement to create dynamic routes

import { useRouter } from 'next/router';

function ProductDetail() {
    const router = useRouter();
    const productId = router.query.productId;

    return (
        <>
            <h1>Details about Product</h1>
            <h2>Here is Product {productId}</h2>
        </>
    );
}

export default ProductDetail;
