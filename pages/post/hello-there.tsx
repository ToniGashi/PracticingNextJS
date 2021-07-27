import Image from 'next/image'
import Head from 'next/head'

const Hello = () => (
    <>
    <Head>
        <title>Hello There :: Blog</title>
    </Head>
    <article>
        <h1>Hello World</h1>
        <Image
            src="/post/hello-there/nature.jpg"
            width={640}
            height={427}
        />
    </article>
    </>
)

export default Hello;
