import React from 'react'
import Header from './component/Header'
import Main from './component/Main'
import Select from './component/Select'

export default class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      layout: "mobile"
    };
  }

  componentWillMount() {
    console.log(window.innerWidth)
    if (window.innerWidth >= 1024) {
      this.setState({layout: "tablet"})
    }
  }

  render() {
    return (
      <div>
        <Header title="应用标题" component={Select}/>
        <Main layout={this.state.layout}/>
      </div>
    );
  }
}

