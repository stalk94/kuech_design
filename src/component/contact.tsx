import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { send } from '../lib/engine';


export default function AddComent({useInfo, path}) {
    const [name, setName] = React.useState<string>();
    const [email, setEmail] = React.useState<string>();
    const [text, setText] = React.useState<string>();

    const sendMassage =()=> {
        if(name && name.length < 4) useInfo('warn', 'Nicht richtig', 'Der Name muss länger als 4 Zeichen sein');
        else if(email && email.length < 8) useInfo('warn', 'Nicht richtig', 'Email eingeben');
        else if(text && text.length < 10) useInfo('warn', 'Nicht richtig', 'Der Text muss länger als 10 Zeichen sein');
        else send(path, {name:name,email:email,text:text}).then((res)=> {
            useInfo('success', 'Erfolgreich', 'Ihr Kommentar wurde angenommen');
            setName();
            setEmail();
            setText();
        });
    }


    return(
        <div className='addComent'>
            <span>Name</span>
            <InputText
                value={name} 
                onChange={(e)=> setName(e.target.value)}
            />
            <span>E-mail</span>
            <InputText
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}   
            />
            <span>Text</span>
            <InputTextarea 
                rows={5} 
                cols={30} 
                value={text} 
                onChange={(e)=> setText(e.target.value)}
            />
            <Button style={{width:'50%', marginLeft:'auto', marginRight:'auto', marginTop:'15px'}}
                icon='pi pi-send'
                label='Send'
                onClick={sendMassage}
            />
        </div>
    );
}