import React, {Component} from 'react'

class MusicContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      feed: null
    }
}

    componentDidMount(){
      const url ='https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

      fetch(url)
      .then(res => res.json())
      .then(data => this.setState({data: data.feed.entry}))
      .catch(err => console.error);

      fetch(url)
      .then(res => res.json())
      .then(feed => this.setState({feed: feed}))
      .catch(err => console.error)
    }


  render(){
    return (
      <h1>Test.</h1>
    )
  }

}

export default MusicContainer;
