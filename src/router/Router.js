import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Loading } from 'shared/components';
import ErrorsBoundary from 'components/ErrorsBoundry';
import Home from 'pages/Home';
import NotFound from 'pages/404';
import ErrorPage from 'pages/Error';

const ContentDetail = React.lazy(() => import('pages/ContentDetail'));
const Stream = React.lazy(() => import('pages/Stream'));

const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <ErrorsBoundary>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/:type/:id'>
              <ContentDetail />
            </Route>
            <Route exact path='/streams/:type/:id'>
              <Stream />
            </Route>
            <Route exact path='/error'>
              <ErrorPage />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </ErrorsBoundary>
      </Router>
    </Suspense>
  );
};

export default AppRouter;
