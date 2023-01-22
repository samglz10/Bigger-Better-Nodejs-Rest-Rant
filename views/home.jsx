const React = require('react')
const DefaultPage = require('./default')
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const Home = () => {
    return (
<DefaultPage>
    <main>
        <h1> Home </h1>
        <h3>Hi! Welcome to my Rest-Rant Webpage.</h3>
            <div className='thumbnail-div'>
                <Image className='img-thumbnail ' variant='fluid'src='/images/home pic.png' alt='Chef Holding Sushi.' height={750} width={750}/>
            </div>
            <div className='img-descritpion'>
                    <a href="https://unsplash.com/photos/mM-L0yx5LcQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Photo by Peter Dawn 
                    </a>
             </div>
             <h3>Let me know how you feel about your favorite Restaurant 🤟  or feel free to me tell me how you hated it! 😠 </h3>
             <div className='my-3'>
                          <a className='btn-nav my-3' href="/places">
                              <Button  variant="primary">Places</Button>
                          </a>
            </div>
    </main>
</DefaultPage>)
}

module.exports = Home