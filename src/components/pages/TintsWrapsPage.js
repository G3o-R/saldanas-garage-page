import { 
    TintsWrapsStyled,
} from "../../styles/TintsWrapsPageStyles";

const getRangeBetween = (ini, end) => 
    Array.from({length:end},(v, i)=> i+1).filter( x => x >= ini && x <= end);

export default function TintsWrapsPage(){
     
    

    return(
        <TintsWrapsStyled>
        </TintsWrapsStyled>
    )
}