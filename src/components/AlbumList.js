import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = { albums: [] };
    }

    componentWillMount() {
        axios.get('https://swapi.co/api/planets')
        .then(response => this.setState({ albums: response.data.results }));
    }

    renderAlbums() {
        return this.state.albums.map(albums =>
            <AlbumDetail key={albums.name} albums={albums} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
