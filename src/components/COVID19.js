import React from 'react';
import axios from 'axios';


import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class COVID19 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      datas:[],
    };
    const request = axios.create({
      baseURL: 'https://coronavirus-19-api.herokuapp.com/countries'
    })
    request.get('/japan')
    .then(res => {
      this.setState({
        datas: res.data,
      });
    })
  }

  render() {
    console.log(this.state.datas.country);
    return (
      <div>
        {this.state.datas ?
          (<CasePattern
              active = {this.state.datas.active}
              cases = {this.state.datas.cases}
              todayCases = {this.state.datas.todayCases}
              deaths = {this.state.datas.deaths}
              todayDeaths = {this.state.datas.todayDeaths}
              recovered = {this.state.datas.recovered}
            />) : (<p>Loading </p>)}
      </div>
    );
  }
}

class CasePattern extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper>active: {this.props.active}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>todayCases: {this.props.todayCases}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>todayCases: {this.props.cases}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>deaths: {this.props.deaths}</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>todayDeaths: {this.props.todayDeaths}</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>recovered: {this.props.recovered}</Paper>
          </Grid>
        </Grid>
      </Container>

      </React.Fragment>

    );
  }
}

export default COVID19;
