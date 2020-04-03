import React, { Component } from 'react';

import PhotoList from '../PhotoList/PhotosList';
import getPhotosMock from '../../service/mockapi';
import Filter from '../Filter/Filter';
import './Gallery.css'


class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            filteredPhotos: [],
            chartItems: []
        }

        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        getPhotosMock().then(res => res.data)
            .then(data => this.setState({
                photos: data,
                filteredPhotos: data
            }))
    }

    handleChangeCategory(e) {
        this.setState({ category: e.target.value });
        this.listPhotos();
    }


    listPhotos() {
        this.setState(state => {
            if (state.category !== "ALL") {
                return { filteredPhotos: state.photos.filter(photo => photo.category === state.category) }
            }

            else {
                return { filteredPhotos: state.photos }
            }
        })
    }
    handleSearch(e) {
        const searchValue = e.target.value

        console.log(searchValue);

        let copyList = [...this.state.photos];

        let filtered = copyList.filter(photo =>
            photo.title.toLowerCase().includes(searchValue.toLowerCase()))

        this.setState({
            filteredPhotos: filtered
        })
    }

    render() {
        return (
            <div className="gallery-control">
                <Filter count={this.state.filteredPhotos.length} handleChangeCategory={this.handleChangeCategory}
                    handleSearch={this.handleSearch} />
                <PhotoList photos={this.state.filteredPhotos} length={this.state.filteredPhotos.length} />
                <br></br>
            </div>
        )
    }
}

export default Gallery