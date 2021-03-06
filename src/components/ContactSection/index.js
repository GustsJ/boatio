import React from 'react'
import {
    ContactSectionContainer,
    ContactSectionEmailLink,
    ContactSectionText,
    ContactSectionTitle,
    ContactSectionInfo,
    ContactSectionEmail,
    ContactSectionImg
} from "./ContactElements";
import mail from "../../images/icon-mail.svg"

const ContactSection = () => {
    return (
        <>
            <ContactSectionContainer>
                <ContactSectionInfo>
                    <ContactSectionTitle>Vēlies uzzināt vairāk?</ContactSectionTitle>
                    <ContactSectionText>Sazinies ar mums, labprāt, atbildēsim uz Taviem
                        jautājumiem!</ContactSectionText>
                </ContactSectionInfo>
                <ContactSectionEmail>
                    <ContactSectionImg href="mailto:theboatioj@gmail.com"><img src={mail} alt="Boatio email icon" width='48' height='48'/></ContactSectionImg>
                    <ContactSectionEmailLink
                        href="mailto:theboatioj@gmail.com">theboatioj@gmail.com</ContactSectionEmailLink>
                </ContactSectionEmail>
            </ContactSectionContainer>
        </>
    )
}

export default ContactSection