function injectElement(reactElement, mainContainerElement){
    // create elemet
    // insert all of the elements
    // append to dom as child
    const element =  document.createElement(reactElement.type)
    element.innerHTML = reactElement.childern
    element.setAttribute('href',reactElement.props.href)
    element.setAttribute('target',reactElement.props.target)

    mainContainerElement.appendChild(element)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    childern: "click me for go to google"
}


const mainContainer =  document.querySelector('#root');

injectElement(reactElement, mainContainer)