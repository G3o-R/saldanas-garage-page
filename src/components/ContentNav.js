import { NavContainer, NavWrapper, Navigator } from "../styles/ContentNavStyles";


export default function ContentNav({handleSlideTo}){

    return(
        <NavWrapper>
            <NavContainer>
                <Navigator>
                    <h2 onClick={()=> handleSlideTo(0)}>About</h2>
                    <h2 onClick={()=> handleSlideTo(1)}>Pro-Nano</h2>
                    <h2 onClick={()=> handleSlideTo(2)}>C2 Carbon</h2>
                </Navigator>
            </NavContainer>
        </NavWrapper>
    )
}