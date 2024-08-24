import { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import { 
    TintsWrapsStyled,
} from "../../styles/TintsWrapsPageStyles";
import GalleryWave from "../GalleryWave";

export default function TintsWrapsPage() {
    const { imagesArr } = useContext(Context);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <TintsWrapsStyled>
            <h1>{viewportWidth}</h1>
            <GalleryWave imagesArr={imagesArr}/>
        </TintsWrapsStyled>
    );
}
