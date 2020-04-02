import React, { Component } from 'react';

import PhotosList from './PhotosList';
import getPhotosMock from '../service/mockapi';
import Filter from './Filter';

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            filteredPhotos: []
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

    handleSearch(e) {
        const searchValue = e.target.value

        console.log(searchValue, this.state.photos);

        let copyList = [...this.state.photos];

        let filtered = copyList.filter(photo =>
            photo.title.toLowerCase().includes(searchValue.toLowerCase()))

        this.setState( {
                filteredPhotos: filtered
                } )
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

    render() {
        return (
            <div className="gallery-control">
                <Filter count={this.state.filteredPhotos.length} handleChangeCategory={this.handleChangeCategory}
                    handleSearch={this.handleSearch} />
                <PhotosList photos={this.state.filteredPhotos} />
            </div>
        )
    }
}

export default Gallery