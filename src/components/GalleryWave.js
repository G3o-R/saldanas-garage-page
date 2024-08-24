import { GalleryWaveContainer } from "../styles/GalleryWaveStyles";


export default function GalleryWave({photoArr}){

    const gallaryNumberExample = getRangeBetween(1, 45)

    const exampleGallery = gallaryNumberExample.map((int) => (
       <div className="img-wrapper">
           <div className="img-container">
               <h4>{int}</h4>
           </div>

       </div>
    ))

    
    return(
        <GalleryWaveContainer>

        </GalleryWaveContainer>
    )
}