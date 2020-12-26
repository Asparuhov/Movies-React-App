import React from 'react'
import './Movie.css'
const Movie = props => {
    return (
            <img src={props.source} alt='Error loading' className='Item'/>
    )
}

export default Movie