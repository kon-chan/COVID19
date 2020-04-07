import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    }
    //this.func = this.func.bind(this);
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

  func(countryName) {
    this.props.setCountry(countryName);

  }

  render() {
    return (
      <React.Fragment>
        {this.state.datas.map(info => (
          <button
            key={info.country}
            onClick={this.func.bind(this, info.country)}>{info.country}
          </button>
        ))}
      </React.Fragment>
    );
  }
}


export default Search;
