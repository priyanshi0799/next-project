import { useRouter } from 'next/router';

// [...params].js will handle all the parameters ahead of /docs
//but it will throw 404 if we try to access /doc
//to handle it, we can wrap [...params].js in another []

function Doc() {
    const router = useRouter();
    const { params = [] } = router.query; //array of all the params

    if (params.length === 1) {
        return <h1>Viewing docs for {params[0]}</h1>;
    } else if (params.length === 2) {
        return (
            <h1>
                Viewing docs for {params[0]} for {params[1]}
            </h1>
        );
    }
    return <h1>Docs Home Page</h1>;
}

export default Doc;
