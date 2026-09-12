import React from 'react'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    TopLine,
    TextWrapper,
    TextWrapperDescription,
    Column,
    Heading,
    Subtitle,
    Subtitle2,
    ColumnCenter,
    DescriptionLeft,
    Column2,
    Column3,
    Img,
    ImgCenterWrap,
    ImgCenter,
} from "./InfoElements";


const InfoSection = ({
                         lightBg,
                         id,
                         imgStart,
                         topLine,
                         lightText,
                         darkText,

                         headline1,
                         description1,
                         img1,
                         alt1,

                         descriptionLeft,
                         descriptionLeft2,
                         descriptionLeft3,

                         headline2,
                         description2,
                         img2,
                         alt2,

                         headline3,
                         description3,
                         img3,
                         alt3,

                         headline4,
                         description4,
                         img4,
                         alt4,


                         imgCenter,
                         altCenter,
                     }) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <TopLine>{topLine}</TopLine>

                    <Column>
                        <Img src={img1} alt={alt1} width='80' height='80'/>
                        <TextWrapper>
                            <Heading lightText={lightText}>{headline1}</Heading>
                            <Subtitle darkText={darkText}>{description1}</Subtitle>
                        </TextWrapper>
                    </Column>

                    <ColumnCenter>
                        <ImgCenterWrap>
                            <ImgCenter src={imgCenter} alt={altCenter} width='360' height='350'/>
                        </ImgCenterWrap>
                    </ColumnCenter>

                    <DescriptionLeft>
                        <TextWrapperDescription>
                            <Subtitle2 darkText={darkText}>{descriptionLeft}</Subtitle2>
                            <Subtitle2 darkText={darkText}>{descriptionLeft2}</Subtitle2>
                            <Subtitle2 darkText={darkText}>{descriptionLeft3}</Subtitle2>
                        </TextWrapperDescription>
                    </DescriptionLeft>

                    <Column2>
                        <Img src={img2} alt={alt2} width='80' height='80'/>
                        <TextWrapper>
                            <Heading lightText={lightText}>{headline2}</Heading>
                            <Subtitle darkText={darkText}>{description2}</Subtitle>
                        </TextWrapper>
                    </Column2>

                    <ColumnCenter>
                        <Img src={img3} alt={alt3} width='80' height='80'/>
                        <TextWrapper>
                            <Heading lightText={lightText}>{headline3}</Heading>
                            <Subtitle darkText={darkText}>{description3}</Subtitle>
                        </TextWrapper>
                    </ColumnCenter>

                    <Column3>
                        <Img src={img4} alt={alt4} width='80' height='80'/>
                        <TextWrapper>
                            <Heading lightText={lightText}>{headline4}</Heading>
                            <Subtitle darkText={darkText}>{description4}</Subtitle>
                        </TextWrapper>
                    </Column3>

                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection