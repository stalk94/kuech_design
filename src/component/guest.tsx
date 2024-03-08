import React from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import AddComent from './contact';
import { useHookstate } from '@hookstate/core';
import globalState from '../global.state';



export default function Header({useInfo}) {
    const comment = useHookstate(globalState.comment);


    return(
        <div className='guest'>
            <div className='guestComments'>
                <BlockUI blocked={false}>
                    {comment.get().map((elem, index)=> 
                        <Panel key={index} style={{marginTop:'10px'}}
                            header={
                                <div style={{display:'flex', flexDirection:'row'}}>
                                    <div>
                                        {elem.name}
                                    </div>
                                    <div style={{position:'absolute', right:'0', marginRight:'10%'}}>
                                        {elem.time}
                                    </div>
                                </div>
                            }
                        >
                            { elem.text }  
                        </Panel>
                    )}
                </BlockUI>
            </div>
            <hr style={{marginTop:'10px'}}/>
            <h3 style={{marginLeft:'30%', marginTop:'3%'}}>
                Eintragung ins Gästebuch:
            </h3>
            <AddComent useInfo={useInfo} path='laufApiComment'/>
        </div>
    );
}