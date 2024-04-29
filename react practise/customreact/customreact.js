function customRender(reactElement, container){
    const domElement= document.createElement
    (reactElement.type)
    domElement.innerHml= reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    
}

const reactElement= {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children : 'click me to visit google'
}

const mainConatiner= document.querySelector('#root')

customRender(reactElement, mainConatiner)
