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

export default function GalleryWave({ images_arr, viewportWidth }) {
    // const desiredLength = 24; // 370px - 640px
    // const desiredLength = 28; //645px -770px
    // const desiredLength = 32; // 775px - 870px
    const desiredLength = 36


    const extendedImagesArr = extendArrayToLength(images_arr, desiredLength);

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
