import React from 'react';


export default class ResultArea extends React.Component {

    showLoading() {
        console.log("loading ...");
    }
    showData(data) {
        console.log(data);
    }
    showError(err) {
        console.log(err);
    }

    render() {
        const artist = this.props.artist && this.props.artist.artist;
        console.log(artist)
        if (artist) {
            return (
                <div id="result-area">
                    <div className="row mt-4">
                        <div className="col-sm js-result-area-main">
                            <div className="media">
                                <img src={artist.image.find(image => image.size === "mega")["#text"]} alt="" className="mr-3" />
                                <div className="media-body">
                                    <h2 className="mt-0">{artist.name}</h2>
                                    <div className="mt-2 mb-2">
                                        {artist.tags.tag.map(t => (<a href={t.url} key={t.name} className="badge badge-pill badge-info">{t.name} </a>))}
                                    </div>
                                    <p className="mt-4" dangerouslySetInnerHTML={{__html : artist.bio.summary}}>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4 js-result-area-similar">
                        {artist.similar.artist.map(a =>
                            <div className="col-sm">
                                <div className="card">
                                    <img src={a.image.find(image => image.size === "mega")["#text"]} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{a.name}</h5>
                                        <a href={a.url} className="btn btn-primary">Voir sur Last.fm</a>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>
            );
        }
        return null;
    }

}

