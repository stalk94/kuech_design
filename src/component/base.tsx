import React from 'react';
import { Carousel } from 'primereact/carousel';
import { Loader, } from "@googlemaps/js-api-loader";


const loader = new Loader({
    apiKey: 'AIzaSyA2FhYTZTXadhbwufZfDOOJP2Aq3jfOxMA',
    version: "weekly"
});
async function initMap(element: HTMLElement) {
    await loader.load();
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    
    const map = new Map(element, {
        center: {lat: 54.10746249313291, lng: 13.026980803494352},
        zoom: 17,
        mapId: "4504f8b37365c3d0"
    });
    const marker = new AdvancedMarkerElement({
        map: map, 
        position: {lat: 54.10746249313291, lng: 13.026980803494352},
    });
}


export default function Base() {
    const products = ['../image/1.jpg', '../image/6.jpg', '../image/3.jpg', '../image/5.jpg', '../image/4.jpg'];

    const productTemplate =(product: string)=> {
        return <img 
            src={product}
            height='200px'
        />
    }
    React.useEffect(()=> {
        initMap(document.querySelector('.map'));
    }, []);

    
    return(
        <>
            <h2 style={{textAlign:'center'}}>
                Ihre Traumküche - individuell und einzigartig
            </h2>
            <h4 style={{textAlign:'center'}}>
                lassen Sie sich von dem vielfältigen Angebot unserer Musterküchen <br />
                inspirieren und stellen Sie Ihre Traumküche nach Ihren Wünschen 
                zusammen.
            </h4>
            <Carousel 
                circular={true}
                autoplayInterval={3000}
                numVisible={3} 
                numScroll={1}
                value={products} 
                itemTemplate={productTemplate}
            />
            <div className='mapContainer'>
                <h2 style={{textAlign:'center'}}>Wo sind wir ansässig 🗺️</h2>
                <div className='map' 
                    style={{width:'50%', height:'50%', marginLeft:'auto', marginRight:'auto'}}
                >
                </div>
            </div>
        </>
    );
}