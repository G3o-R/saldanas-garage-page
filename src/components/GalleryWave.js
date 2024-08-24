import { GalleryGrid, GalleryWaveContainer, ImgContainer, ImgWrapper } from "../styles/GalleryWaveStyles";
import { useState, useEffect } from "react";

const extendArrayToLength = (array, desiredLength) => {
    const extendedArray = [];
    let currentLength = 0;

    while (currentLength < desiredLength) {
        const remainingLength = desiredLength - currentLength;

        if (remainingLength < array.length) {
            extendedArray.push(...array.slice(0, remainingLength));
            currentLength += remainingLength;
        } else {
            extendedArray.push(...array);
            currentLength += array.length;
        }
    }

    return extendedArray;
};

export default function GalleryWave({ imagesArr }) {
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

    const desiredLength = 4;
    const extendedImagesArr = extendArrayToLength(imagesArr, desiredLength);

    const GalleryWaveDisplay = extendedImagesArr.map((imgObj, index) => {
        return (
            <ImgWrapper key={`${imgObj.id}-${index}`}>
                <ImgContainer>
                    <img src={imgObj.image} alt="alt text here" />
                </ImgContainer>
            </ImgWrapper>
        );
    });

    return (
        <GalleryWaveContainer>
            <GalleryGrid>
                {GalleryWaveDisplay}
            </GalleryGrid>
        </GalleryWaveContainer>
    );
}
