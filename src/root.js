import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { red, green, cyan } from 'material-ui/colors';
import Input from 'material-ui/Input';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Grid from 'material-ui/Grid';
import { LinearProgress } from 'material-ui/Progress';
import { CircularProgress } from 'material-ui/Progress';
import Snackbar from 'material-ui/Snackbar';
import Zoom from 'material-ui/transitions/Zoom';                      //Slide Grow Fade Collapse Zoom

import {DATA} from './data'

const theme = createMuiTheme({
  palette: {
    primary: {main: green[400]},
    secondary: {main: cyan[600]},
    error: {main: red[500]},
  },
  overrides: {
    MuiButton: {
      root: {
        minWidth: 0,
        minHeight: 0,
        borderRadius: 3,
        padding: '8px 10px',
      },
    },
    MuiIcon: {
      root: {
        fontSize: 30
      },
    },
  },
})

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleClose() {
    this.setState({ open: false })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <IconButton color="primary">add_circle </IconButton>
        <Input />
        <Checkbox  />
        <div style={{margin: 20}}>
          <i className="material-icons">person</i>
          <Icon style={{color: '#888'}}>face</Icon>
          <i className="material-icons">&#xE87C;</i>
          <CircularProgress />
        </div>
        <div>
          <Button onClick={() => this.setState({ open: true })}>Open message</Button>
          <Snackbar
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}
            open={this.state.open}
            autoHideDuration={3000}
            onClose={() => this.handleClose()}
            transition={Zoom}
            message={<span id="message-id">I am message ~</span>}
            action={[
              <IconButton key="undo" color="secondary" onClick={() => this.handleClose()}>
                close
              </IconButton>,
            ]}
          />
        </div>
        <div style={{margin: 20}}>
          <LinearProgress mode="query" />
          <br />
          <LinearProgress color="secondary" mode="query" />
        </div>
        <div>
          <Grid container spacing={24}>
            {DATA.map(i => (
              <Grid key={i} item xs={12} sm={4} lg={3}>
                <Icon color="secondary">{i}</Icon>
                {i}
              </Grid>
            ))}
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}
