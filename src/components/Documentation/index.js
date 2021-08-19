import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import {Image} from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { MainDocumentation } from './MainDocumentation';
import { NaryTree} from './NaryTree';
import { QuickReact } from './QuickReact';
import { VSCode } from './VSCode';

export const Documentation = (props) => {

    return (
        <div>
           <h1 className="main-page-header-left">DOCUMENTATION</h1>

            {
           <Switch>
                <Route path="/documentation/narytree" exact>
                    <NaryTree />
                </Route>                
                <Route path="/documentation/quickreact" exact>
                    <QuickReact />
                </Route>                           
                <Route path="/documentation/vscode" exact>
                    <VSCode />
                </Route>                            
                <Route path="/documentation">
                    <MainDocumentation />
                </Route>             
            </Switch>        
            }

        </div>
    )
} 

export default Documentation;