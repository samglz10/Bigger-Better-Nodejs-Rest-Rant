const React = require('react')
 
function Def (html) {
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

module.exports = Def