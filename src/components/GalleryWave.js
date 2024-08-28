import { GalleryGrid, GalleryWaveContainer, HeaderContainer, ImgContainer, ImgWrapper, ShadowOverlay, StyledHeader } from "../styles/GalleryWaveStyles";
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

export default function GalleryWave({ images_arr, viewportWidth, text = "Add Text"}) {
    let numOfImagesPerRow;
    
    if (viewportWidth <= 500){
        numOfImagesPerRow = 8;
    } else if (viewportWidth > 500 && viewportWidth <= 900){
        numOfImagesPerRow = 9;
    } else if( viewportWidth > 900 && viewportWidth <= 1080){
        numOfImagesPerRow = 10;
    } else if ( viewportWidth > 1080 && viewportWidth <= 1450){
        numOfImagesPerRow = 11;
    } else if (viewportWidth > 1450 && viewportWidth <= 2560){
        numOfImagesPerRow = 12;
    } else {
        numOfImagesPerRow = viewportWidth / 250;
    }
    const desiredLength = numOfImagesPerRow * 4; // adjust this as needed
    
    const extendedImagesArr = extendArrayToLength(images_arr, desiredLength);
    // i need to break this down and make sure I understand it
    const extendedImagesArrWithAnimationIDs = extendedImagesArr.map((imgOBJ, index) => {
        const rowNumber = Math.floor(index / numOfImagesPerRow);
        const animation_id = (index % numOfImagesPerRow) + 1 + rowNumber;
        return { ...imgOBJ, animation_id };
    });

    const animateImages = () => {
        let currentAnimationID = 1;
        const maxAnimationID = numOfImagesPerRow + 4;
    
        const runAnimation = () => {
            const interval = setInterval(() => {
                // Remove .active class from all elements
                document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
    
                // Select elements with the current animation_id
                const selectedImgs = document.querySelectorAll(`.animation_id-${currentAnimationID}`);
    
                // Add .active class to the selected elements
                selectedImgs.forEach(el => el.classList.add('active'));
    
                // Move to the next animation_id
                currentAnimationID++;
    
                // Reset to 1 after reaching maxAnimationID
                if (currentAnimationID > maxAnimationID) {
                    clearInterval(interval); // Stop the current interval
                    currentAnimationID = 1;
    
                    // Start the animation again after 5 seconds
                    setTimeout(runAnimation, 3000);
                }
            }, 250); // Adjust this interval for timing between animation steps
        };
    
        runAnimation();
    };
    
    useEffect(() => {
        animateImages();
    }, []);
    
    
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
            <GalleryGrid numofimagesperrow={numOfImagesPerRow}>
                {GalleryWaveDisplay}
            </GalleryGrid>
            <ShadowOverlay />
            <HeaderContainer>
                <StyledHeader>{text}</StyledHeader>
            </HeaderContainer>
        </GalleryWaveContainer>
    );
}
