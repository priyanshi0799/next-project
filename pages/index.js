import Link from 'next/link';
import { useRouter } from 'next/router';

//Link tag is used for navigation within the website, for outside navigation, use anchor tag
export default function Home() {
    const router = useRouter();

    const navigateProgrammatically = () => {
        router.push('/product');

        //router.replace will work in similar way, but on browser back, it will redirect to "/"
        //-> Similar to "replace" attribute in Link tag
    };
    return (
        <div>
            <h1>Hello World!</h1>
            <Link href="/blog">Visit Blogs</Link>
            <br />
            <Link href="/product">Visit Products</Link>

            <br />

            <button onClick={navigateProgrammatically}>Place Order</button>
        </div>
    );
}
