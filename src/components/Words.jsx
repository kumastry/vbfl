import React, {useEffect, useState} from 'react';
import {IonItem,IonIcon , IonLabel,IonSlides, IonSlide, IonContent, IonCard, IonModal, IonButton, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonHeader} from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import Addbutton from './Addbutton';


const SlideOpts = {
    initialSlide:0,
    speed:300
};


const Cardcontent = () => {
    const [wordState, setWordState] = useState([]);
    useEffect(() => {
        setWordState(['int', 'mod']);
    },[])

    const addWord = () => {
        const data = wordState;
        data.push('momo')
        setWordState(data);
        console.log(wordState);
    }

    return(
      
        <IonContent>
      
            <IonSlides pager={true} options={SlideOpts} style={{height:'100%'}} >
                {wordState.map((i) => {
                    return(
                        <IonSlide>
                            <IonCard style={{ height:'50%',width:'90%'}}>
                                <IonCardContent>
                                    <h1>{i}</h1>
                                    <p><br/></p>
                                    <h2>yaku</h2>
                                </IonCardContent>
                            </IonCard>
                        </IonSlide>
                    );
                }) }
            </IonSlides>
            <Addbutton handleClick = {addWord}/>
        </IonContent>
    );
}

export default Cardcontent;