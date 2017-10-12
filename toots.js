function toots(options = {}){
	this.type    = options.type    || "alert"
	// Alert options
	this.buttons = options.buttons || ["Ok"]
	this.title   = options.title
	this.text    = options.text
	this.icon    = options.icon
	// Loader options
	this.parent	      = options.parent || document.body
	this.animation    = options.animation
	this.message      = options.message
	this.progressBar  = options.progressBar
	this.progressInfo = options.progressInfo
	this.progressPer  = options.progressPer

	this.loaderObjects = {
		weel: "<div class='weel'></div>"
	}

	this.toots_loader = function toots_loader(){
		this.parent.style.position = "relative"
		let container = document.createElement("div")
		container.classList.add("load-background")
		container.innerHTML = this.loaderObjects[this.animation]
		let child = container.children[0]

		this.parent.appendChild(container)

		let parentW = this.parent.clientWidth
		let parentH = this.parent.clientHeight
		let childW  = child.clientWidth
		let childH  = child.clientHeight
		let borderS = getComputedStyle(child, null).borderTopWidth
		let border  = Number(borderS.substring(0, borderS.indexOf("px")))

		let top  = (parentH / 2) - (childH / 2) - border + "px"
		let left = (parentW / 2) - (childW / 2) - border + "px"

		console.log(top, left)

		child.style.top  = top
		child.style.left = left
	}

	this[`toots_${this.type}`]()
}


toots({
	parent: document.getElementById('container_1'),
	type: "loader",
	animation: "weel"
})

toots({
	parent: document.getElementById('container_2'),
	type: "loader",
	animation: "weel"
})

toots({
	parent: document.getElementById('container_3'),
	type: "loader",
	animation: "weel"
})