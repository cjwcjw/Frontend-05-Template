function createElement(type, attributes, ...children) {
	let element;
	if (typeof type === "string") {
	
		element = new ElementWrapper(type);
	} else {
		element = new type();
	}
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
	for (let child of children) {
		if (typeof child === "string") {
			child = new TextWrapper(child);
		}
		element.appendChild(child);
	}
	return element;
}

class ElementWrapper {
	constructor(type) {
		this.root = document.createElement(type);
	}
	setAttribute(name, value) {
		this.root.setAttribute(name, value);
	}
	appendChild(child) {
		child.mountTo(this.root);
	}
	mountTo(parent) {
		parent.appendChild(this.root);
	}
}

class TextWrapper {
	constructor(text) {
		this.root = document.createTextNode(text);
	}
	setAttribute(name, value) {
		this.root.setAttribute(name, value);
	}
	appendChild(child) {
		child.mountTo(this.root);
	}
	mountTo(parent) {
		parent.appendChild(this.root);
	}
}

class Div {
	constructor() {
		this.root = document.createElement("div");
	}
	mountTo(parent) {
		parent.appendChild(this.root);
	}
	appendChild(child) {
		child.mountTo(this.root);
	}
	setAttribute(key, value) {
		this.root.setAttribute(key, value);
	}
}
let a = (
	<div>
		<Div id="aaaaa">
			<span>我是Div文本</span>
			<span>我是Div文本2</span>
			<span>我是Div文本3</span>
		</Div>
		<div id="bbbbb">
			<span>1</span>
			<span>2</span>
			<span>3</span>
		</div>
	</div>
);

a.mountTo(document.body);