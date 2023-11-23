########   BASICS   ##########
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
##########  CUSTOM REACT   ###############
 
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

########    MORE INTO REACT WITH VITE    ##########
 


