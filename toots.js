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
		
		let parentPos = getComputedStyle(this.parent).position
		if(parentPos == "static" || parentPos == "unset"){
			this.parent.style.position = "relative"
		}

		this.container = document.createElement("div")
		this.container.classList.add("load-background")
		this.container.innerHTML = this.loaderObjects[this.animation]
		let child = this.container.children[0]

		this.parent.appendChild(this.container)

		let parentW = this.parent.clientWidth
		let parentH = this.parent.clientHeight
		let childW  = child.clientWidth
		let childH  = child.clientHeight
		let borderS = getComputedStyle(child, null).borderTopWidth
		let border  = Number(borderS.substring(0, borderS.indexOf("px")))

		let top  = (parentH / 2) - (childH / 2) - border + "px"
		let left = (parentW / 2) - (childW / 2) - border + "px"
		
		child.style.top  = top
		child.style.left = left
	}

	this[`toots_${this.type}`]()
	
	return new Promise(function(resolve, reject){
			resolve(this.container)
	}.bind(this))
}

toots({
	parent: document.getElementById('container_4_1'),
	type: "loader",
	animation: "weel"
})
toots({
	parent: document.getElementById('container_4_2'),
	type: "loader",
	animation: "weel"
})
