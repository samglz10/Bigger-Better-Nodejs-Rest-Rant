const React = require('react')
const DefaultPage = require('./layouts/default')

const error404 =() => {
    return (
        <DefaultPage>
            <main>
                <h1> 404: Page Not Found </h1>
                <p> Oops, sorry, we can't find this page, homie...</p>
            </main>
        </DefaultPage>
    )
}

module.exports = error404