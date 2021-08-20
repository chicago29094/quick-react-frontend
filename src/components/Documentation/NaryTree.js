import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import {Image} from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

export const NaryTree = (props) => {

    return (
        <div className='jsdoc-container'>

           <h2 id="classes">N-ary Tree Library Classes</h2>
            <dl>
            <dt><a href="#NaryNode">NaryNode</a></dt>
            <dd><p>n-ary Nodes have an item value, which can be any data type, although preferably an object, and 
            an array of reference pointers to the node&#39;s children</p>
            </dd>
            <dt><a href="#NaryTree">NaryTree</a></dt>
            <dd><p>This is an implementation of an iterable n-ary tree data structure and associated methods.
            An n-ary tree is a tree data structure where any node may have an arbitrary number of 
            child nodes. This can potentially be used as a trie, but it is not designed for that purpose.</p>
            </dd>
            </dl>
            <p><a name="NaryNode"></a></p>
            <h2 id="narynode">NaryNode</h2>
            <p>n-ary Nodes have an item value, which can be any data type, although preferably an object, and 
            an array of reference pointers to the node's children</p>
            <p><strong>Kind</strong>: global class  </p>
            <ul>
            <li><a href="#NaryNode">NaryNode</a><ul>
            <li><a href="#new_NaryNode_new">new NaryNode(childObj)</a></li>
            <li><a href="#NaryNode+children">.children</a> ⇒ <code>Array.&lt;Object&gt;</code></li>
            <li><a href="#NaryNode+value">.value</a> ⇒ <code>Object</code></li>
            <li><a href="#NaryNode+children">.children</a></li>
            <li><a href="#NaryNode+value">.value</a></li></ul></li>
            </ul>
            <p><a name="new_NaryNode_new"></a></p>
            <h3 id="newnarynodechildobj">new NaryNode(childObj)</h3>
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
            <td>childObj</td>
            <td><code>Object</code></td>
            <td>any object type - The object to be inserted at the new n-ary node</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryNode+children"></a></p>
            <h3 id="narynodechildrenc3c">naryNode.children ⇒ <code>Array.&lt;Object&gt;</code></h3>
            <p>Retrieve the children of this node</p>
            <p><strong>Kind</strong>: instance property of <a href="#NaryNode"><code>NaryNode</code></a><br />
            <strong>Returns</strong>: <code>Array.&lt;Object&gt;</code> - children - an array of child nodes<br />
            <a name="NaryNode+value"></a></p>
            <h3 id="narynodevaluec6c">naryNode.value ⇒ <code>Object</code></h3>
            <p>Retrieve the object stored in this node</p>
            <p><strong>Kind</strong>: instance property of <a href="#NaryNode"><code>NaryNode</code></a><br />
            <strong>Returns</strong>: <code>Object</code> - value object - the object stored in this node<br />
            <a name="NaryNode+children"></a></p>
            <h3 id="narynodechildren">naryNode.children</h3>
            <p>Replace the children array associated with this node</p>
            <p><strong>Kind</strong>: instance property of <a href="#NaryNode"><code>NaryNode</code></a>  </p>
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
            <td>newArray</td>
            <td><code>Array.&lt;array&gt;</code></td>
            <td>a new array of child object references</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryNode+value"></a></p>
            <h3 id="narynodevalue">naryNode.value</h3>
            <p>Replace the object stored in this node</p>
            <p><strong>Kind</strong>: instance property of <a href="#NaryNode"><code>NaryNode</code></a>  </p>
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
            <td>newValue</td>
            <td><code>Object</code></td>
            <td>any object type - the new object to store in this node</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree"></a></p>
            <h2 id="narytree">NaryTree</h2>
            <p>This is an implementation of an iterable n-ary tree data structure and associated methods.
            An n-ary tree is a tree data structure where any node may have an arbitrary number of 
            child nodes. This can potentially used as a trie, but it is not designed for that purpose.</p>
            <p><strong>Kind</strong>: global class  </p>
            <ul>
            <li><a href="#NaryTree">NaryTree</a><ul>
            <li><a href="#new_NaryTree_new">new NaryTree()</a></li>
            <li><a href="#NaryTree+root">.root</a> ⇒ <code>Object</code></li>
            <li><a href="#NaryTree+add">.add(childObj)</a> ⇒ <code>boolean</code></li>
            <li><a href="#NaryTree+addAsFirstChild">.addAsFirstChild(childObj, parent)</a> ⇒ <code>boolean</code></li>
            <li><a href="#NaryTree+addAsLastChild">.addAsLastChild(childObj, parent)</a> ⇒ <code>boolean</code></li>
            <li><a href="#NaryTree+addAtPosition">.addAtPosition(childObj, parent, position)</a> ⇒ <code>boolean</code></li>
            <li><a href="#NaryTree+clear">.clear()</a> ⇒ <code>boolean</code></li>
            <li><a href="#NaryTree+contains">.contains(obj, parentNode)</a> ⇒ <code>boolean</code></li>
            <li><a href="#NaryTree+get">.get(obj)</a> ⇒ <code>boolean</code></li>
            <li><a href="#NaryTree+getNode">.getNode(obj)</a> ⇒ <code>Object</code></li>
            <li><a href="#NaryTree+getByObjectProperty">.getByObjectProperty(obj)</a> ⇒ <code>Object</code></li>
            <li><a href="#NaryTree+getNodeByObjectProperty">.getNodeByObjectProperty(obj)</a> ⇒ <code>Object</code></li>
            <li><a href="#NaryTree+getRootItem">.getRootItem()</a> ⇒ <code>Object</code></li>
            <li><a href="#NaryTree+height">.height(NaryNode)</a> ⇒ <code>number</code></li>
            <li><a href="#NaryTree+isEmpty">.isEmpty()</a> ⇒ <code>boolean</code></li>
            <li><a href="#NaryTree+iterator">.iterator(node)</a></li>
            <li><a href="#NaryTree+levelOrderIterator">.levelOrderIterator(node)</a></li>
            <li><a href="#NaryTree+preOrderIterator">.preOrderIterator(node, [node])</a></li>
            <li><a href="#NaryTree+remove">.remove(obj, parent)</a> ⇒ <code>boolean</code></li>
            <li><a href="#NaryTree+removeNode">.removeNode(naryNode)</a> ⇒ <code>boolean</code></li>
            <li><a href="#NaryTree+removeSubtree">.removeSubtree(obj, parentNode)</a> ⇒ <code>boolean</code></li>
            <li><a href="#NaryTree+removeNodeSubtree">.removeNodeSubtree(naryNode)</a> ⇒ <code>boolean</code></li>
            <li><a href="#NaryTree+size">.size(naryNode)</a> ⇒ <code>number</code></li>
            <li><a href="#NaryTree+toString">.toString([naryNode], [relLevel])</a> ⇒ <code>string</code></li>
            <li><a href="#NaryTree+toJSON">.toJSON([naryNode], [relLevel])</a> ⇒ <code>string</code></li></ul></li>
            </ul>
            <p><a name="new_NaryTree_new"></a></p>
            <h3 id="newnarytree">new NaryTree()</h3>
            <p>Instantiates an empty n-ary tree as a JavaScript object</p>
            <p><a name="NaryTree+root"></a></p>
            <h3 id="narytreerootc34c">naryTree.root ⇒ <code>Object</code></h3>
            <p>Return the root node of this n-ary tree</p>
            <p><strong>Kind</strong>: instance property of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>Object</code> - NaryNode node object - returns a reference to the root node<br />
            <a name="NaryTree+add"></a></p>
            <h3 id="narytreeaddchildobjc37c">naryTree.add(childObj) ⇒ <code>boolean</code></h3>
            <p>Adds the parameter child object as root or the root node's next child</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>boolean</code> - boolean value - success of operation  </p>
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
            <td>childObj</td>
            <td><code>Object</code></td>
            <td>object value - an object to store in the node</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree+addAsFirstChild"></a></p>
            <h3 id="narytreeaddasfirstchildchildobjparentc41c">naryTree.addAsFirstChild(childObj, parent) ⇒ <code>boolean</code></h3>
            <p>Adds child as the first child of the parent node in the n-ary tree</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>boolean</code> - boolean value - success of operation  </p>
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
            <td>childObj</td>
            <td><code>Object</code></td>
            <td>object value - an object to store in the node</td>
            </tr>
            <tr>
            <td>parent</td>
            <td><code>Object</code></td>
            <td>NaryNode node object - the parent n-ary node</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree+addAsLastChild"></a></p>
            <h3 id="narytreeaddaslastchildchildobjparentc46c">naryTree.addAsLastChild(childObj, parent) ⇒ <code>boolean</code></h3>
            <p>Adds child as the last child of the parent node in the n-ary tree
            Returns a boolean value</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>boolean</code> - boolean value  </p>
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
            <td>childObj</td>
            <td><code>Object</code></td>
            <td>object value - an object to store in the node</td>
            </tr>
            <tr>
            <td>parent</td>
            <td><code>Object</code></td>
            <td>NaryNode node object - the parent n-ary node</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree+addAtPosition"></a></p>
            <h3 id="narytreeaddatpositionchildobjparentpositionc51c">naryTree.addAtPosition(childObj, parent, position) ⇒ <code>boolean</code></h3>
            <p>Adds child as the position child of the parent node in the n-ary tree using level-order traversal
            Returns a boolean value</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>boolean</code> - boolean value  </p>
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
            <td>childObj</td>
            <td><code>Object</code></td>
            <td>object value - an object to store in the node</td>
            </tr>
            <tr>
            <td>parent</td>
            <td><code>Object</code></td>
            <td>NaryNode node object - the parent n-ary node</td>
            </tr>
            <tr>
            <td>position</td>
            <td><code>number</code></td>
            <td>integer - the position number where the child should be included in the children array for this node</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree+clear"></a></p>
            <h3 id="narytreeclearc57c">naryTree.clear() ⇒ <code>boolean</code></h3>
            <p>Make this n-ary tree empty</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>boolean</code> - boolean value<br />
            <a name="NaryTree+contains"></a></p>
            <h3 id="narytreecontainsobjparentnodec60c">naryTree.contains(obj, parentNode) ⇒ <code>boolean</code></h3>
            <p>Indicates whether an existing object, passed as an argument, exists in this n-ary tree
            If parentNode is specified contains only looks within the subtree rooted in the parentNode
            If obj is itself an n-ary Node a search-by-node is performed instead of a search for a matching object
            Returns a boolean value</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>boolean</code> - boolean value  </p>
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
            <td><code>Object</code></td>
            <td>an object stored in any node</td>
            </tr>
            <tr>
            <td>parentNode</td>
            <td><code>Object</code></td>
            <td>NaryNode object - the parent n-ary node</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree+get"></a></p>
            <h3 id="narytreegetobjc65c">naryTree.get(obj) ⇒ <code>boolean</code></h3>
            <p>In no object parameter is specified, return the root node object
            In an object is specified, get returns the first occurrence of the specified object using a level-order tree traversal iterator.</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>boolean</code> - boolean value  </p>
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
            <td><code>Object</code></td>
            <td>object - an object stored in a node somewhere in this tree</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree+getNode"></a></p>
            <h3 id="narytreegetnodeobjc69c">naryTree.getNode(obj) ⇒ <code>Object</code></h3>
            <p>getNode returns the n-ary tree node reference for the first occurrence of the specified object passed as an argument to the method.</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>Object</code> - NaryNode node object - a reference to first node found containing a reference to the specified object  </p>
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
            <td><code>Object</code></td>
            <td>an object store in a node</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree+getByObjectProperty"></a></p>
            <h3 id="narytreegetbyobjectpropertyobjc73c">naryTree.getByObjectProperty(obj) ⇒ <code>Object</code></h3>
            <p>In no object parameter is specified, return the root node object
            In an object is specified, get returns the first occurrence of the specified object using a level-order tree traversal iterator.</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>Object</code> - node value object - returns the first object found containing the specified property and property value  </p>
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
            <td><code>Object</code></td>
            <td>{'{key:value}'} object - a property key and value object</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree+getNodeByObjectProperty"></a></p>
            <h3 id="narytreegetnodebyobjectpropertyobjc77c">naryTree.getNodeByObjectProperty(obj) ⇒ <code>Object</code></h3>
            <p>getNode returns the n-ary tree node reference for the first occurrence of the specified object passed as an argument to the method.</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>Object</code> - NaryNode node object - returns the first node found containing an object with the specified property and property value  </p>
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
            <td><code>Object</code></td>
            <td>{'{key:value}'} object - a property key and value object</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree+getRootItem"></a></p>
            <h3 id="narytreegetrootitemc81c">naryTree.getRootItem() ⇒ <code>Object</code></h3>
            <p>returns the object in the root node of the tree</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>Object</code> - root node value object - a reference to the object stored in the root node of the tree<br />
            <a name="NaryTree+height"></a></p>
            <h3 id="narytreeheightnarynodec84c">naryTree.height(NaryNode) ⇒ <code>number</code></h3>
            <p>if naryNode is not specified, height returns the height of the naryTree from the root to the leaf nodes
            if naryNode is specified, height return the height of the naryTree from the naryNode to the leaf nodes</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>number</code> - height integer - the height of the tree in levels from the reference node to the deepest leaf node  </p>
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
            <td>NaryNode</td>
            <td><code>Object</code></td>
            <td>node object - an n-ary node present in this tree</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree+isEmpty"></a></p>
            <h3 id="narytreeisemptyc88c">naryTree.isEmpty() ⇒ <code>boolean</code></h3>
            <p>Returns a boolean value reflecting whether the n-ary tree is empty or not</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>boolean</code> - boolean value - is the tree empty?<br />
            <a name="NaryTree+iterator"></a></p>
            <h3 id="narytreeiteratornode">naryTree.iterator(node)</h3>
            <p>returns a level-order iterator for this n-ary tree</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a>  </p>
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
            <td>node</td>
            <td><code>Object</code></td>
            <td>NaryNode object - the parent n-ary node of the tree or contained subtree</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree+levelOrderIterator"></a></p>
            <h3 id="narytreelevelorderiteratornode">naryTree.levelOrderIterator(node)</h3>
            <p>returns a level-order iterator for this n-ary tree</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a>  </p>
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
            <td>node</td>
            <td><code>Object</code></td>
            <td>NaryNode object - the parent n-ary node of the tree or contained subtree</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree+preOrderIterator"></a></p>
            <h3 id="narytreepreorderiteratornodenode">naryTree.preOrderIterator(node, [node])</h3>
            <p>returns a pre-order iterator for this n-ary tree</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a>  </p>
            <table>
            <thead>
            <tr>
            <th id="param">Param</th>
            <th id="type">Type</th>
            <th id="default">Default</th>
            <th id="description">Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>node</td>
            <td><code>Object</code></td>
            <td></td>
            <td>NaryNoe object - the parent n-ary node</td>
            </tr>
            <tr>
            <td>[node]</td>
            <td><code>number</code></td>
            <td><code>this._modCount</code></td>
            <td>number - the modCount value is used to track whether the tree has been modified during the iteration, which is an error condition</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree+remove"></a></p>
            <h3 id="narytreeremoveobjparentc99c">naryTree.remove(obj, parent) ⇒ <code>boolean</code></h3>
            <p>If obj is not specified, remove removes the first item in the n-ary tree
            If obj is specified, remove removes the first occurrence of the specified object
            If object and parent are specified, remove removes the first occurrence of the specified object which is a descendant of the parent obj</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>boolean</code> - boolean value  </p>
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
            <td><code>Object</code></td>
            <td>an object stored in any node</td>
            </tr>
            <tr>
            <td>parent</td>
            <td><code>Object</code></td>
            <td>NaryNode parent object - the parent n-ary node</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree+removeNode"></a></p>
            <h3 id="narytreeremovenodenarynodec104c">naryTree.removeNode(naryNode) ⇒ <code>boolean</code></h3>
            <p>Removed the n-ary Node passed as a parameter.  If no value is passed, the root node is used.</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>boolean</code> - boolean value  </p>
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
            <td>naryNode</td>
            <td><code>Object</code></td>
            <td>node object - the n-ary node to remove</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree+removeSubtree"></a></p>
            <h3 id="narytreeremovesubtreeobjparentnodec108c">naryTree.removeSubtree(obj, parentNode) ⇒ <code>boolean</code></h3>
            <p>Removes the complete subtree having the specified object in the subtree's root node
            If parent node is specified the object must be underneath the parent node</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>boolean</code> - boolean value  </p>
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
            <td><code>Object</code></td>
            <td>object - an object stored in any node</td>
            </tr>
            <tr>
            <td>parentNode</td>
            <td><code>Object</code></td>
            <td>NaryNode parent node - the parent n-ary node</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree+removeNodeSubtree"></a></p>
            <h3 id="narytreeremovenodesubtreenarynodec113c">naryTree.removeNodeSubtree(naryNode) ⇒ <code>boolean</code></h3>
            <p>Removes the complete subtree where the naryTree node parameter is the root node of the sub-tree</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>boolean</code> - boolean value  </p>
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
            <td>naryNode</td>
            <td><code>Object</code></td>
            <td>node object - an n-ary node positioned at the root of the subtree to remove</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree+size"></a></p>
            <h3 id="narytreesizenarynodec117c">naryTree.size(naryNode) ⇒ <code>number</code></h3>
            <p>If naryNode is not specified, returns in the current size of the n-ary tree as a node count
            If naryNode is specified, returns in the current size of the n-ary tree rooted from the specified node as a node count</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>number</code> - integer value - a count of the nodes comprising the tree rooted at the specified node parameter  </p>
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
            <td>naryNode</td>
            <td><code>Object</code></td>
            <td>parent node - the parent n-ary node</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree+toString"></a></p>
            <h3 id="narytreetostringnarynoderellevelc121c">naryTree.toString([naryNode], [relLevel]) ⇒ <code>string</code></h3>
            <p>If naryNode is not specified, returns a string representation of the entire n-ary tree
            If naryNode is specified, returns a string representation of the n-ary tree from the specified naryNode</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>string</code> - a string representation of the nodes in this n-ary tree instance  </p>
            <table>
            <thead>
            <tr>
            <th id="param">Param</th>
            <th id="type">Type</th>
            <th id="default">Default</th>
            <th id="description">Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>[naryNode]</td>
            <td><code>Object</code></td>
            <td><code>this._root</code></td>
            <td>NaryNode object - an optional parameter specifying the root node of the tree or subtree to be printed as a string representation</td>
            </tr>
            <tr>
            <td>[relLevel]</td>
            <td><code>number</code></td>
            <td><code>1</code></td>
            <td>number - a number used internally to track the correct level indention through recursive calls</td>
            </tr>
            </tbody>
            </table>
            <p><a name="NaryTree+toJSON"></a></p>
            <h3 id="narytreetojsonnarynoderellevelc128c">naryTree.toJSON([naryNode], [relLevel]) ⇒ <code>string</code></h3>
            <p>If naryNode is not specified, returns a JSON representation of the entire n-ary tree
            If naryNode is specified, returns a JSON representation of the n-ary tree from the specified naryNode</p>
            <p><strong>Kind</strong>: instance method of <a href="#NaryTree"><code>NaryTree</code></a><br />
            <strong>Returns</strong>: <code>string</code> - a JSON encoded string representation of the nodes in this n-ary tree instance  </p>
            <table>
            <thead>
            <tr>
            <th id="param">Param</th>
            <th id="type">Type</th>
            <th id="default">Default</th>
            <th id="description">Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>[naryNode]</td>
            <td><code>Object</code></td>
            <td><code>this._root</code></td>
            <td>NaryNode object - an optional parameter specifying the root node of the tree or subtree to be converted to a JSON encoded representation</td>
            </tr>
            <tr>
            <td>[relLevel]</td>
            <td><code>number</code></td>
            <td><code>1</code></td>
            <td>number - a number used internally to track the correct level indention through recursive calls</td>
            </tr>
            </tbody>
            </table>

        </div>
    )
} 

export default NaryTree;