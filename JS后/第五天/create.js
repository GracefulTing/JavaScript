function createElement(thename,parent,classname){
	var n = document.createElement(thename);
	n.className = classname;
	parent.appendChild(n);
	return n;
}