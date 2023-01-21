const React = require('react')
import Button from 'react-bootstrap/Button';

 //an html skeleton
const DefaultPage = (html) => {
return (
<html>
    <head>
        <title>REST-RANT</title>
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"/>
  <link rel="stylesheet" href='/css/styles.css'/>
    </head>
    <body>
        <div className='.container-fluid'>
            views/layouts/default is following this format
            {html.children}
        </div>
    </body>
</html>
)
}

module.exports = DefaultPage