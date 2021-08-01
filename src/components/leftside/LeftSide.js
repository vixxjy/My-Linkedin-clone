import React from 'react'
import { Container, ArtCard, UserInfo, CardBackground, Photo, Link, AddPhotoText,
Widget, Item, CommunityCard } from './LeftSide.styles'

const LeftSide = (props) => {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground />
                    <a href="#!">
                        <Photo />
                        <Link>Welcome, there!</Link>
                    </a>
                    <a href="#!">
                        <AddPhotoText>
                            <AddPhotoText>Add a Photo</AddPhotoText>
                        </AddPhotoText>
                    </a>
                </UserInfo>
                <Widget>
                    <a href="#!">
                        <div>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </div>
                        <img src="/images/widget-icon.svg" alt="widget" />
                    </a>
                </Widget>
                <Item>
                    <span>
                        <img src="/images/item-icon.svg" alt="item" />
                        My Items
                    </span>
                </Item>
                <CommunityCard>
                    <a href="#!">
                        <span>
                            Groups
                        </span>
                    </a>
                    <a href="#!">
                        <span>
                            Events
                            <img src="/images/plus-icon.svg" alt="plus"/>
                        </span>
                    </a>
                    <a href="#!">
                        <span>
                            Follow Hashtags
                        </span>
                    </a>
                    <a href="#!">
                        <span>
                            Discover more
                        </span>
                    </a>
                </CommunityCard>
            </ArtCard>
        </Container>
    )
};

export default LeftSide