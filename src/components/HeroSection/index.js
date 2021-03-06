import React, {useState} from 'react'
import Background from '../../images/boatio-background.jpg'
import {
    HeroContainer,
    HeroBg,
    HeroBgImg,
    HeroContent,
    HeroTopBlock,
    HeroH,
    HeroP,
    HeroBtnWrapper,
} from "./HeroElements";
import {Button} from "../ButtonElement";

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <HeroBgImg src={Background} alt='Boatio mini house from outside' type='image'/>
            </HeroBg>
            <HeroContent>
                <HeroTopBlock>
                <HeroH>Ahoi!</HeroH>
                <HeroP>
                    Laipni lūgti naktsmītnē virs ūdens, kurā sajutīsiet īsto vasaras burvību
                </HeroP>
                </HeroTopBlock>
                <HeroBtnWrapper>
                    <Button to='rezervacijas' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='false'
                            smooth={true} duration={500} spy={true} exact='true'
                            offset={0}>
                        Rezervēt {hover}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection