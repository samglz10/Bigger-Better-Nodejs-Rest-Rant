const React = require('react')

 //an html skeleton
const DefaultPage = (html) => {
return (
<html>
    <head>
        <title>REST-RANT</title>
    </head>
    <body>
        <div className='.container-fluid'>
            views/layouts/default
            {html.children}
        </div>
    </body>
</html>
)
}

module.exports = DefaultPage