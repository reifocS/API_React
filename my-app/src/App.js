import React from 'react'
import ResultArea from './ResultArea';
import SearchForm from './SearchForm'


let key = "";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: null,
        };

        this.handleUserSubmit = this.handleUserSubmit.bind(this);
    }

    handleUserSubmit(artist) {
        this.setState({
            artist: artist
        });
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm">
                        <div className="jumbotron mb-0">
                            <h1>La musica</h1>
                            <p className="lead">
                                Entrez le nom d'un(e) artiste/groupe ci-dessous pour obtenir des informations sur lui/elle.
                            </p>
                            <hr className="my-4" />
                            <div>
                                <SearchForm
                                    artist={this.state.artist}
                                    onSubmit={this.handleUserSubmit}
                                    apiKey= {key}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ResultArea
                        artist={this.state.artist}
                    />
                </div>
            </div>
        );

    }
}