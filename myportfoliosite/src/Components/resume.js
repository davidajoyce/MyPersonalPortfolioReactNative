import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component{
  render(){
      return(
        <div>
           <Grid>
             <Cell col={4}>
               <div style={{textAlign: 'center'}}>
                  <img
                    src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                    alt="avatar"
                    style={{height: '200px'}}
                  />
               </div>

               <h2 style={{paddingTop: '2em'}}>David Joyce</h2>
               <h4 style={{color: 'grey'}}>Programmer</h4>
               <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
               <p>This is an example paragraph text to be filled in.
               </p>
               <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
               <h5>Address</h5>
               <p>1 Hacker Way Menlo Park, 94025</p>
               <h5>Phone</h5>
               <p>+44 749 057 0890</p>
               <h5>Email</h5>
               <p>davidajoyce141@gmail.com</p>
               <h5>Web</h5>
               <p>mywebsite.com</p>
               <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

             </Cell>
             <Cell className="resume-right-col" col={8}>
                <h2>Education</h2>
             </Cell>
           </Grid>
        </div>
      )
    }
}

export default Resume;
