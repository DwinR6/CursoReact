import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    console.log(id, url, title); 
    return (
        <div className="card animate_animated animate__flash">
            <img src={ url } alt={ title }/>
            <p> { title } </p>
        </div>
    )
}
 