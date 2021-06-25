import React, {useEffect, useState} from 'react';
import {IonItem,IonIcon , IonLabel,IonSlides, IonSlide, IonContent, IonCard, IonModal, IonButton, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonHeader, IonList} from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import Addbutton from './Addbutton';


const SlideOpts = {
    initialSlide:0,
    speed:300
};


const Cardcontent = () => {
    const [wordState, setWordState] = useState(['init']);
    useEffect(() => {
        if(localStorage.array){ 
            const saveDate = JSON.parse(localStorage.array);
            setWordState(saveDate);
        }
    },[])
    
    useEffect(() => {
        localStorage.setItem('array', JSON.stringify(wordState));
    },[wordState]);
    

    const addWord = () => {
        let data = [];
        wordState.forEach(element => {
            data.push(element);
        });
        console.log(wordState.length);
        console.log(data);
        data.push('momo')
        setWordState(data);
        console.log(wordState);
    }

    return(
      
        <IonContent>
      
            <IonList pager={true} options={SlideOpts} style={{height:'100%'}} >
                {wordState.map((i) => {
                    return(
                        <IonItem>
                            <IonCard style={{ height:'50%',width:'90%'}}>
                                <IonCardContent>
                                    <h1>{i}</h1>
                                    <p><br/></p>
                                    <h2>yaku</h2>
                                </IonCardContent>
                            </IonCard>
                        </IonItem>
                    );
                }) }
            </IonList>
            <Addbutton handleClick = {addWord}/>
        </IonContent>
    );
}

export default Cardcontent;