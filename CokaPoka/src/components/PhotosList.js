import React from 'react';
import Photo from './Photo';
import './PhotoList.css'


const PhotosList = (props) => {
    let { photos } = props;


    return (
        <div>
            <div className="photo-list">
                {photos.map((photo, index) => (<Photo photo={photo} key={index} />))}
            </div>
        </div>
    )
}

export default PhotosList;

