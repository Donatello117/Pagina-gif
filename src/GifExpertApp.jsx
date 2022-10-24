import { useState } from 'react';
import { AddCategory, GifGrid } from './Components';

export const GifExpertApp= () => {

    const [Categories, setCategories] =useState([''])
    
    const onAddCategory= (newCategory) => {

        if (Categories.includes(newCategory)) return;

        //console.log(newCategory); 
        setCategories([newCategory, ...Categories]);
    }

    return ( 
        <>
            {/*titulo*/}
            <h1>GifExpertApp</h1> 

            {/*Imput*/}
            <AddCategory 
                onNewCategory={(value)=> onAddCategory(value)}
            />

            {/*Listado de gif*/}
                {
                    Categories.map((category) => (
                            <GifGrid 
                                key={category}
                                category={category}
                            />
                    ))
                }
        </>
     );
}