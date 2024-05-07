import { createElement,render,renderDOM } from "./virtualDom";

const vDom1 = createElement('ul', { class: 'list', style: 'width: 300px; height: 300px; background-color: orange' }, [
    createElement('li', { class: 'item', 'data-index': 0, }, [
        createElement('p', { class: 'text' }, ['第1个列表项'])
    ]),
    createElement('li', { class: 'item', 'data-index': 1, }, [
        createElement('p', { class: 'text' }, [
            createElement('span', { class: 'title' }, ['第2个列表项'])
        ]),
    ]),
    createElement('li', { class: 'item', 'data-index': 2, }, ['第3个列表项'])
]);
const vDom2 = createElement('ul', { class: 'list', style: 'width: 300px; height: 300px; background-color: orange' }, [
    createElement('li', { class: 'item', 'data-index': 0, }, [
        createElement('p', { class: 'title' }, ['第1个列表项'])
    ]),
    createElement('li', { class: 'item', 'data-index': 1, }, [
        createElement('p', { class: 'text' }, [
            createElement('span', { class: 'title' }, ['第2个列表项'])
        ]),
    ]),
    createElement('div', { class: 'item', 'data-index': 2, }, ['第3个列表项'])
]);

const rDom = render(vDom1)
renderDOM(rDom,document.getElementById('app'))
//render函数的目的是把虚拟节点转化成真实节点
console.log('这就是虚拟节点',vDom1)
