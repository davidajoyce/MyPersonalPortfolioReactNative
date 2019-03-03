import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component{
  render(){
      return(
        <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h2>David Joyce</h2>
              <img
                 src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                 alt="avatar"
                 style={{height: '250px'}}
                 />
                 <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                 This is example text to be filled allalalallajddiirjd</p>
            </Cell>
            <Cell col={6}>
              <h2>Contact Me</h2>
              <hr/>

              <List>
                <ListItem>
                 <ListItemContent icon="person">Bryan Cranston</ListItemContent>
                </ListItem>
                <ListItem>
                 <ListItemContent icon="person">Aaron Paul</ListItemContent>
                </ListItem>
                <ListItem>
                 <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                </ListItem>
              </List>

            </Cell>
          </Grid>
        </div>
      )
    }
}

export default Contact;
