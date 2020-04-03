import React, { useState } from 'react';
import Photo from '../Photo/Photo';
import './PhotoList.css'


const PhotoList = (props) => {
    let { photos,length } = props;
    const [count, setCount] = useState(20)


    let x=length-count
    if(x<0){
        x=0
    }

    const handleBtnClick=()=>{
        setCount(count + 20)
        if(count >= length){
            setCount(length)
        }
       
    }

    return (
        <div>
            <div className="photo-list">
                {photos.slice(0,count).map((photo, index) => (<Photo photo={photo} key={index} />))}
            </div>
            <button className="btnCount" onClick={() => handleBtnClick()}>Load more photos ({x} photos remaining)</button>
        </div>
    )
}

export default PhotoList;

