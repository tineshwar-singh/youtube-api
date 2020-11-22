import React, { Component, Fragment } from "react";
import YoutubeHeader from "./Components/YoutubeHeader/Header";
import VideoDetails from "./Components/YoutubeVideos/VideoDetails";
import VideoList from "./Components/YoutubeVideos/VideoList";
import api, { baseParams } from "./Services/Api";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos : [],
            selectedVideo : null,
        };
    }

    componentDidMount() {
        this.onTermSubmit('care ni karda');
    }

    onTermSubmit = async (term) => {
        let response = await api.get("/search" , {
            params : {
                q : term,
                ...baseParams,
            },
        });
        this.setState({ videos : response.data.items , selectedVideo : response.data.items[0] })
    };

    onVideoSelected = async (video) => {
        this.setState({ selectedVideo : video });
    };

    render() { 
        return ( 
            <Fragment>
                <header>
                    <YoutubeHeader onTermSubmit={this.onTermSubmit}/>
                </header>
                <main className="containerBlock">
                    <article className="row">
                        <div className="videoPlayerBlock col-md-8">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="videoListBlock col-md-4">
                            <VideoList videos={this.state.videos} onVideoSelected={this.onVideoSelected}/>
                        </div>
                    </article>
                </main>
            </Fragment>
        );
    }
}

export default App;