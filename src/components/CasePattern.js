import React from 'react';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';


class CasePattern extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="topWrapper">
          <h2>現在の感染者数</h2>
          {this.props.active ? (
            <CountUp
              start={0}
              end={this.props.active}
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
          <h1>{this.props.country}</h1>
        </div>

        <Container className="flexContainer">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper className="caseCard">
                <h2>本日の感染者数</h2>
                <p><span>{this.props.todayCases}</span>名</p>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className="caseCard">
                <h2>本日の死亡例</h2>
                <p><span>{this.props.todayDeaths}</span>名</p>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className="caseCard">
                <h2>回復した数</h2>
                <p><span>{this.props.recovered}</span>名</p>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className="caseCard">
                <h2>総合した感染者数</h2>
                <p><span>{this.props.cases}</span>名</p>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className="caseCard">
                <h2>死亡例</h2>
                <p><span>{this.props.deaths}</span>名</p>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className="caseCard">
                  <h2>重症</h2>
                  <p><span>{this.props.critical}</span>名</p>
            </Paper>
          </Grid>

        </Grid>

      </Container>

      </React.Fragment>

    );
  }
}




export default CasePattern;
