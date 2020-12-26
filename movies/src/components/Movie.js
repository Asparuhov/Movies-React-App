import React from 'react'
import './Movie.css'
const Movie = props => {
    return (
        <div className='Item'>
            <img src={props.source} alt='Error loading' />
            <span class="heart" onClick={props.add}></span>
        </div>
    )
}

export default Movie