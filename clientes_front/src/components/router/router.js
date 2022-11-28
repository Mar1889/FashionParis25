import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from '../login/login';
import Inicio from '../index/index';
import PrivateRoute from '../auth/privateroute';
import Productos from '../productos/index';

export default function AppRoutes(){
    return(
        <Router>
            <Switch>                
                <PrivateRoute exact path={["/productos"]} component={ Productos } />
                <Route exact path={["/login"]} component={Login} />
                <Route exact path= {["/"]} component={Inicio} />
                <Route exact path= {["/index"]} component={Inicio} />
                <Route 
                    path={"*"} 
                    component={() => (
                        <h1 style={{marginTop:300}}> 404 <br/> 
                        pagina no encontrada 
                        </h1>
                )}/>
            </Switch>
        </Router>
    );
}
