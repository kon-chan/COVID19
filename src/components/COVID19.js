import React from 'react';
import axios from 'axios';

import CasePattern from './CasePattern';
import Loading from './Loading';

class COVID19 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      datas:[],
    };
    const request = axios.create({
      baseURL: 'https://coronavirus-19-api.herokuapp.com/countries'
    })

    request.get(`/${this.props.country}`)
    .then(res => {
      this.setState({
        datas: res.data,
      });
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.datas ?
          (<CasePattern
              country = {this.state.datas.country}
              active = {this.state.datas.active}
              cases = {this.state.datas.cases}
              todayCases = {this.state.datas.todayCases}
              deaths = {this.state.datas.deaths}
              todayDeaths = {this.state.datas.todayDeaths}
              recovered = {this.state.datas.recovered}
              critical = {this.state.datas.critical}
            />) : (<Loading />)}
      </React.Fragment>
    );
  }
}


export default COVID19;
