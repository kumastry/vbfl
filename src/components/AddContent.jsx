import React, {useState} from 'react';
import {IonList,IonItem,IonInput, IonTextarea, IonItemDivider, IonLabel,  IonToast, IonFab, IonFabButton, IonButton} from '@ionic/react';
import { pin, wifi, wine, warning, walk ,add} from 'ionicons/icons';
import Addbutton from './Addbutton';
import { useDispatch, useSelector } from 'react-redux'
import { addWord } from '../slices/cardSlice';

const AddContent = ({match}) => {
    const [wordtext, setWordText] = useState('');
    const [transtext, setTransText] = useState('');
    const [toast1, setToast1]  = useState(false);
    const dispatch = useDispatch();
    const Id = match.params;

    const  translatehandle = async () => {
        const res = await fetch(`https://script.google.com/macros/s/AKfycbzh5wdA-X_EqDKU6x2ZE32il0EqONbl6gqiVzhIENGSeoxYb-8C7Ud9E5t4gaOqIxZf5A/exec?text=${wordtext}&source=en&target=ja`); 
        const transjson = await res.json();
        console.log(transjson);
        if(transjson.text !== "Bad Request" ) {
            setTransText(transjson.text);
        }
    }


    const handleClick = () => {
        console.log(wordtext);
        console.log(444);
        console.log(Id.cardId);
        dispatch(
            addWord({
                Id:Id.cardId,
                word:wordtext,
                translate:transtext
            })
        )
      
        setTransText('');
        setWordText('');
        setToast1(true);
    }

    return(
      
        <IonList style={{height:'80%'}}>
        <IonItemDivider>
            <IonLabel><h1 style={{color:'black'}}>単語を追加</h1></IonLabel>
        </IonItemDivider>

        <IonItem>
            <IonInput value = {wordtext} placeholder = "単語を入力" onIonChange = {(e) => {setWordText(e.target.value)}}></IonInput>
        </IonItem>

        <IonItem>
            <IonTextarea value = {transtext} placeholder = "訳を入力" onIonChange = {(e) => {setTransText(e.target.value)}}></IonTextarea>
        </IonItem>
        
        
        <IonButton expand="block"　onClick = {translatehandle}>翻訳する</IonButton>
      

        <Addbutton handleClick = {handleClick}/>

        <IonToast
        isOpen = {toast1}
        onDidDismiss = {() => setToast1(false)}
        message = "単語を追加しました  "
        duration = {500}
        translucent = {true}
        />
        </IonList>

        
    
    );
}

export default AddContent;