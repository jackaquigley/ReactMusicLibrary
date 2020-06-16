import React, {Component} from 'react'
import ChartList from '../components/ChartList.js'

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
      <ChartList songs={this.state.songs}/>
    )
  }

}

export default MusicContainer;
