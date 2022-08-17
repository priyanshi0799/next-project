import Link from 'next/link';

//Link tag is used for navigation within the website, for outside navigation, use anchor tag
export default function Home() {
    return (
        <div>
            <h1>Hello World!</h1>
            <Link href="/blog">Visit Blogs</Link>
            <br />
            <Link href="/product">Visit Products</Link>
        </div>
    );
}
