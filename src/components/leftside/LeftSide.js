import React from 'react'
import { Container, ArtCard, UserInfo, CardBackground, Photo, Link, AddPhotoText } from './LeftSide.styles'

const LeftSide = (props) => {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground />
                    <a>
                        <Photo />
                        <Link>Welcome, there!</Link>
                    </a>
                    <a>
                        <AddPhotoText>
                            <AddPhotoText>Add a Photo</AddPhotoText>
                        </AddPhotoText>
                    </a>
                </UserInfo>
            </ArtCard>
        </Container>
    )
};

export default LeftSide