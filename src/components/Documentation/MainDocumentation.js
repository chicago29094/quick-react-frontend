import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { Form, FloatingLabel, Alert } from "react-bootstrap";
import {Image} from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

export const MainDocumentation = (props) => {

    return (
        <div className='documentation-container'>

            <h3 className="section-heading">Quick-React Class Libraries API Documentation</h3>

            <p className="section-link"><a href="/documentation/narytree">N-ary Tree Class Library</a></p>

            <p className="section-link"><a href="/documentation/quickreact">Quick-React Class Library</a></p>

            <p className="section-link"><a href="/documentation/vscode">Quick-React VS Code Extension</a></p>

            <p>&nbsp;</p>

            <h3>Quick-React Usage Documentation</h3>

            <p>Quick-React markup utilizes a JSX-like code syntax to describe the nested structure of your React components, the hooks you would like to utilize, and form elements that you wish to include in a component.  You can get started by using the Quick-React Website to add a project to your account and start writing your project code or you can write your code in a <code><b>.JS</b></code> or <code><b>.JSX </b></code> file in the root level of the <code><b>/src</b></code> directory of your react project.</p>

            <p>Quick-React does not install JS modules and dependencies and requires that <code><b>create-react-app</b></code> is utilized to create the base components and structure of your React project.  You can then use Quick-React in your <code><b>/src</b></code> directory to jumpstart your project.</p>

            <h3 className="doc-heading">Minimum markup code requirements:</h3>
            <p>Enclose your project code with React <code><b>&lt;&gt;</b></code> and <code><b>&lt;/&gt;</b></code> tags.  Include a self closing <code><b>Config</b></code> component tag. Finally, enclose your project markup with <code><b>&lt;App&gt;</b></code> and <code><b>&lt;/App&gt;</b></code> tags. </p>
<div className='codearea'>
<pre className='codearea'>
{`<>
    <Config />
    <App>
        /* Your Quick-React Markup Here */
    </App>
</>
`}
</pre>
</div>
   
                <h3 className="doc-heading">Quick-React Markup Code</h3>
                <p>Quick-React markup is a collection of React component tags, which each should be named with a name starting with an capital letter and should only include letters and numbers in the name.  The Quick-React component tags may either be self-closing, ending with a forward slash and greater than character <code><b>/&gt;</b></code>, or must include a second matching closing component tag.Opening and closing tags for separate components can <strong>not</strong> overlap.</p>

<p className='code-top-caption'><strong>Valid self-closing and paired component tags:</strong></p>
<div className='codearea'>
<pre className='codearea'>
{`<>
    <Config />
    <App>
        <Header />
        <MainContent>
            <Article />
        </MainContent>
        <Footer />
    </App>
</>
`}
</pre>
</div>   
        
<p className='code-top-caption'><strong>Invalid markup that will be rejected as containing syntax errors:</strong></p>
<div className='codearea'>
<pre className='codearea'>
{`<>
    <Config />
    <App>
        <Header>        <---- Not self-closing and no matching </Header> closing tag
        <link>          <---- Components should start with an initial cap
        <MainContent>   <---- The MainContent and Article opening and closing tags overlap
            <Article>
        </MainContent>
            </Article>
        <Foo-ter />     <---- Components should have names consisting only of letters and numbers
        <1Copyright />  <---- Component names can not start with a number
    </App>
</>
`}
</pre>
</div>   

<h3 className="doc-heading">Quick-React Component Tag Organization</h3>
                <p>Quick-React component tags not only specify what folders and files will be generated by the app, their placement, type, and nesting also specify the React hierarchy of the components and how they will be nested and called from one another.</p>

                <p>Starting at the <code><b>&lt;App&gt;</b></code> level, which corresponds to the <code><b>App.js</b></code> file common to typical React projects, self-closing components and components with opening tags at that level will be imported and included in the App.js file.</p>

                <p>In <b>Sample #1</b>, displayed directly below, Header, MainContent, and Footer will be imported and added to App.js.  Quick-React will automatically create the following directories for all project within the <b>/src</b> folder: <code><b>/components</b></code>, <code><b>/assets</b></code>, and <code><b>/images</b></code>.  Within the components directory a directory will be created for each component utilizing the component's name.  Inside the component's directory, an <code><b>index.js</b></code> file will be created and will include the starting boilerplate JSX code for the component.</p>
                
                <p>Looking at <b>Sample #1</b> again,  Header, MainContent, and Footer will be imported and rendered in App.js.  Within the MainContent component, Article1, Article2, and Article 3 will be imported and will be rendered within the MainContent component.  The Article2 component will import in the RegForm component and will render it as a child component.  The nested structure of the React tags in the markup determine the nested structure of the components in the generated directories and files.</p>

<p className='code-top-caption'><strong>Sample #1 - Quick-React Markup Code</strong></p>
<div className='codearea'>
<pre className='codearea'>
{`<>
    <Config />
    <App>
        <Header />
        <MainContent>
            <Article1 />
            <Article2>
                <RegForm />
            </Article2>
            <Article3 />
        </MainContent>
        <Footer />
    </App>
</>
`}
</pre>
</div>   

                <h3 className="doc-heading">Quick-React Component Attributes</h3>
                <p>The flexibility of Quick-React is provided through the ability to specify attributes for each component.  Attributes serve to specify what boilerplate or scaffolding code should be generated by the app with each component.</p>

                <p><strong>Quick-React recognizes the following list of attributes that can be included inside a component tag:</strong></p>
                <Row>
                <Col xs='auto'>
                <ul>
                        <li>bootstrap, bootstrap=true</li>           
                        <li>reactbootstrap, reactbootstrap=true</li>      
                        <li>react-bootstrap, react-bootstrap=true</li>     
                        <li>fetch, fetch=true</li>               
                        <li>fetch=GET</li>                
                        <li>fetch=POST</li>               
                        <li>fetch=PUT</li>                
                        <li>fetch=DELETE</li>             
                        <li>fetch=PATCH</li>              
                        <li>fetch=get</li>                
                        <li>fetch=post</li>               
                        <li>fetch=put</li>                
                        <li>fetch=delete</li>             
                        <li>fetch=patch</li>              
                </ul>
                </Col>
                <Col xs='auto'>
                <ul>
                        <li>link, link=true</li>                
                        <li>switch, switch=true</li>              
                        <li>route, route=true</li>               
                        <li>router, router=true</li>               
                        <li>map, map=true</li>                 
                        <li>form, form=true</li>                
                        <li>forminputs='text, textarea, password, checkbox, radio, select'</li>
                        <li>hooks='useEffect, useState, useReducer, useContext, useLocation, useHistory, useParams'</li>
                        <li>useEffect, useEffect=true</li>
                        <li>useState, useState=true</li>
                        <li>useReducer, useReducer=true</li>
                        <li>useContext, useContext=true</li>
                        <li>useLocation, useLocation=true</li>
                        <li>useHistory, useHistory=true</li>              
                        <li>useParams, useParams=true</li>
                </ul>
                </Col>
                </Row>

                <p>The Quick-React parser goes out of its way to allow attributes to be specified in many different formats.  You can include an attribute keyword by itself or you can use the attribute=true variation of the attribute to indicate you wish to include the element.  You can also list attributes as a comma separated list, with a comma, or a comma and space separating the attributes.  Hooks may be listed in one attribute using a <code><b>hooks='list of hooks'</b></code> or <code><b>hooks="list of hooks"</b></code> format.  Form inputs may also be specified in a single quote or double quote delimited format using the <code><b>forminputs='list of field inputs'</b></code> attribute.</p>

                <p className="mb-0"><strong>*# or *## Attribute Multiplier</strong></p>
                <p>Quick-React supports an Emmet-style syntax of following an attribute with an <code><b>*</b></code> characater and a single or 2-digit number, signifying that the referenced attribute element should be repeated the specified number of times.</p>

                <p className="mb-0"><strong>[name1, name2, ....] Named Elements</strong></p>
                <p>Quick-React utilizes generic names for its generated boilerplate code function names and variable names.  However, form field inputs, useEffect, useReducer, and useContext support custom names, which can be specified by including a square-bracket enclosed list of names following the attribute name.  Examples are shown in code <code><b>Sample #2</b></code> below. </p>


                <p></p>

<p className='code-top-caption'><strong>Sample #2 - Quick-React Component Attributes</strong></p>
<div className='codearea'>
<pre className='codearea'>
{`
// Utilize react-bootstrap components for forms and other elements when possible.
// It is recommended to place the react-bootstrap attribute in the Config component.
// Utilize react-router for this project.

<Config react-bootstrap router />   


// Include useState, useReducer, and useContext in MainContent.
// Include base code for link, switch, and route React components.

<MainContent hooks="useState, useReducer, useContext" link switch route />


// Include code for an async fetch GET function.
// Include import statements and base code for useLocation, useHistory, and useParams hooks.
// Include a sample controlled HTML form and form handler functions.
// Include a sample array.map() anonymous function in the return rendering section of 
// this functional component.

<DataList fetch=GET useLocation useHistory useParams form map />


// Generate a form, including labels, with 4 text fields, 2 textarea fields, a password and confirm password field, 
// 5 checkboxes, and 2 radio buttons

<RegForm form forminputs="text*4, textarea*2, password, checkbox*5, radio*2" />


// Generate a form, including labels, with 3 named text fields and 2 named textarea fields

<RegForm fetch=PUT form forminputs="text[first_name, last_name, email], textarea[description, comments]" useState[loggedIn] />


`}
</pre>
</div>   



        </div>
    )
} 

export default MainDocumentation;