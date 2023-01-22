const React = require('react')
import Button from 'react-bootstrap/Button';
import {Navbar, Container, Nav, NavDropdown,Row, Col} from 'react-bootstrap'
 //an html skeleton
const DefaultPage = (html) => {
    return (
        <>
    <html className='fluid'>
        <head>
            <title>REST-RANT</title>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                crossOrigin="anonymous"/>
             <link rel="stylesheet" href='/css/styles.css'/>
        </head>
        <body className='' >
            <Navbar className="navbar navbar-expand-lg navbar-light bg-light d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom position-sticky">
                <a className="navbar-brand" href="/"> Rest-Rant 2.0</a>
            <div className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                     <li className="nav-item">
                        <a className="nav-link" href="/">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/places">Places</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/places/new">Add A Place </a>
                    </li>
                </ul>
            </div>
                    <Button variant="outline-dark" 
                            className="text-end px-10"
                            href="https://github.com/samglz10/Bigger-Better-Nodejs-Rest-Rant" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                Github Repo
                    </Button>
            </Navbar>
            <div className='inner-cover' >
                {html.children}
            </div>
        </body>
    </html>
    </>
    )
}

module.exports = DefaultPage