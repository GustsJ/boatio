import Background from '../../images/boatio-background.jpg'
import {
    HeroContainer,
    HeroBg,
    HeroBgImg,
    HeroContent,
    HeroTopBlock,
    HeroH,
    HeroP,
} from "./HeroElements";

const HeroSection = () => {
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
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection