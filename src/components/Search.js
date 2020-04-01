import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    }
    const request = axios.create({
      baseURL: 'https://coronavirus-19-api.herokuapp.com'
    })
    request.get('/countries')
    .then(res => {
      this.setState({
        datas: res.data,
      });
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.datas.map(info => (
          <h1>{info.country}</h1>
        ))}
      </React.Fragment>
    );
  }
}

export default Search;
