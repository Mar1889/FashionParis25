import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from '../auth/privateroute';

import Login from '../login/login';
import clientes from '../clientes/clientes.buscar';

export default function AppRoutes(){
    return(
        <Router>
            <Switch>
                <Route exact path={["/login"]} component={Login} />
                <PrivateRoute exact path="/clientes" component={clientes} />
                <Route 
                    path={"*"} 
                    component={() => (
                        <h1 style={{marginTop:300}}> 404 <br/> 
                        pagina no encontrada 
                        </h1>
                )}/>
            </Switch>
        </Router>
    )
}
