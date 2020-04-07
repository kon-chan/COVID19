import React from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';

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
          <Button
            key={info.country}
            onClick={this.func.bind(this, info.country)}
            variant="outlined"
            color="primary"
            style={{margin: 5}}
          >
            {info.country}
          </Button>
        ))}
      </React.Fragment>
    );
  }
}


export default Search;
