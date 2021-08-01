import React from 'react'
import { Container, Section, Layout } from './Home.styles';
import LeftSide from './leftside/LeftSide'
import Main from './main/Main';
import RightSide from './rightside/RightSide';

const Home = (props) => {
    return (
        <Container>
            <Section>
                <h5><a href="!#">Hiring in a hurry? -</a></h5>
                <p>Find talented pros in record time with Upwork and keep business Moving.</p>
            </Section>
            <Layout>
                <LeftSide />
                <Main />
                <RightSide />
            </Layout>
        </Container>
    )
};

export default Home;