import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        return (
            <div className="filter-control">
                <div className="img-number">
                    {this.props.count} photos found
                </div>
                <div className="select-div">
                    <select id="category" onChange={(e) => { this.props.handleChange(e) }}>
                        <option value='ALL'>ALL</option>
                        <option value='kids'>Kids</option>
                        <option value='xmas'>Christmas</option>
                        <option value='bussiness'>Bussiness</option>
                        <option value='healthcare'>Healthcare</option>
                        <option value='sport'>Sport</option>
                        <option value='lifestyle'>Lifestyle</option>
                        <option value='love'>Love</option>
                        <option value='summer'>Summer</option>
                        <option value='family'>Family</option>
                    </select>
                </div>
            </div>
        )
    }
}