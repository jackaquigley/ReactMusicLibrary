import React, {Component} from 'react'
import ChartList from '../components/ChartList.js'
import '../public/style.css';

class MusicContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: []
    }
}

    componentDidMount(){
      const url ='https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

      fetch(url)
      .then(res => res.json())
      .then(res => {
        const songs = res.feed.entry;

        this.setState({songs: songs});

      })

    }


  render(){
    return (
      <div id="mainWrapper">
      <ChartList songs={this.state.songs}/>
      </div>
    )
  }

}

export default MusicContainer;
