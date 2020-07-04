import React from 'react'
import ReactDOM from 'react-dom'

import '../stylesheets/index.scss';
import App from '../components/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  )
})
