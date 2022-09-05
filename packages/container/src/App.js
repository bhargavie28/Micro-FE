import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Progress from "./components/Progress";
import Header from "./components/Header";

const LabaratoryLazy = lazy(() => import("./components/LabaratoryApp"));
const DealerLazy = lazy(() => import("./components/DealerApp"));
const UserAccountLazy = lazy(() => import("./components/UserAccountApp"));
const RoleManagementLazy = lazy(() => import("./components/RoleManagementApp"));

const LandingLazy = lazy(() => import("./components/LandingApp"));
const SampleregistrationLazy = lazy(() =>
  import("./components/SampleregistrationApp")
);

const AuthLazy = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route
                path="/sampleregistration"
                component={SampleregistrationLazy}
              />
              <Route path="/useraccount" component={UserAccountLazy} />
              <Route path="/rolemanagement" component={RoleManagementLazy} />
              <Route path="/dealer" component={DealerLazy} />
              <Route path="/landingpage" component={LandingLazy} />
              <Route path="/" component={LabaratoryLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
