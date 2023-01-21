const React = require('react')
const DefaultPage = require('./layouts/default')
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const Home = () => {
    return (
<DefaultPage>
    <main>
        <h1> HOME </h1>
            <div className='thumbnail-div'>
                <Image className='thumbnail' variant='fluid'src='/images/home pic.png' alt='Chef Holding Sushi.'/>
            </div>
            <div className='img-descritpion'>
                    <a href="https://unsplash.com/photos/mM-L0yx5LcQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Photo by Peter Dawn 
                    </a>
             </div>
            {console.log("views/home")}
                <a className='btn-nav' href="/places">
                    <Button variant="secondary">Places</Button>
                </a>
            </main>
</DefaultPage>)
}

module.exports = Home