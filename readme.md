########   ***BASICS***   ##########

To create a react file there are many ways
npm -> node packet manager (used to install libraries)
npx -> node packet executer  (not intall libraries but use them)

1)
npx create-react-app filename 

 (Not used widely as it takes time to create as it install large bundles which may not be required by the developer )

Here create-react-app is a utility (software) to create react app

2)
Using custom build process using vite or parcel

npm create vite@latest  


-------------------------------------------------------------------------------------------------------------------
##########  ****CUSTOM REACT****   ###############
 
 TO LEARN HOW REACT INTERPRETS A FUNCTION AND RENDERS IT INTO THE DOM

 SO HERE WE CREATE A CUSTOM RENDER FUNCTION WHICH CREATES AN ELEMENT OF TYPE THAT IS DESCRIBED BY THE USER
 IT THEN SETS ALL ITS PROPERTIES USING SET ATTRIBUTE FUNCTION WITHIN A LOOP 
 IT THEN APPENDS THE NEWLY CREATED ELEMENT TO THE SINGLE DIV PRESENT IN THE MAIN WITH ID ROOT  IN index.html FILE USING METHOD CALLED .appendChild() .NORMALLY BUNDLER IS PRESENT WHICH HELPS TO CONVERT THE JSX CODE TO TREE FORM THAT IS UNDERSTOOD BY REACT.HERE WE CREATE THE TREE OURSELVES AS IT IS CUSTOM REACT.

 function customrender(reactelement,mainelement)  //function used render dom element of specified type
{
    const domelement = document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.children
    for (const key in reactelement.props) {
        if(key==='children')continue;
        domelement.setAttribute(key,reactelement.props[key])
        }
        mainelement.appendChild(domelement)
}
   
-------------------------------------------------------------------------------------------------------------------

########    ***MORE INTO REACT***    ##########

WE KNOW THAT WE EXPORT A FUNCTION WHICH RETURNS HTML (JSX) THIS FUNCTION IS THEN RENDER ONTO THE DOM <FUNCTION/> BUT AS WE 
KNOW THAT BASICALLY WE ARE RENDERING A FUNCTION IN FORM OF <FUNCTION/>
HENCE AS IT IS A  FUCTION WE CAN ALSO USE IT IN FUNTION() THIS FORM .
BUT WE CANNOT DIRECTLY USE AN OBJECT TO RENDER ONTO THE DOM AS THIS IS THE WRONG SYNTAX.

REACT HAS MANY METHODS THAT HELP US MANIPULATE THE DOM ONE OF THEM IS createElement .These elements are injected by Babel.

Syntax =>
const reactelement = React.createElement(
    'a', (html tags)
    {
         href:'https://google.com',target='_blank'              ( an object to set attributes)
    },
    click me to visit google                            (text to be shown)

)
What is Babel used for in React?
Babel is a JavaScript compiler that converts modern JavaScript code into a version compatible with all browsers. Babel enables React developers to use the latest JavaScript syntax in their components. Babel transpiles modern JavaScript for use in React components and all browsers.
-------------------------------------------------------------------------------------------------------------------

#########  ***HOW JAVASCRIPT IS INJECTED IN JSX***   #########

SO TO INJECT VARIABLES OF JS IN FUNCTIONS WE ENCLOSE THEM IN CURLY BRACES
EX:
function login(){
    let username = "Kshitij"
    return(
        <>
        <h1>Hey user {username}!! Welcome Back</h1>
        </>
    )
}
HERE {username} is called as evaluated expression that is the final outcome of that expression, here we cannot use any if else 
condition it should be done before . The evaluated expression is directly injected after tree is created.

-------------------------------------------------------------------------------------------------------------------
##########  ***React Hooks***   ###########

We saw that in counter project when we clicked add value button the value was updating in console but not in UI
Hence React take control of UI updation through the help of React Hooks.
Hooks enable react to update all instances at once.
Hence if any value is to be updated at various places it is done itself by react through help of hooks . We need not grab all elements using id or class as we used to do in JavaScript.
This reduces Code Complexity and is easier for the developer for code debugging.

useState Hook -> Used to change state and propogate change in UI or DOM .
useState hook returns two things in form of array 1st is the counterValue and 2nd is a function that takes care 
of the 1st value.

Syntax ->  const [counterValue,setCounterValue] = useState(default value) Default value van be anything
the function needs to be called while updating value ...REFER COUNTER PROJECT

MORE HOOKS IN LATER PROJECTS..!!!

-------------------------------------------------------------------------------------------------------------------

###########   ***React Virtual DOM  +   React Fiber Architecture***  ###########

createRoot method behind the scene creates a DOM and compares it with main DOM and updates only the changes
Whereas the browser removes the whole DOM and repaints it this concept is called as Page Reloading . 
Hence in Virtual DOM can be tracked in a tree like structure and  change only the updates.

**React Fiber Architecture**(this algorithm is currently used to update the virtual DOM)

React Fiber Architecture is now used by react to update the virtual DOM ,

Features of React Fiber Architecture ->(INTERVIEW **)
 include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.
 i.e-->
 One of the drawback of react was that it updated any changes in virtual DOM instantly into the main DOM ,but if another 2 3 updates are lined up it makes all updates one by one increasing the execution time hence React Fiber Architecture is the algorithm used to pause or abort any update so that no time is wasted in updates that are changed later ..and the final update is made directly into the main DOM .

 ------------------------------------------------------------------------------------------------------------------
  ########     ***Reconciliation Algorithm***     ##########
  Reconciliation is an algorithm that compares/diffrentiates between one tree and another tree. 
  That is it diffrentiates between main DOM of browser and the virtual DOM created using createRoot and then determines which part needs to be changed/updated.

  When u render a react app a tree of nodes that describe the app is generated and stored in memory.
  The tree is flushed to a rendering environment using .render method.
  Whenever the app is updated a new tree is generated and is diffed with previous tree to compute which operations are needed to update the render app.
  -----------------------------------------------------------------------------------------------------------------
  