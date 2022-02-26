import React from 'react'
import {AwardTextWrapper, AwardSubtitle, AwardTitle, AwardImage, AwardContainer} from "./AwardsElements";
import awardImg from "../../images/theboatio-booking-award.png"


const AwardsSection = () => {
    return (
        <>
            <AwardContainer id='sasniegumi'>
                <AwardTextWrapper>
                    <AwardTitle>Mūsu <br/> sasniegumi</AwardTitle>
                    <AwardSubtitle>Šeit gadu gaitā krāsim mūsu naktsmītnes sasniegumus</AwardSubtitle>
                </AwardTextWrapper>
                <AwardImage><img src={awardImg} alt="The Boatio Booking Award"/></AwardImage>
            </AwardContainer>
        </>
    )
}

export default AwardsSection