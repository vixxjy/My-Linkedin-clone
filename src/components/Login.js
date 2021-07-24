import React from 'react'
import { Container, Nav, Join, SignIn, Section, Hero, Form, Google } from './Login.styles';

const Login = (props) => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg" alt="login logo" />
                </a>
                <div>
                    <Join>
                        Join Now
                    </Join>
                    <SignIn>Sign In</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src="/images/login-hero.svg" alt="hero logo"/>
                </Hero>
                <Form>
                    <Google>
                        <img src="/images/google.svg" alt="google logo" />
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
}

export default Login;