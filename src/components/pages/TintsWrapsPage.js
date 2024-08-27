import { useContext, useEffect, useState } from "react";
import { 
    TintsWrapsStyled,
} from "../../styles/TintsWrapsPageStyles";
import GalleryWave from "../GalleryWave";

export default function TintsWrapsPage({images_arr}) {
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
            <GalleryWave images_arr={images_arr} viewportWidth={viewportWidth}/>
            <h1>{viewportWidth}</h1>
        </TintsWrapsStyled>
    );
}
