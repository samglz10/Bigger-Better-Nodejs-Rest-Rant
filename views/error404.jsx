const React = require('react')
const DefaultPage = require('./layouts/default')
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

const error404 =() => {
    return (
        <DefaultPage>
            <main>
                <h1> 404: Page Not Found </h1>
                <p> Oops, sorry, we can't find this page, homie...</p>
            <div className='thumbnail-div'>
                <Image className='thumbnail' variant='fluid'src='/images/uhoh.png' alt='Spilled Ice Cream cone.'/>
            </div>
            <div className='img-descritpion'>
                    <a href="https://unsplash.com/es/@rojekilian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Photo by Sarah Kilian
                    </a>
             </div>
                <a className='btn-nav' href="/">
                    <Button variant="secondary">Home</Button>
                </a>
            </main>
        </DefaultPage>
    )
}

module.exports = error404