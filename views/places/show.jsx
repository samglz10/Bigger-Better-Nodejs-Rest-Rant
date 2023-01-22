const React = require('react')
const DefaultPage = require('../default')
import Button from 'react-bootstrap/Button';
//import Image from 'react-bootstrap/Image';

const ShowPage = (data) => {

    return(
        <DefaultPage>
            <main>
                <div className='row'>
                    <h1> {data.place.name} </h1>
                    <div className='places-images'>
                        <img className='image-fit' src={data.place.pic} alt={data.place.name} />
                    </div>
                    <h2> Rating </h2>
                        <p>Not yet Rated</p>
                    <h2> Description</h2>
                    <p>{data.place.city} {data.place.state} and serving {data.place.cuisines}</p>
                    <div>
                        <h2>Comments</h2>
                        <p>No Comments yet! Be the first to comment and let the world know how you feel!</p>
                    </div>
                    <div>
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                            Edit
                        </a> 
                        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form> 
                    </div>
                </div>
            </main>
        </DefaultPage>
    )
}

module.exports = ShowPage