const React = require('react')
const DefaultPage = require('../layouts/default')
import Button from 'react-bootstrap/Button';
//data parameter will pass
const PlacesIndex =(data) => {
    let placesFormatted = data.places.map((place) => {
        return (
        <div>
            <h2 key={place.id}>{place.name}</h2>
            <img src={place.pic} alt={place.name}/>
            {console.log(place.key)}
        </div>
        )
    })
        return (
            <DefaultPage>
                <main>
                    <h1> This is the Places/Index page </h1>
                    <p> This will be the index for all the places stored</p>
                    <div>
                        {placesFormatted}
                        <a href="/">
                            <Button variant="primary">Home</Button>
                         </a>
                    </div>
                </main>
                
            </DefaultPage>
           
        )
    
}

module.exports = PlacesIndex