//route -> /product/productId/review/reviewId

import { useRouter } from 'next/router';

function Review() {
    const router = useRouter();
    const { productId, reviewId } = router.query;

    return (
        <>
            <h1>Details about Product Review</h1>
            <h2>
                Here is Review {reviewId} for product {productId}
            </h2>
        </>
    );
}

export default Review;
