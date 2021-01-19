import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root.jsx'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    ReactDOM.render(<Root/>, root);
})