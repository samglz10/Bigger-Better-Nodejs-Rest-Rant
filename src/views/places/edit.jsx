const React = require('react')
const DefaultPage = require('../default')
//import Button from 'react-bootstrap/Button';
//import Image from 'react-bootstrap/Image';

const Edit_Form = (data) => {
    let message = '';
    if (data.message) {
        message = (
            <h4 className='alert-danger'>
                {data.message}
            </h4>
        )
    }
    return(
        <DefaultPage>
            <main>
                <h1> Edit Place </h1>
                {message}
                <div className='row'>
                    <form className="form-group col-sm-6 mb-3"  method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                        <div className="form-group col-sm-6">
                            <label htmlFor="name"> Place Name</label>
                            <input 
                                className="form-control" 
                                id="name" 
                                name="name"
                                value={data.place.name}
                                required/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">
                                 Place pic</label>
                            <input 
                                className="form-control" 
                                type="url" 
                                name="pic"
                                value={data.place.pic} 
                                id="pic"/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="city"> City</label>
                            <input 
                                className="form-control" 
                                id="city" 
                                name="city" 
                                value={data.place.city} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state"> State</label>
                            <input 
                                className="form-control"  
                                id="state" 
                                name="state"
                                value={data.place.state}/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="cuisines"> Cuisines</label>
                            <input 
                                className="form-control"  
                                id="cuisines" 
                                name="cuisines"
                                value={data.place.cuisines}
                                required/>
                        </div>
                        <input className="btn btn-primary" type="submit" value="Update Place"/>
                    </form>
                </div>
            </main>
        </DefaultPage>
    )
}

module.exports = Edit_Form