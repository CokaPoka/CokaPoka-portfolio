import React, { Component } from 'react';
import './Photo.css'
import Flippy, { FrontSide, BackSide } from 'react-flippy';


class Photo extends Component {
    render() {
    return (
        <div className="photo">
        <Flippy
            flipOnHover={true}
            flipDirection="horizontal"
            ref={(r) => this.flippy = r}
            style={{ width: '400px', height: '290px' }}
        >
            <FrontSide
                style={{
                        backgroundColor: '#ffffff', display: "flex", alignItems: "center", justifyContent: "center"
                }}
            >
                <img src={this.props.photo.img} alt="img" className="img-control" />
    </FrontSide>
            <BackSide
                    style={{ backgroundColor: '#dee3e2', textAligin: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p className="title">{this.props.photo.title}</p>
    </BackSide>
        </Flippy>
        </div>
    )

// const Photo = (props) => {
//     let { photo } = props;
//     console.log(photo.id);
    // return (
    //     <div className='photo'>
    //         <div className="photo-control">
    //             <a href={`#${photo.id}`}  >
    //                 <img src={photo.img} alt="img" className="img-control" />
    //             </a>
    //             <p>{photo.title}</p>
    //         </div>
    //     </div>
    //     )
}
}
export default Photo;