import React from 'react'
import { Container, Content, Logo, Search, SearchIcon, Nav,
NavListWrap, NavList, User, Work, SignOut } from './Header.styles'

const Header = (props) => {
    return (

        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="/images/home-logo.svg" alt="home logo"/>
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" name="" placeholder="Search" />
                    </div>
                    <SearchIcon>
                    <img src="/images/search-icon.svg" alt="" />
                    </SearchIcon>
                </Search>
                <Nav>
                   <NavListWrap>
                       <NavList className="active">
                            <a href="/home">
                                <img src="/images/nav-home.svg" alt="nav home logo"/>
                                <span>Home</span>
                            </a>
                       </NavList>
                       <NavList>
                            <a href="#!">
                                <img src="/images/nav-network.svg" alt="nav home logo"/>
                                <span>My network</span>
                            </a>
                       </NavList>
                       <NavList>
                            <a href="#!">
                                <img src="/images/nav-jobs.svg" alt="nav home logo"/>
                                <span>Jobs</span>
                            </a>
                       </NavList>
                       <NavList>
                            <a href="#!">
                                <img src="/images/nav-messaging.svg" alt="nav home logo"/>
                                <span>Messaging</span>
                            </a>
                       </NavList>
                       <NavList>
                            <a href="#!">
                                <img src="/images/nav-notifications.svg" alt="nav home logo"/>
                                <span>Notifications</span>
                            </a>
                       </NavList>
                       <User>
                            <a href="#!">
                                <img src="/images/user.svg" alt="users" />
                                <span>Me</span>
                                <img src="/images/down-icon.svg" alt="down" />
                            </a>

                            <SignOut>
                            <a href="#!">
                                Sign Out
                            </a>
                            </SignOut>
                       </User>
                       <Work>
                            <a href="#!">
                                <img src="/images/nav-work.svg" alt="users" />
                                <span>Work
                                <img src="/images/down-icon.svg" alt="down" />
                                </span>
                            </a>
                       </Work>
                   </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
}

export default Header