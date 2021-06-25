import React, {useState} from 'react';
import {IonList,IonItem,IonInput, IonTextarea, IonItemDivider, IonLabel} from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import Addbutton from './Addbutton';

const AddContent = () => {
    const [wordtext, setWordText] = useState('');
    const [transtext, setTransText] = useState('');
    return(
      
        <IonList style={{height:'80%'}}>
        <IonItemDivider>
            <IonLabel><h1 style={{color:'black'}}>単語を追加</h1></IonLabel>
        </IonItemDivider>

        <IonItem>
            <IonInput value = {wordtext} placeholder = "単語を入力" onChange = {(e) => {setWordText(e.target.value)}}></IonInput>
        </IonItem>

        <IonItem>
            <IonTextarea value = {transtext} placeholder = "訳を入力" onChange = {(e) => {setTransText(e.target.value)}}></IonTextarea>
        </IonItem>

        <Addbutton/>
        </IonList>

        
    
    );
}

export default AddContent;