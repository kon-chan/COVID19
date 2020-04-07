import React from 'react';
import axios from 'axios';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';

class World extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    }

    const request = axios.create({
      baseURL: 'https://coronavirus-19-api.herokuapp.com'
    })
    request.get('/countries/world')
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
        (<WorldCases
            key={this.state.datas.cases}
            country = {this.state.datas.country}
            active = {this.state.datas.active}
            cases = {this.state.datas.cases}
            todayCases = {this.state.datas.todayCases}
            deaths = {this.state.datas.deaths}
            todayDeaths = {this.state.datas.todayDeaths}
            recovered = {this.state.datas.recovered}
            critical = {this.state.datas.critical}
          />) : (<p>Loading</p>)}
      </React.Fragment>
    );
  }
}


function WorldCases(props) {
  return (
    <React.Fragment>
      <div className="topWrapper">
        <h2>現在の感染者数</h2>
        {props.cases ? (
          <CountUp
            start={0}
            end={props.cases}
            delay={0}
          >
            {({ countUpRef }) => (
              <div className="activeCounter">
                <span ref={countUpRef} /><p>名</p>
              </div>
            )}
            </CountUp>
        ) : (<p>集計中</p>)}

      </div>

      <div className="countryName">
        <h1>{props.country}</h1>
      </div>

      <Container className="flexContainer">
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className="caseCard">
              <h2>本日の感染者数</h2>
              <p><span>{props.todayCases}</span>名</p>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className="caseCard">
              <h2>本日の死亡例</h2>
              <p><span>{props.todayDeaths}</span>名</p>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className="caseCard">
              <h2>回復した数</h2>
              <p><span>{props.recovered}</span>名</p>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className="caseCard">
              <h2>総合した感染者数</h2>
              <p><span>{props.cases}</span>名</p>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className="caseCard">
              <h2>死亡例</h2>
              <p><span>{props.deaths}</span>名</p>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className="caseCard">
                <h2>重症</h2>
                <p><span>{props.critical}</span>名</p>
          </Paper>
        </Grid>

      </Grid>

    </Container>

    </React.Fragment>
  );
}

export default World;
