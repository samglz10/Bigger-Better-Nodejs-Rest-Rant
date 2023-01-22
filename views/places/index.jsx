const React = require('react')
const DefaultPage = require('../default')
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'


//data parameter will pass

const PlacesIndex =(data) => {
    let placesFormatted = data.places.map((place) => {
        return (
          <>
          <div className='row'>
            <div className="col-sm-6 col-md-4 col-lg-3">
                <h2 className='col-sm-6 col-md-4 col-lg-3'>
                  <a href={`/places/${place.id}`}>
                    {place.name}
                  </a>
                </h2>
                  <div className='col-sm-6 col-md-4 col-lg-3'>
                    <p className="text-center">
                      {place.cuisines}
                    </p>
                  </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                  <Image className='image-fit' src={place.pic} alt={place.name} />
            </div>
                <p className="">
                        Located in {place.city}, {place.state}
                </p>
          </div>
          </>
        )
      })
        return (
            <DefaultPage>
                <link rel="stylesheet" href='/css/styles.css'/>
                <main>
                      <div className='col'>
                      <h1> Places </h1>
                          {placesFormatted} 
                          <a className='btn-nav' href="/">
                              <Button  variant="primary">Home</Button>
                          </a>
                      </div>
                </main>
            </DefaultPage>  
        )
}
module.exports = PlacesIndex