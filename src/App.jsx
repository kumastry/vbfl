import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
<<<<<<< HEAD:src/App.jsx
import { ellipse, square, triangle, book } from 'ionicons/icons';
=======
import { ellipse, square, triangle, settings, settingsOutline } from 'ionicons/icons';
>>>>>>> 59389ef1c29be3d65a5df9343570242bc0225286:src/App.tsx
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Quiz';
import Tab3 from './pages/Tab3';
<<<<<<< HEAD:src/App.jsx
import Words from './components/Words';
=======
import Tab4 from './pages/Tab4';
>>>>>>> 59389ef1c29be3d65a5df9343570242bc0225286:src/App.tsx

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>

          <Route exact path="/quiz">
            <Tab2 />
          </Route>

          <Route path="/tab3">
            <Tab3 />
          </Route>
<<<<<<< HEAD:src/App.jsx
    
=======
          <Route path="/settings">
            <Tab4 />
          </Route>
>>>>>>> 59389ef1c29be3d65a5df9343570242bc0225286:src/App.tsx
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>

          <Route exact path="/tab1/words">
            <Words />
          </Route>

        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={book} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>

          <IonTabButton tab="quiz" href="/quiz">
            <IonIcon icon={ellipse} />
            <IonLabel>クイズ</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
<<<<<<< HEAD:src/App.jsx

=======
          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={settings} />
            <IonLabel>settings</IonLabel>
          </IonTabButton>
>>>>>>> 59389ef1c29be3d65a5df9343570242bc0225286:src/App.tsx
        </IonTabBar>
      </IonTabs>

    </IonReactRouter>
  </IonApp>
);

export default App;
