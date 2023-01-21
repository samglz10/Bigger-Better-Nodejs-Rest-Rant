const React = require('react')
const DefaultPage = require('../layouts/default')
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
//data parameter will pass
const PlacesIndex =(data) => {
    let placesFormatted = data.places.map((place) => {
        return (
          <div className="col-sm-6">
            <h2>{place.name}</h2>
            <p clasName="text-center">
              {place.cuisines}
            </p>
            <Image src={place.pic} alt={place.name} />
            <p clasName="text-center">
              Located in {place.city}, {place.state}
            </p>
          </div>
        )
      })
      
        return (
            <DefaultPage>
                <link rel="stylesheet" href='/css/styles.css'/>
                <main>
                    <div className='row'>
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