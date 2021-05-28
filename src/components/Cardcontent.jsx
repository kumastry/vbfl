import React, {useState} from 'react';
import {IonItem,IonIcon , IonLabel,IonSlides, IonSlide, IonContent, IonCard, IonModal, IonButton, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle} from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';



const SlideOpts = {
    initialSlide:0,
    speed:300
};

const array = ['int', 'string', 'float', 'mod'];
const Cardcontent = () => {

    return(
        <IonContent>
            <IonModal isOpen={true} swipeToClose={true} cssClass='my-custom-class' style = {{color:'red'}}>
            <IonSlides  options={SlideOpts} >
                {array.map((i) => {
                    return(
                        <IonSlide>
                            <IonCard > 
                                <IonItem>
                                    {i}
                                </IonItem>
                            </IonCard>
                        </IonSlide>
                    );
                }) }
            </IonSlides>
            </IonModal>
        </IonContent>
    );
}

export default Cardcontent;