import Head from 'next/head';
const Header = () => {
    return(
        <div>
            <Head>
                <title>Definition</title>
                <link rel="stylesheet" href="./index.css" />
				<script src="./index.js"></script>
            </Head>
            <header>    
                <p className="title">Definition Words</p>
            </header>
        </div>
    );
} 

export default Header;