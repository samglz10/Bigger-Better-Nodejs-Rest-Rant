const React = require('react')
const DefaultPage = require('../default')
//import Button from 'react-bootstrap/Button';
//import Image from 'react-bootstrap/Image';

const New_Form = (data) => {
    let message = ''
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
                <h1> Add a new Place!</h1>
                    {message}
                <div className='row'>
                    <form className="form-group col-sm-6"  method="POST" action="/places">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name"> Place Name</label>
                            <input className="form-control" id="name" name="name" required/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="pic"> Place pic</label>
                            <input className="form-control" type="url" id="pic" name="pic"/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="city"> City</label>
                            <input className="form-control"  id="city" name="city"/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state"> State</label>
                            <input className="form-control"  id="state" name="state"/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="cuisines"> Cuisines</label>
                            <input className="form-control"  id="cuisines" name="cuisines" required/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label for="founded">Founded Year</label>
                            <input className="form-control" id="founded" name="founded" value={new Date().getFullYear()} />
                        </div>
                        <input className="btn btn-primary" type="submit" value="Add Place"/>
                    </form>
                </div>
            </main>
        </DefaultPage>
    )
}

module.exports = New_Form