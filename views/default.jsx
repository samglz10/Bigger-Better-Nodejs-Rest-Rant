const React = require('react')
 //an html skeleton
const DefaultPage = (html) => {
return (
<html>
    <head>
        <title>REST-RANT</title>
    </head>
    <body>
        {html.children}
    </body>
</html>
)
}

module.exports = DefaultPage