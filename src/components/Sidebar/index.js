import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <li><SidebarLink to='par-mums' onClick={toggle}>Par Mums</SidebarLink></li>
                    <li><SidebarLink to='rezervacijas' onClick={toggle}>Rezervācija</SidebarLink></li>
                    <li><SidebarLink to='sasniegumi' onClick={toggle}>Sasniegumi</SidebarLink></li>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar