import Head from 'next/head';
const Header = () => {
    return(
        <div>
            <Head>
                <title>Definition</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
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