const React = require('react')
const DefaultPage = require('./layouts/default')
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
<DefaultPage>
    <main>
        <h1> HOME </h1>
        <p> views/home</p>
        <a href="/places">
            <Button variant="outline-secondary">Places</Button>
        </a>
    </main>
</DefaultPage>)
}

module.exports = Home