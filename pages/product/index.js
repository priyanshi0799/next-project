import Link from 'next/link';

function ProductList() {
    return (
        <>
            <Link href="/">Home</Link>
            <br />
            <Link href="/product/1">Product 1</Link>

            <h2>Product 2</h2>

            {/* replace prop will replace the current history state to "/" instead of adding a new url
                to the stack */}
            <Link href="/product/1" replace>
                Product 3
            </Link>
        </>
    );
}

export default ProductList;
