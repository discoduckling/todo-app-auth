import React from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';

const About = () => {
    return (
        <Container textAlign='center'>
            <Grid stackable columns={2} style={{ marginTop: '50px' }}>
                <Grid.Column width={7}>
                    <div id='landing-left'>
                        <span >About</span>
                    </div>
                </Grid.Column>
                <Grid.Column width={9}>
                    <Segment style={{ backgroundColor: 'rgba(255,255,255,.3)', color: 'white', textAlign: 'left' }}>
                        <div>Like all the other todo apps out there, this was made as a way to practice full stack application development.</div>

                        <h3>Features include:</h3>
                        <ul>
                            <li>Data persistence using MongoDB</li>
                            <li>Express backend</li>
                            <li>React frontend + Redux + Redux Form</li>
                            <li>CSS styling using Semantic-UI</li>
                            <li>Authentication using Auth0</li>
                            <li>Deployment to Heroku</li>
                        </ul>
                    </Segment>
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default About;