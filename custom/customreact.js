function customrender(reactelement,mainelement)  //function used render dom element of specified type
{
    //
    // const domelement = document.createElement(reactelement.type)
    // domelement.setAttribute('href',reactelement.props.href)
    // domelement.setAttribute('target',reactelement.props.target)

    // domelement.innerHTML = reactelement.children
    // mainelement.appendChild(domelement)

    //This Code will not be sufficient if there are more properties hence we use a loop based code

    const domelement = document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.children
    for (const key in reactelement.props) {
        if(key==='children')continue;
        domelement.setAttribute(key,reactelement.props[key])
        }
        mainelement.appendChild(domelement)
    }
   

const mainelement = document.querySelector('#root')
const reactelement = {
    type:'a',
    props:{
        href: 'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit Google !!!'
}
customrender(reactelement,mainelement)
// but there is no method of how it will render the html to dom hence we use js methods like create element to display in DOM
// type can be can be any of the html tags h1,h2,p,a...
//props refers to properties of element of that type