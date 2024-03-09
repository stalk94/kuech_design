import React from 'react';
import { GuestProps } from './type';
import AddComent from './add_comment_form';



export default function Contact({useInfo}: GuestProps) {
    
    return(
        <>
            <h3 style={{textAlign:'center',backgroundColor:'#0000001a'}}>
                Schreiben Sie uns und wir werden Ihnen antworten 🖊️
            </h3>
            <AddComent useInfo={useInfo} path='laufApiContact'/>
        </>
        
    );
}