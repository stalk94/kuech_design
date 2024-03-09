import React from 'react';
import { HeaderProps } from './type';
import { Menubar } from 'primereact/menubar';


const TextData =()=> {
    return(
        <div style={{position:'absolute', right:'0', color:'#fcfcfcba', marginRight:'2%', textShadow:'#000000d9 2px 3px'}}>
            <div style={{fontSize: '25px'}}>
                <i className="pi pi-map-marker"/> Tribseeser Str. 20a<br />
                <i className="pi pi-envelope"/> 18507 Grimmen<br />
                
                <i className="pi pi-phone"/> Tel.: 038326 / 53 70 40<br />
                <i className="pi pi-envelope"/>  E-Mail: <br />
                ml.kuechendesign@web.de<br />
            </div>
            <div style={{marginTop:'5%', color:'#b9b6b6', fontSize:'17px', textShadow:'#000 2px 3px'}}>
                Öffnungszeiten:<br />
        
                Montag - Freitag:<br />
                10:00 - 18:00 Uhr<br />
                Sa.: nach Vereinbarung
            </div>
        </div>
    );
}


export default function Header({useView}: HeaderProps) {
    const data = [{
            label: 'Startseite',
            icon: 'pi pi-fw pi-bars',
            command: ()=> useView('Startseite')
        },{
            label: 'Hersteller',
            icon: 'pi pi-fw pi-briefcase',
            command: ()=> useView('Hersteller')
        },{
            label: 'Galerie',
            icon: 'pi pi-fw pi-images',
            items: [{
                label:'Bad',
                icon:'pi pi-fw pi-images',
                command: ()=> useView('Bad')
            },{
                label:'Küchen',
                icon:'pi pi-fw pi-images',
                command: ()=> useView('Cuhen')
            }]
        },{
            label: 'Gästebuch',
            icon: 'pi pi-fw pi-book',
            command: ()=> useView('Gästebuch')
        },{
            label: 'Unser Team',
            icon: 'pi pi-fw pi-users',
            command: ()=> useView('Team')
        },{
            label: 'Impressum',
            icon: 'pi pi-fw pi-phone',
            command: ()=> useView('Impressum')
        },{
            label: 'Kontakt',
            icon: 'pi pi-fw pi-comments',
            command: ()=> useView('Kontakt')
        }
    ];
    

    return(
        <div>
            <TextData/>
            <div>
                <div style={{position:'absolute', display:'flex', flexDirection:'row'}}>
                    <var style={{fontSize:'35px',color:'#ffffff'}}>
                        M & L KÜCHEN
                    </var>
                    <var style={{fontSize:'35px',color:'#11c01c', marginLeft:'12px'}}>
                        DESIGN
                    </var>
                </div>
                <img 
                    style={{height:'300px', width: '100%'}}
                    src='../image/logo3.jpg'
                />
            </div>
            <Menubar model={data}/>
        </div>
    );
}