import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import {Image} from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

export const VSCode = (props) => {

    return (
        <div className='documentation-container'>

        <h3 className="section-heading">Quick-React Visual Studio Code Extension</h3>
 
        <p>Quick-React functionality has been integrated directly into a new Visual Studio Code Extension <code><b>quick-react-code</b></code>.  You can take advantage of using the Quick-React tool directly in VS Code, avoiding the extra step of having to download and install generated React projects in zip archive format from the Quick-React Website.  Simply load Visual Studio Code and search for the extension, <code><b>quick-react-code</b></code>, by using VS Code's integrated <strong>Extension Marketplace</strong> search tool. </p>

        <p>Quick-React may be used within the editor by first generating your initial project using <code><b>create-react-app</b></code>.  Then load VS Code and create a Quick-React project markup file in your project's <code><b>/src</b></code> folder with either a <code><b>.JS</b></code> or <code><b>.JSX</b></code> extension.  After you have created and saved your markup file, run the <code><b>quick-react</b></code> command to have the extension parse and process your file and generate your React project's directories and component files.</p>

        </div>
    )
} 

export default VSCode;