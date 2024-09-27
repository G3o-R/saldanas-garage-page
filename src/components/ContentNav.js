import { NavContainer, NavWrapper, Navigator } from "../styles/ContentNavStyles";


export default function ContentNav(){

    return(
        <NavWrapper>
            <NavContainer>
                <Navigator>
                    <h2>About</h2>
                    <h2>Tints</h2>
                        <h4>Pro-Nano</h4>
                        <h4>C2 Carbon</h4>
                </Navigator>
            </NavContainer>
        </NavWrapper>
    )
}