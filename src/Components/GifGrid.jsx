import { GifItem } from "./Gifitem";
import { usesFechtGifs } from "../hooks/usesFechtGifs";

export const GifGrid= ({category})=> {

    const {images, isLoading}= usesFechtGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
               isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">
                {
                    images.map((image)=> (
                        <GifItem 
                            key={image.id}
                            {...image}
                        />
                    ))
                }
                
            </div>
            
        </>
    )
}