import React from 'react';
import './Photo.css'

const Photo = (props) => {
    let { photo } = props;
    console.log(photo.id);

    return (
        <div className='photo'>
            <div className="photo-control">
                <a href={`#${photo.id}`}  >
                    <img src={photo.img} alt="img" className="img-control" />
                </a>
            </div>
            <div>
                <label>
                    {photo.category}
                </label>
            </div>
            <div>
                <label>{photo.price}</label>
            </div>
        </div>
        )
}

export default Photo;