import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import demoGif from './todo_app_demo.gif';

const Landing = () => {
    return (
        <Container textAlign='center'>
            <Grid stackable columns={2} style={{ marginTop: '50px' }}>
                <Grid.Column width={7}>
                    <div id='landing-left'>
                        <span >Another Todo App</span>
                    </div>
                </Grid.Column>
                <Grid.Column width={9}>
                        <img src={demoGif} alt='Demo' />
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default Landing;