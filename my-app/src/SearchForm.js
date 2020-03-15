import React from 'react';

const cache = {};

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            loading: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loading = false;
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    async handleSubmit(event) {
        let cached = cache[this.state.value.toLowerCase()]
        event.preventDefault();
        if (!cached)
            this.setState({loading : true});
            cache[this.state.value.toLowerCase()] = await this.fetchData(this.state.value);        
        this.props.onSubmit(cache[this.state.value.toLowerCase()]);
        this.setState({loading : false});
    }

    async fetchData(artist) {
        const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${this.props.apiKey}&format=json`
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    render() {
        return (
            <form id="search-form" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label forhtml="artist" className="col-sm-2 col-form-label">
                        Artiste / groupe
                </label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} placeholder="Daft Punk" />
                    </div>
                    <div className="col-sm-2">
                        <div>
                            <input type="submit" value = {this.state.loading ? "Loading ..." : "Rechercher"} className="btn btn-primary" disabled={this.state.loading ? true : false} />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
