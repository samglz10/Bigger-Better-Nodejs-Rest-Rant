const React = require('react')
const DefaultPage = require('../layouts/default')
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
//data parameter will pass
const PlacesIndex =(data) => {
    let placesFormatted = data.places.map((place, index) => {
        return (
          <>
          <div className="places-description" >
              <h2>
                {place.name}
              </h2>
              <a href={`/places/${index}`}>
                {place.name}
              </a>
                <div className='place-name'>
                  <p className="text-center">
                    {place.cuisines}
                  </p>
                </div>
          </div>
            <div className='places-images'>
                <Image className='image-fit' src={place.pic} alt={place.name} />
            </div>
              <p className="places-description">
                      Located in {place.city}, {place.state}
              </p>
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