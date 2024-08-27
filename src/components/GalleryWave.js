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
    const desiredLength = 24; // adjust this as needed
    const numOfImagesPerRow = desiredLength / 4;

    const extendedImagesArr = extendArrayToLength(images_arr, desiredLength);
// i need to break this down and make sure I understand it
    const extendedImagesArrWithAnimationIDs = extendedImagesArr.map((imgOBJ, index) => {
        const rowNumber = Math.floor(index / numOfImagesPerRow);
        const animation_id = (index % numOfImagesPerRow) + 1 + rowNumber;
        return { ...imgOBJ, animation_id };
    });

    const GalleryWaveDisplay = extendedImagesArrWithAnimationIDs.map((imgObj, index) => {
        return (
            <ImgWrapper key={`${imgObj.id}-${index}`}>
                <ImgContainer className={`animation_id-${imgObj.animation_id}`}>
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
