import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FlagIcon from '@material-ui/icons/Flag';
import SearchIcon from '@material-ui/icons/Search';
import PublicIcon from '@material-ui/icons/Public';


import COVID19 from './COVID19';
import Search from './Search';
import World from './World';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


class FullWidthTabs extends React.Component {

  state = {
      value: 0,
      setValue: 0,
      country: 'japan',
    }

  handleChange = (event, newValue) => {
    this.setState({ setValue: newValue });
  }
  handleChangeIndex = (index) => {
    this.setState({ setValue: index });
  }

  changeCountry(country) {
    const result = country.target.toString().replace('<button>', '');
    const countryName = result.replace('</button>', '');

    this.setState({
      country: country.target,
      setValue: 0,
     });
  }

  render() {
    return (
      <div>
        <div className="globalMenu">
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.setValue}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Country" icon={<FlagIcon />} {...a11yProps(0)} />
              <Tab label="Search" icon={<SearchIcon />} {...a11yProps(1)} />
              <Tab label="World" icon={<PublicIcon />} {...a11yProps(2)} />
            </Tabs>
          </AppBar>
        </div>

        <div className="container">
          <SwipeableViews
            index={this.state.setValue}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabPanel value={this.state.setValue} index={0} >
              <COVID19
                country = {this.state.country}
              />
            </TabPanel>

            <TabPanel value={this.state.setValue} index={1} >
              <Search
                changeCountry = {this.changeCountry.bind(this)}
              />
            </TabPanel>

            <TabPanel value={this.state.setValue} index={2}>
              <World />
            </TabPanel>

          </SwipeableViews>
        </div>

      </div>
    );
  }
}
export default FullWidthTabs;
