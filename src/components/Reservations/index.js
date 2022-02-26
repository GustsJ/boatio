import React from 'react'
import booking from '../../images/image-booking.png'
import airbnb from '../../images/image-airbnb.png'
import {
    ServicesContainer,
    ServicesH,
    ServicesSubtitle,
    TitleWrapper,
    ServicesWrapper,
    ServicesH2,
    ServicesCard,
    CardWrapper,
    ServicesButton
} from "./ServicesElements";

const Services = () => {
    return (
        <ServicesContainer id='rezervacijas' to='/'>
            <TitleWrapper>
                <ServicesH>Rezervē atpūtu</ServicesH>
                <ServicesSubtitle>Izvēlies sev ērtāko rezervācijas veidu</ServicesSubtitle>
            </TitleWrapper>
            <ServicesWrapper>
                <CardWrapper>
                    <ServicesCard href='https://www.booking.com/Share-kNRWu7' target='blank' aria-label='Booking' style={{backgroundImage: `url(${booking})`}}>
                        <ServicesH2>Booking</ServicesH2>
                    </ServicesCard>
                    <ServicesButton href='https://www.booking.com/Share-kNRWu7' target='blank' aria-label='Booking'>Rezervēt</ServicesButton>
                </CardWrapper>
                <CardWrapper>
                    <ServicesCard href='https://www.airbnb.com.mt/rooms/49834849' target='blank' aria-label='AirBnb' style={{backgroundImage: `url(${airbnb})`}}>
                        <ServicesH2>Airbnb</ServicesH2>
                    </ServicesCard>
                    <ServicesButton href='https://www.airbnb.com.mt/rooms/49834849' target='blank' aria-label='AirBnb'>Rezervēt</ServicesButton>
                </CardWrapper>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services