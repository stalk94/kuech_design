import React from 'react';
import globalState from "./global.state";
import { createRoot } from 'react-dom/client'
import "./style.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from 'primereact/toast';
import Header from "./component/header";
import Base from "./component/base";
import Guest from "./component/guest";
import Contact from './component/contact';
import { Kuhen, Bad } from './component/gallery';


const Impresum =()=> {
    return(
        <div style={{marginLeft:'5%'}}>
            <h2>Impressum:</h2>
            <h3 style={{marginLeft:'2%'}}>
                M & L KÜCHEN DESIGN <br />
                <i className="pi pi-map-marker"/> Tribseeser Str. 20a <br />
                <i className="pi pi-envelope"/> 18507 Grimmen <br />
                <i className="pi pi-phone"/> Tel.: 038326 / 53 70 40 <br />
                <i className="pi pi-envelope"/> E-Mail: ml.kuechendesign@web.de <br />
                <i className="pi pi-user"/> Inh.: Liudmyla Lauf <br />
                <i className="pi pi-link"/> Steuer Nr.: 082 / 243 / 03565 <br />
                <i className="pi pi-link"/> Ust-IdNr.:  DE815331496
            </h3>
            
        </div>
    );
}
const Hersteller =()=> {
    return(
        <div style={{marginLeft:'15%'}}>
        <div style={{display:"flex", flexDirection:'row', flexWrap:'wrap', marginTop:'5%'}}>
            <div style={{marginLeft:'15px'}}>
                <img src='./image/parther_1.png'/>
            </div>
            <div style={{marginLeft:'15px'}}>
                <img src='./image/parther_2.png'/>
            </div>
            <div style={{marginLeft:'15px'}}>
                <img src='./image/parther_3.png'/>
            </div>
            <div style={{marginLeft:'15px'}}>
                <img src='./image/parther_4.png'/>
            </div>
        </div>
        <div style={{display:"flex", flexDirection:'row', flexWrap:'wrap', marginTop:'5%', marginBottom:'5%'}}>
             <div style={{marginLeft:'15px'}}>
                <img src='./image/parther_5.png'/>
            </div>
            <div style={{marginLeft:'15px'}}>
                <img src='./image/parther_6.png'/>
            </div>
            <div style={{marginLeft:'15px'}}>
                <img src='./image/parther_7.png'/>
            </div>
            <div style={{marginLeft:'15px'}}>
                <img src='./image/parther_8.png'/>
            </div>
        </div>
        </div>
    );
}
const Team =()=> {
    return(
        <div style={{marginLeft:'5%', marginBottom:'5%'}}>
            <h2>Unser Team:</h2>
            <h3 style={{marginLeft:'2%'}}>
                Sie benötigen fachkundige Beratung? Dann sind Sie bei uns 
                genau richtig. 
                Egal ob Sie Ihre Küche ergänzen wollen, neue 
                Elektrogeräte benötigen oder eine neue Küche planen. 
                Wir verfügen über langjährige Erfahrungen im 
                Küchensegment.
            </h3>
            <h3 style={{marginLeft:'2%'}}>
                Unsere Fachgebiete sind individuelle Planung, Beratung und Montage.
            </h3>
            <h3 style={{marginLeft:'2%'}}>
                Um Wartezeiten zu vermeiden, empfehlen wir Ihnen, einen Termin zu vereinbaren. 
                So können wir uns genügend Zeit für Sie nehmen und eine intensive Betreuung 
                gewährleisten.
            </h3>     
        </div>
    );
}


function App() {
    const [view, setView] = React.useState();
    const toast = React.useRef(null);

    const showToast =(type, title, text)=> {
        toast.current.show({
            severity: type, 
            summary: <>{ title }</>, 
            detail: text, 
            life: 2000
        });
    }
    const useView =(value)=> {
        if(value==='Startseite') setView(<Base />);
        else if(value==='Hersteller') setView(<Hersteller />);
        else if(value==="Gästebuch") setView(<Guest useInfo={showToast}/>);
        else if(value==='Kontakt') setView(<Contact useInfo={showToast}/>);
        else if(value==='Impressum') setView(<Impresum />);
        else if(value==='Cuhen') setView(<Kuhen />);
        else if(value==='Bad') setView(<Bad />);
        else if(value==='Team') setView(<Team />);
        else setView();
    }
    React.useEffect(()=> setView(<Base />), []);


    return(
        <>
            <Toast position="bottom-left" ref={toast} />
            <Header useView={useView} />
            { view }
            <footer style={{textAlign:"center",backgroundColor:"#000000bd",marginTop:'15px',color:'white'}}>
                © KÜCHEN DESIGN { new Date().getFullYear() }
            </footer>
        </>
    );
}




window.onload =()=> createRoot(document.querySelector(".root")).render(
    <App/>
);