import React from 'react';
import { Carousel } from 'primereact/carousel';


export function Kuhen() {
    const farbtausch = ['../image/1.jpg', '../image/6.jpg', '../image/3.jpg', '../image/5.jpg', '../image/4.jpg'];
    const burger = ['../image/1.jpg', '../image/6.jpg', '../image/3.jpg', '../image/5.jpg', '../image/4.jpg'];
    const bauForMat = ['../image/1.jpg', '../image/6.jpg', '../image/3.jpg', '../image/5.jpg', '../image/4.jpg'];
    const burgerLandHaus = ['../image/1.jpg', '../image/6.jpg', '../image/3.jpg', '../image/5.jpg', '../image/4.jpg'];

    const productTemplate =(product: string, name: string)=> (
        <div className='cart'>
            <img
                src={product}
                height='200px'
                alt={name}
            />
        </div>
    );
    

    return(
        <>
            <div style={{backgroundColor:'#0000001a'}}>
                <h3 style={{marginLeft: '4%'}}>
                    Farbtausch
                </h3>
                <Carousel numVisible={4} numScroll={1}
                    value={farbtausch} 
                    itemTemplate={(product)=> productTemplate(product, 'photo farbtausch')}
                />
            </div>
            <div style={{backgroundColor:'#0000001a'}}>
                <h3 style={{marginLeft: '4%'}}>
                    Burger
                </h3>
                <Carousel numVisible={4} numScroll={1}
                    value={burger} 
                    itemTemplate={(product)=> productTemplate(product, 'photo burger')}
                />
            </div>
            <div style={{backgroundColor:'#0000001a'}}>
                <h3 style={{marginLeft: '4%'}}>
                    Bau-for-mat
                </h3>
                <Carousel numVisible={4} numScroll={1}
                    value={bauForMat} 
                    itemTemplate={(product)=> productTemplate(product, 'photo bau for mat')}
                />
            </div>
            <div style={{backgroundColor:'#0000001a'}}>
                <h3 style={{marginLeft: '4%'}}>
                    Burger-Landhaus
                </h3>
                <Carousel numVisible={4} numScroll={1}
                    value={burgerLandHaus} 
                    itemTemplate={(product)=> productTemplate(product, 'photo landhaus')}
                />
            </div>
        </>
    );
}

export function Bad() {
    const farbtausch = ['../image/1.jpg', '../image/6.jpg', '../image/3.jpg', '../image/5.jpg', '../image/4.jpg'];
    const burger = ['../image/1.jpg', '../image/6.jpg', '../image/3.jpg', '../image/5.jpg', '../image/4.jpg'];
    const bauForMat = ['../image/1.jpg', '../image/6.jpg', '../image/3.jpg', '../image/5.jpg', '../image/4.jpg'];
    const burgerLandHaus = ['../image/1.jpg', '../image/6.jpg', '../image/3.jpg', '../image/5.jpg', '../image/4.jpg'];

    const productTemplate =(product: string, name: string)=> (
        <div className='cart'>
            <img
                src={product}
                height='200px'
                alt={name}
            />
        </div>
    );
    

    return(
        <>
            <div style={{backgroundColor:'#0000001a'}}>
                <h3 style={{marginLeft: '4%'}}>
                    Farbtausch
                </h3>
                <Carousel numVisible={4} numScroll={1}
                    value={farbtausch} 
                    itemTemplate={(product)=> productTemplate(product, 'photo farbtausch')}
                />
            </div>
            <div style={{backgroundColor:'#0000001a'}}>
                <h3 style={{marginLeft: '4%'}}>
                    Burger
                </h3>
                <Carousel numVisible={4} numScroll={1}
                    value={burger} 
                    itemTemplate={(product)=> productTemplate(product, 'photo burger')}
                />
            </div>
            <div style={{backgroundColor:'#0000001a'}}>
                <h3 style={{marginLeft: '4%'}}>
                    Bau-for-mat
                </h3>
                <Carousel numVisible={4} numScroll={1}
                    value={bauForMat} 
                    itemTemplate={(product)=> productTemplate(product, 'photo bau for mat')}
                />
            </div>
            <div style={{backgroundColor:'#0000001a'}}>
                <h3 style={{marginLeft: '4%'}}>
                    Burger-Landhaus
                </h3>
                <Carousel numVisible={4} numScroll={1}
                    value={burgerLandHaus} 
                    itemTemplate={(product)=> productTemplate(product, 'photo landhaus')}
                />
            </div>
        </>
    );
}