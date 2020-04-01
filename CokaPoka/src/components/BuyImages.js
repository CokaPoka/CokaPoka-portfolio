import React, { Component } from 'react';

import PhotosList from './PhotosList';
import getPhotosMock from '../service/mockapi';
import Filter from './Filter';

class BuyImages extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            photos: [],
            filteredPhotos: []
        }
        
        this.handleChange = this.handleChange.bind(this);
    
        getPhotosMock().then(res => res.data)
            .then(data => this.setState({
                photos: data,
                filteredPhotos: data
            }))  
    }

    handleChange(e){
        this.setState({category: e.target.value});
        this.listPhotos();        
    }

    listPhotos(){
        this.setState(state=> {
            if (state.category!== "ALL"){
                return { filteredPhotos: state.photos.filter(photo => photo.category === state.category) }
            }
            else {
                return { filteredPhotos: state.photos }
            }
        })
    }

    render() {
        return (
            <div className="buy-img">
                <Filter count={this.state.filteredPhotos.length} handleChange={this.handleChange} />
                <PhotosList photos={this.state.filteredPhotos} />
            </div >
        )
    }
}
export default BuyImages