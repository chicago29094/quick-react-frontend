import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import {Image} from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

export const QuickReact = (props) => {

    return (
        <div className='jsdoc-container'>

           <h2 id="classes">Quick-React Library Classes</h2>
                <dl>
                <dt><a href="#QuickReactElement">QuickReactElement</a></dt>
                <dd><p>Quick-React elements are an object type where each element has an assigned type, name, and a 
                set of unique key/value attributes stored as a JavaScript Map data structure.</p>
                </dd>
                <dt><a href="#QuickReact">QuickReact</a></dt>
                <dd><p>The QuickReact class methods perform all the processing of parsing Quick-React markup into an 
                n-ary tree, which can then be output as React folder and file components for quick React project setup</p>
                </dd>
                </dl>
                <h2 id="functions">Functions</h2>
                <dl>
                <dt><a href="#output_index">output_index(useBootstrap, quickReact, NaryTree, QuickReactElement, NaryNode)</a> ⇒ <code>undefined</code></dt>
                <dd><p>Output the index.js file as index_qr.js for this React project</p>
                </dd>
                <dt><a href="#output_app">output_app(useBootstrap, quickReact, NaryTree, QuickReactElement, NaryNode)</a> ⇒ <code>undefined</code></dt>
                <dd><p>Output the App.js file as App_qr.js for this React project</p>
                </dd>
                <dt><a href="#output_component">output_component(useBootstrap, quickReact, NaryTree, QuickReactElement, NaryNode)</a> ⇒ <code>undefined</code></dt>
                <dd><p>Output individual component files for the React project</p>
                </dd>
                </dl>
                <p><a name="QuickReactElement"></a></p>
                <h2 id="quickreactelement">QuickReactElement</h2>
                <p>Quick-React elements are an object type where each element has an assigned type, name, and a <br />
                set of unique key/value attributes stored as a JavaScript Map data structure.</p>
                <p><strong>Kind</strong>: global class  </p>
                <ul>
                <li><a href="#QuickReactElement">QuickReactElement</a><ul>
                <li><a href="#new_QuickReactElement_new">new QuickReactElement(name, type, attributes)</a></li>
                <li><a href="#QuickReactElement+type">.type()</a> ⇒ <code>string</code></li>
                <li><a href="#QuickReactElement+type">.type(typeValue)</a></li>
                <li><a href="#QuickReactElement+subtype">.subtype()</a> ⇒ <code>string</code></li>
                <li><a href="#QuickReactElement+subtype">.subtype(subtypeValue)</a></li>
                <li><a href="#QuickReactElement+name">.name()</a> ⇒ <code>string</code></li>
                <li><a href="#QuickReactElement+name">.name(nameValue)</a></li>
                <li><a href="#QuickReactElement+hasAttribute">.hasAttribute(key)</a> ⇒ <code>boolean</code></li>
                <li><a href="#QuickReactElement+safeHasAttribute">.safeHasAttribute(obj)</a> ⇒ <code>boolean</code></li>
                <li><a href="#QuickReactElement+getAttributeSize">.getAttributeSize()</a> ⇒ <code>number</code></li>
                <li><a href="#QuickReactElement+getAttribute">.getAttribute(key)</a> ⇒ <code>string</code></li>
                <li><a href="#QuickReactElement+deleteAttribute">.deleteAttribute(key)</a> ⇒ <code>boolean</code></li>
                <li><a href="#QuickReactElement+setAttribute">.setAttribute({'{key:value}'})</a> ⇒ <code>Object</code></li>
                <li><a href="#QuickReactElement+getAllAttributes">.getAllAttributes()</a> ⇒ <code>Array.&lt;array&gt;</code></li>
                <li><a href="#QuickReactElement+toString">.toString()</a> ⇒ <code>string</code></li></ul></li>
                </ul>
                <p><a name="new_QuickReactElement_new"></a></p>
                <h3 id="new-quickreactelementname-type-attributes">new QuickReactElement(name, type, attributes)</h3>
                <p>The QuickReactElement class object constructor method</p>
                <table>
                <thead>
                <tr>
                <th id="param">Param</th>
                <th id="type">Type</th>
                <th id="description">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>name</td>
                <td><code>string</code></td>
                <td>a name for this element</td>
                </tr>
                <tr>
                <td>type</td>
                <td><code>string</code></td>
                <td>a type to categorize this element</td>
                </tr>
                <tr>
                <td>attributes</td>
                <td><code>Object</code></td>
                <td>object - a shallow object containing [key, value] pairs</td>
                </tr>
                </tbody>
                </table>
                <p><a name="QuickReactElement+type"></a></p>
                <h3 id="quickreactelementtype-⇒">quickReactElement.type() ⇒ <code>string</code></h3>
                <p>Get this element's designated type.</p>
                <p><strong>Kind</strong>: instance method of <a href="#QuickReactElement"><code>QuickReactElement</code></a>  <br />
                <strong>Returns</strong>: - this element's designated type  <br />
                <a name="QuickReactElement+type"></a></p>
                <h3 id="quickreactelementtypetypevalue">quickReactElement.type(typeValue)</h3>
                <p>Set this element's type value</p>
                <p><strong>Kind</strong>: instance method of <a href="#QuickReactElement"><code>QuickReactElement</code></a>  </p>
                <table>
                <thead>
                <tr>
                <th id="param">Param</th>
                <th id="type">Type</th>
                <th id="description">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>typeValue</td>
                <td><code>string</code></td>
                <td>string - the element's type value</td>
                </tr>
                </tbody>
                </table>
                <p><a name="QuickReactElement+subtype"></a></p>
                <h3 id="quickreactelementsubtype-⇒-c16c">quickReactElement.subtype() ⇒ <code>string</code></h3>
                <p>Get this element's subtype value</p>
                <p><strong>Kind</strong>: instance method of <a href="#QuickReactElement"><code>QuickReactElement</code></a>  <br />
                <strong>Returns</strong>: <code>string</code> - this element's designated subtype  <br />
                <a name="QuickReactElement+subtype"></a></p>
                <h3 id="quickreactelementsubtypesubtypevalue">quickReactElement.subtype(subtypeValue)</h3>
                <p>Set this element's subtype value</p>
                <p><strong>Kind</strong>: instance method of <a href="#QuickReactElement"><code>QuickReactElement</code></a>  </p>
                <table>
                <thead>
                <tr>
                <th id="param">Param</th>
                <th id="type">Type</th>
                <th id="description">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>subtypeValue</td>
                <td><code>string</code></td>
                <td>string - the element's subtype value</td>
                </tr>
                </tbody>
                </table>
                <p><a name="QuickReactElement+name"></a></p>
                <h3 id="quickreactelementname-⇒-c21c">quickReactElement.name() ⇒ <code>string</code></h3>
                <p>Get the element's name.</p>
                <p><strong>Kind</strong>: instance method of <a href="#QuickReactElement"><code>QuickReactElement</code></a>  <br />
                <strong>Returns</strong>: <code>string</code> - this element's name  <br />
                <a name="QuickReactElement+name"></a></p>
                <h3 id="quickreactelementnamenamevalue">quickReactElement.name(nameValue)</h3>
                <p>Set this element's name.</p>
                <p><strong>Kind</strong>: instance method of <a href="#QuickReactElement"><code>QuickReactElement</code></a>  </p>
                <table>
                <thead>
                <tr>
                <th id="param">Param</th>
                <th id="type">Type</th>
                <th id="description">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>nameValue</td>
                <td><code>string</code></td>
                <td>string - the element's name</td>
                </tr>
                </tbody>
                </table>
                <p><a name="QuickReactElement+hasAttribute"></a></p>
                <h3 id="quickreactelementhasattributekey-⇒-c26c">quickReactElement.hasAttribute(key) ⇒ <code>boolean</code></h3>
                <p>Check to see if the Quick-React element has a specific attribute set</p>
                <p><strong>Kind</strong>: instance method of <a href="#QuickReactElement"><code>QuickReactElement</code></a>  <br />
                <strong>Returns</strong>: <code>boolean</code> - does this Quick-React element have this attribute?  </p>
                <table>
                <thead>
                <tr>
                <th id="param">Param</th>
                <th id="type">Type</th>
                <th id="description">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>key</td>
                <td><code>string</code></td>
                <td>string - check to see whether this element has an attribute with the specified property key</td>
                </tr>
                </tbody>
                </table>
                <p><a name="QuickReactElement+safeHasAttribute"></a></p>
                <h3 id="quickreactelementsafehasattributeobj-⇒-c30c">quickReactElement.safeHasAttribute(obj) ⇒ <code>boolean</code></h3>
                <p>Safely Check to see if the Quick-React element has a specific attribute key set to a specific value<br />
                This method does not return undefined for undefined properties, it always returns a boolean true or false value</p>
                <p><strong>Kind</strong>: instance method of <a href="#QuickReactElement"><code>QuickReactElement</code></a>  <br />
                <strong>Returns</strong>: <code>boolean</code> - does this Quick-React element have this attribute key and value?  </p>
                <table>
                <thead>
                <tr>
                <th id="param">Param</th>
                <th id="type">Type</th>
                <th id="description">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>obj</td>
                <td><code>obj</code></td>
                <td>object - check to see whether this element has an attribute with the specified property key and value, submitted as a shallow object</td>
                </tr>
                </tbody>
                </table>
                <p><a name="QuickReactElement+getAttributeSize"></a></p>
                <h3 id="quickreactelementgetattributesize-⇒-c34c">quickReactElement.getAttributeSize() ⇒ <code>number</code></h3>
                <p>Returns the number of attributes this element has</p>
                <p><strong>Kind</strong>: instance method of <a href="#QuickReactElement"><code>QuickReactElement</code></a>  <br />
                <strong>Returns</strong>: <code>number</code> - the number of attributes this element has  <br />
                <a name="QuickReactElement+getAttribute"></a></p>
                <h3 id="quickreactelementgetattributekey-⇒-c37c">quickReactElement.getAttribute(key) ⇒ <code>string</code></h3>
                <p>Get an attribute's value specified by the key parameter</p>
                <p><strong>Kind</strong>: instance method of <a href="#QuickReactElement"><code>QuickReactElement</code></a>  <br />
                <strong>Returns</strong>: <code>string</code> - value string - the value associated with the specified key  </p>
                <table>
                <thead>
                <tr>
                <th id="param">Param</th>
                <th id="type">Type</th>
                <th id="description">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>key</td>
                <td><code>string</code></td>
                <td>string - the string representing the attribute property to search for</td>
                </tr>
                </tbody>
                </table>
                <p><a name="QuickReactElement+deleteAttribute"></a></p>
                <h3 id="quickreactelementdeleteattributekey-⇒-c41c">quickReactElement.deleteAttribute(key) ⇒ <code>boolean</code></h3>
                <p>Delete an attribute specified by the key parameter</p>
                <p><strong>Kind</strong>: instance method of <a href="#QuickReactElement"><code>QuickReactElement</code></a>  <br />
                <strong>Returns</strong>: <code>boolean</code> - true or false return value depending on whether the delete request was successfully processed  </p>
                <table>
                <thead>
                <tr>
                <th id="param">Param</th>
                <th id="type">Type</th>
                <th id="description">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>key</td>
                <td><code>string</code></td>
                <td>string - the string representing the attribute property to delete</td>
                </tr>
                </tbody>
                </table>
                <p><a name="QuickReactElement+setAttribute"></a></p>
                <h3 id="quickreactelementsetattributekeyvalue-⇒-c45c">quickReactElement.setAttribute({'{key:value}'}) ⇒ <code>Object</code></h3>
                <p>Set a key value pair as an attribute of this element</p>
                <p><strong>Kind</strong>: instance method of <a href="#QuickReactElement"><code>QuickReactElement</code></a>  <br />
                <strong>Returns</strong>: <code>Object</code> - map object - attribute map object is returned  </p>
                <table>
                <thead>
                <tr>
                <th id="param">Param</th>
                <th id="type">Type</th>
                <th id="description">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>{'{key:value}'}</td>
                <td><code>Object</code></td>
                <td>object to be set as a new attribute of this element or to replace an existing attribute with the same key</td>
                </tr>
                </tbody>
                </table>
                <p><a name="QuickReactElement+getAllAttributes"></a></p>
                <h3 id="quickreactelementgetallattributes-⇒-c49c">quickReactElement.getAllAttributes() ⇒ <code>Array.&lt;array&gt;</code></h3>
                <p>Returns all key/value pairs as an array using the spread operator</p>
                <p><strong>Kind</strong>: instance method of <a href="#QuickReactElement"><code>QuickReactElement</code></a>  <br />
                <strong>Returns</strong>: <code>Array.&lt;array&gt;</code> - returns all key/value pairs as an array using the spread operator  <br />
                <a name="QuickReactElement+toString"></a></p>
                <h3 id="quickreactelementtostring-⇒-c52c">quickReactElement.toString() ⇒ <code>string</code></h3>
                <p>Returns the name of this element</p>
                <p><strong>Kind</strong>: instance method of <a href="#QuickReactElement"><code>QuickReactElement</code></a>  <br />
                <strong>Returns</strong>: <code>string</code> - returns the name of this element  <br />
                <a name="QuickReact"></a></p>
                <h2 id="quickreact">QuickReact</h2>
                <p>The QuickReact class methods perform all the processing of parsing Quick-React markup into an <br />
                n-ary tree, which can then be output as React folder and file components for quick React project setup</p>
                <p><strong>Kind</strong>: global class  </p>
                <ul>
                <li><a href="#QuickReact">QuickReact</a><ul>
                <li><a href="#new_QuickReact_new">new QuickReact()</a></li>
                <li><a href="#QuickReact+tree">.tree</a> ⇒ <code>Object</code></li>
                <li><a href="#QuickReact+parseMarkup">.parseMarkup(code)</a> ⇒ <code>Object</code></li>
                <li><a href="#QuickReact+_printRef">._printRef(code, index, length)</a> ⇒ <code>string</code></li>
                <li><a href="#QuickReact+_multiplier">._multiplier(attribute)</a> ⇒ <code>number</code></li>
                <li><a href="#QuickReact+_findMultiplier">._findMultiplier(quickReactElement, searchAttribute, specifiedNameArray, defaultName, matchIndex)</a> ⇒ <code>number</code></li>
                <li><a href="#QuickReact+generateProjectFiles">.generateProjectFiles(userID, projectID, NaryTree)</a> ⇒ <code>undefined</code></li></ul></li>
                </ul>
                <p><a name="new_QuickReact_new"></a></p>
                <h3 id="new-quickreact">new QuickReact()</h3>
                <p>Instantiates a QuickReact object and an empty n-ary tree as a JavaScript object</p>
                <p><a name="QuickReact+tree"></a></p>
                <h3 id="quickreacttree-⇒-c61c">quickReact.tree ⇒ <code>Object</code></h3>
                <p>Retrieve a reference to this NaryTree</p>
                <p><strong>Kind</strong>: instance property of <a href="#QuickReact"><code>QuickReact</code></a>  <br />
                <strong>Returns</strong>: <code>Object</code> - NaryTree object associated with this QuickReact object  <br />
                <a name="QuickReact+parseMarkup"></a></p>
                <h3 id="quickreactparsemarkupcode-⇒-c64c">quickReact.parseMarkup(code) ⇒ <code>Object</code></h3>
                <p>The parseMarkup method takes submitted Quick-React JSX markup code and produces an n-Ary tree structure representing the components, their nested<br />
                structure, and each element's attributes.</p>
                <p><strong>Kind</strong>: instance method of <a href="#QuickReact"><code>QuickReact</code></a>  <br />
                <strong>Returns</strong>: <code>Object</code> - returns a populated NaryTree object representing the lexed and parsed output of the supplied Quick-React markup code  </p>
                <table>
                <thead>
                <tr>
                <th id="param">Param</th>
                <th id="type">Type</th>
                <th id="description">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>code</td>
                <td><code>string</code></td>
                <td>string - Quick-Start markup code in text JSX format</td>
                </tr>
                </tbody>
                </table>
                <p><a name="QuickReact+_printRef"></a></p>
                <h3 id="quickreact_printrefcode-index-length-⇒-c68c">quickReact._printRef(code, index, length) ⇒ <code>string</code></h3>
                <p>This function prints a strings from the current code index to a specified length to provide the developer/user<br />
                with a reference as to where their code may have a syntax error.</p>
                <p><strong>Kind</strong>: instance method of <a href="#QuickReact"><code>QuickReact</code></a>  <br />
                <strong>Returns</strong>: <code>string</code> - message - a message regarding the error or problem found in the supplied code  </p>
                <table>
                <thead>
                <tr>
                <th id="param">Param</th>
                <th id="type">Type</th>
                <th id="description">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>code</td>
                <td><code>string</code></td>
                <td>the Quick-React markup code</td>
                </tr>
                <tr>
                <td>index</td>
                <td><code>number</code></td>
                <td>the character position in the code where an error was found</td>
                </tr>
                <tr>
                <td>length</td>
                <td><code>number</code></td>
                <td>the length is characters of surrounding context text to display in the response message</td>
                </tr>
                </tbody>
                </table>
                <p><a name="QuickReact+_multiplier"></a></p>
                <h3 id="quickreact_multiplierattribute-⇒-c74c">quickReact._multiplier(attribute) ⇒ <code>number</code></h3>
                <p>The _multiplier function checks the passed attribute and determines whether a multiplier <br />
                expression is used in the attribute, denoted by an '*', to request a repeat of the item a specified number of times.<br />
                Multiplier values can be a single integer digit or two integer digits long.</p>
                <p><strong>Kind</strong>: instance method of <a href="#QuickReact"><code>QuickReact</code></a>  <br />
                <strong>Returns</strong>: <code>number</code> - returns the multiplier value found in the attribute or 1 as a default  </p>
                <table>
                <thead>
                <tr>
                <th id="param">Param</th>
                <th id="type">Type</th>
                <th id="description">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>attribute</td>
                <td><code>string</code></td>
                <td>string - the attribute key to search for</td>
                </tr>
                </tbody>
                </table>
                <p><a name="QuickReact+_findMultiplier"></a></p>
                <h3 id="quickreact_findmultiplierquickreactelement-searchattribute-specifiednamearray-defaultname-matchindex-⇒-c78c">quickReact._findMultiplier(quickReactElement, searchAttribute, specifiedNameArray, defaultName, matchIndex) ⇒ <code>number</code></h3>
                <p>This is the same as the _multiplier function except that it looks through all of the component's attributes for<br />
                the first matching attribute, compared via key name, and then checks to see if a multiplier expression is used.</p>
                <p><strong>Kind</strong>: instance method of <a href="#QuickReact"><code>QuickReact</code></a>  <br />
                <strong>Returns</strong>: <code>number</code> - returns the multiplier value found or zero if the attribute wasn't found, or one if the attribute was found but no multiplier was specified  </p>
                <table>
                <thead>
                <tr>
                <th id="param">Param</th>
                <th id="type">Type</th>
                <th id="description">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>quickReactElement</td>
                <td><code>Object</code></td>
                <td>component - a Quick-React object element to search</td>
                </tr>
                <tr>
                <td>searchAttribute</td>
                <td><code>string</code></td>
                <td>the attribute to search for in the element</td>
                </tr>
                <tr>
                <td>specifiedNameArray</td>
                <td><code>Array.&lt;array&gt;</code></td>
                <td>an array used to hold values of requested field/variable names in the markup</td>
                </tr>
                <tr>
                <td>defaultName</td>
                <td><code>string</code></td>
                <td>a default name to use for a field/variable if specified names are used in the markup</td>
                </tr>
                <tr>
                <td>matchIndex</td>
                <td><code>number</code></td>
                <td>add support for use of an attribute more than one time in a single component</td>
                </tr>
                </tbody>
                </table>
                <p><a name="QuickReact+generateProjectFiles"></a></p>
                <h3 id="quickreactgenerateprojectfilesuserid-projectid-narytree-⇒-c86c">quickReact.generateProjectFiles(userID, projectID, NaryTree) ⇒ <code>undefined</code></h3>
                <p>A function to generate React directories and files based on the n-Ary tree representation of the Quick-React markup</p>
                <p><strong>Kind</strong>: instance method of <a href="#QuickReact"><code>QuickReact</code></a>  <br />
                <strong>Returns</strong>: <code>undefined</code> - Stores the directories and files for the project and generates a zip file with all of the content archived into a single downloadable document.  </p>
                <table>
                <thead>
                <tr>
                <th id="param">Param</th>
                <th id="type">Type</th>
                <th id="description">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>userID</td>
                <td><code>string</code></td>
                <td>The registered Quick-React user's unique id, as assigned by MongoDB.</td>
                </tr>
                <tr>
                <td>projectID</td>
                <td><code>string</code></td>
                <td>The registered Quick-React user's unique project ID, as assigned by MongoDB</td>
                </tr>
                <tr>
                <td>NaryTree</td>
                <td><code>Object</code></td>
                <td>tree - The tree of parsed values representing the structure of this Quick-React project</td>
                </tr>
                </tbody>
                </table>
                <p><a name="output_index"></a></p>
                <h2 id="output_indexusebootstrap-quickreact-narytree-quickreactelement-narynode-⇒-c92c">output_index(useBootstrap, quickReact, NaryTree, QuickReactElement, NaryNode) ⇒ <code>undefined</code></h2>
                <p>Output the index.js file as index_qr.js for this React project</p>
                <p><strong>Kind</strong>: global function  <br />
                <strong>Returns</strong>: <code>undefined</code> - Outputs the index.js file as index_qr.js for this React project  </p>
                <table>
                <thead>
                <tr>
                <th id="param">Param</th>
                <th id="type">Type</th>
                <th id="description">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>useBootstrap</td>
                <td><code>boolean</code></td>
                <td>boolean - boolean flag indicating whether react-bootstrap should be used</td>
                </tr>
                <tr>
                <td>quickReact</td>
                <td><code>Object</code></td>
                <td>object - the instance of the Quick-React project object</td>
                </tr>
                <tr>
                <td>NaryTree</td>
                <td><code>Object</code></td>
                <td>tree object - the parse tree of object and values for this project</td>
                </tr>
                <tr>
                <td>QuickReactElement</td>
                <td><code>Object</code></td>
                <td>object - a specific quickReactElement</td>
                </tr>
                <tr>
                <td>NaryNode</td>
                <td><code>Object</code></td>
                <td>node object - a specific node in the project tree</td>
                </tr>
                </tbody>
                </table>
                <p><a name="output_app"></a></p>
                <h2 id="output_appusebootstrap-quickreact-narytree-quickreactelement-narynode-⇒-c99c">output_app(useBootstrap, quickReact, NaryTree, QuickReactElement, NaryNode) ⇒ <code>undefined</code></h2>
                <p>Output the App.js file as App_qr.js for this React project</p>
                <p><strong>Kind</strong>: global function  <br />
                <strong>Returns</strong>: <code>undefined</code> - - Outputs the App.js file as App_qr.js for this React project  </p>
                <table>
                <thead>
                <tr>
                <th id="param">Param</th>
                <th id="type">Type</th>
                <th id="description">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>useBootstrap</td>
                <td><code>boolean</code></td>
                <td>boolean - boolean flag indicating whether react-bootstrap should be used</td>
                </tr>
                <tr>
                <td>quickReact</td>
                <td><code>Object</code></td>
                <td>object - the instance of the Quick-React project object</td>
                </tr>
                <tr>
                <td>NaryTree</td>
                <td><code>Object</code></td>
                <td>tree object - the parse tree of object and values for this project</td>
                </tr>
                <tr>
                <td>QuickReactElement</td>
                <td><code>Object</code></td>
                <td>object - a specific quickReactElement</td>
                </tr>
                <tr>
                <td>NaryNode</td>
                <td><code>Object</code></td>
                <td>node object - a specific node in the project tree</td>
                </tr>
                </tbody>
                </table>
                <p><a name="output_component"></a></p>
                <h2 id="output_componentusebootstrap-quickreact-narytree-quickreactelement-narynode-⇒-c106c">output_component(useBootstrap, quickReact, NaryTree, QuickReactElement, NaryNode) ⇒ <code>undefined</code></h2>
                <p>Output individual component files for the React project</p>
                <p><strong>Kind</strong>: global function  <br />
                <strong>Returns</strong>: <code>undefined</code> - Outputs a specific component file for this React project  </p>
                <table>
                <thead>
                <tr>
                <th id="param">Param</th>
                <th id="type">Type</th>
                <th id="description">Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>useBootstrap</td>
                <td><code>boolean</code></td>
                <td>boolean - boolean flag indicating whether react-bootstrap should be used</td>
                </tr>
                <tr>
                <td>quickReact</td>
                <td><code>Object</code></td>
                <td>object - the instance of the Quick-React project object</td>
                </tr>
                <tr>
                <td>NaryTree</td>
                <td><code>Object</code></td>
                <td>tree object - the parse tree of object and values for this project</td>
                </tr>
                <tr>
                <td>QuickReactElement</td>
                <td><code>Object</code></td>
                <td>object  - a specific quickReactElement</td>
                </tr>
                <tr>
                <td>NaryNode</td>
                <td><code>Object</code></td>
                <td>node object - a specific node in the project tree</td>
                </tr>
                </tbody>
                </table>
            </div>
    )
} 

export default QuickReact;