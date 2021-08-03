import { Redirect, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";

import { useDispatch, useSelector } from "react-redux";
import { IonReactRouter } from "@ionic/react-router";
import { pricetags, ribbon, build } from "ionicons/icons";
import Tab1 from "./pages/Main";
import Achievement from "./pages/Achievement";
import Settings from "./pages/Settings";

import Ready from "./pages/Ready";
import NotFound from "./pages/NotFound";
import Cardcontent from "./components/Cardcontent";
import AddContent from "./components/AddContent";
import Test from "./pages/Test";

import { toggleAchievement } from "./slices/achievementSlice";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App = () => {
  const { totalCollectCount, continuousCollectCount } = useSelector(
    (state) => state.achievements
  );
  const dispatch = useDispatch();
  const [urlState, setUrlState] = useState('');
  window.onunload = function() {
    // IE以外用。ここは空でOKです
  };
  window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload();
    }
  };
  useEffect(() => {
    setUrlState(window.location.pathname.split('/')[1]);
    console.log(window.location.pathname.split('/')[1]);
  },[]);
  useEffect(() => {
    dispatch(toggleAchievement({ targetType: "collect" }));
  }, [totalCollectCount, continuousCollectCount]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1" component={Tab1} />
            <Route exact path="/tab1/words/:cardId" component={Cardcontent} />
            <Route exact path="/tab1/add/:cardId" component={AddContent} />

            <Route exact path="/achivement">
              <Achievement />
            </Route>

            <Route exact path="/settings">
              <Settings />
            </Route>

            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>

            <Route exact path="/test/:cardId" component={Test} />
            <Route exact path="/ready/:cardId" component={Ready} />

            <Route component={NotFound} />
          </IonRouterOutlet>

          {(urlState !== 'test' && urlState !== 'ready') ? <IonTabBar slot="bottom" hidden={false}>
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={pricetags} />
              <IonLabel>メイン</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Achivement" href="/achivement">
              <IonIcon icon={ribbon} />
              <IonLabel>実績</IonLabel>
            </IonTabButton>

            <IonTabButton tab="settings" href="/settings">
              <IonIcon icon={build} />
              <IonLabel>設定</IonLabel>
            </IonTabButton>
          </IonTabBar>:<IonTabBar/>}
          
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
