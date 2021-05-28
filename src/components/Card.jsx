import React, { useState } from 'react';
import { IonActionSheet, IonButton, IonCard, IonCardHeader, IonCardTitle } from "@ionic/react"
import { trash, share, caretForwardCircle, heart, close } from 'ionicons/icons';


const Card= (props) => {
    const [showActionSheet, setShowActionSheet] = useState(false);
    return (
        <IonCard onClick={() => setShowActionSheet(true)}>
            <IonCardHeader>
            <IonCardTitle>{props.cardContent.title}</IonCardTitle>
            </IonCardHeader>
            <IonActionSheet
            isOpen={showActionSheet}
            onDidDismiss={() => setShowActionSheet(false)}
            buttons={[
                {
                    text:'Delete',
                    role:'destructive',
                    icon: trash,
                    handler: () => {
                        props.deleteCard(props.key);
                    }
                },
                {
                    text: 'Play (open modal)',
                    icon: caretForwardCircle,  
                    handler: () => {
                        document.location.href = "./tab1/words";
                    }
                },
                {
                    text:'Cancel',
                    role:'cancel',
                    icon: close,
                },
          
            ]}>

            </IonActionSheet>
        </IonCard>
    )
}

export default Card;