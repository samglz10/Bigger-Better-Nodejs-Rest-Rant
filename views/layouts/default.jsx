const React = require('react')
import Button from 'react-bootstrap/Button';
 //an html skeleton
const DefaultPage = (html) => {
    return (
        <>
    <html>
        <head>
            <title>REST-RANT</title>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                crossOrigin="anonymous"/>
             <link rel="stylesheet" href='/css/styles.css'/>
        </head>
        <body className='inner cover' >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/"> Rest-Rant 2.0</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="">Empty</a>
                    </li>
                    <li className="nav-item">
                    <Button variant="primary">Login</Button>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            </nav>
            <div className='.container-fluid'>
                {html.children}
            </div>
        </body>
    </html>
    </>
    )
}

module.exports = DefaultPage