import Head from "next/head";

export default function Layout ({ children }: any) {
    return (
        <>
            <Head>
                <title>Nanthakumaran S</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}