import { Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import NewRoom from 'pages/NewRoom';
import { AuthProvider } from 'hooks/auth';

export default function Routes() {
  return (
    <Switch>
      <AuthProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthProvider>
    </Switch>
  );
}
