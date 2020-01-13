;(function(){
	window.addEventListener("load", loadPage);
	var bigBox = document.getElementById("bigBox");
	var span = document.getElementById("span");
	var form = document.getElementById("form");
	var input = document.getElementById("input");
	var btnGreen = document.getElementById("btnGreen");
	var counter = 1;
	function loadPage(){
		span.addEventListener("click", newForm);
		btnGreen.addEventListener("click", newCard);
		btnGreen.addEventListener("click", newBox);
	}
	function newForm(){
		span.className = "dNone";
		form.className = "form";
		input.focus();
		input.value = "";
	}
	function newCard(e){
		e.preventDefault();
		form.className = "dNone";
			var parent = span.parentElement;
			var title = document.createElement("div");
			var link = document.createElement("a");

			title.innerText = input.value;
			title.classList.add("list-header");
			parent.appendChild(title);

			link.innerText = "Add a card...";
			parent.appendChild(link);
			link.classList.add("link");

			parent.addEventListener("dragover", dragover);
			parent.addEventListener("drop", drop);
			parent.addEventListener("dragenter", dragenter);

			link.addEventListener("click", newText);
		//}
	}
	function newBox() {
		var boxTwo = document.createElement("div");
		boxTwo.className = "box";
		bigBox.appendChild(boxTwo);
		span.className = "add";
		bigBox.insertBefore(span, bigBox.childNodes[0]);
		bigBox.insertBefore(form, bigBox.childNodes[1]);
	}
	function newText(){
		this.className = "dNone";
		var newForm = document.createElement("form");
		var textArea = document.createElement("textarea");
		var btnSmall = document.createElement("button");
		
		newForm.className = "link";
		textArea.className = "input";
		btnSmall.innerText = "Add";
		btnSmall.type = "button";
		btnSmall.classList.add("btnGreen");

		newForm.insertBefore(textArea, newForm.childNodes[0]);
		newForm.insertBefore(btnSmall, newForm.childNodes[1]);
		this.parentElement.appendChild(newForm);
		textArea.focus();
		
		textArea.addEventListener("keydown", autosize);
		btnSmall.addEventListener("click", newEnter);
	}
	function autosize(){
	    this.style.cssText = "height: auto";
        this.style.cssText = "height: " + this.scrollHeight + "px";
	}
	function newEnter(e){
		e.preventDefault();
		this.parentElement.className = "dNone";
		var enter = document.createElement("div");
		enter.setAttribute("draggable", "true");
		enter.setAttribute("id", "move"+counter);
		counter++;
		enter.innerText = this.previousElementSibling.value.trim();
		var parent = this.parentElement.parentElement;
		parent.insertBefore(enter, parent.lastChild);
		enter.className = "enter";
		parent.appendChild(enter.previousSibling);
		parent.lastChild.className = "link";
		
		var cards = document.getElementsByClassName("enter");
		for (var i = 0, l = cards.length; i < l; i++) {
			cards[i].addEventListener("dragstart", dragstart);
			cards[i].addEventListener("dragend", dragend);
			cards[i].addEventListener("dragleave", dragleave);
		}
		enter.addEventListener("dragstart", dragStart);
		enter.addEventListener("dragend", dragEnd);
		enter.addEventListener("dragleave", dragLeave);

	}
	function dragStart(e) {
		e.dataTransfer.setData("text", this.id);
		this.classList.add("edge");
		this.parentElement.classList.add("animated", "tada");
	}
	function dragEnd(e) {
		this.classList.remove("edge");
	}
	function dragLeave(e) {
		this.parentElement.classList.remove("animated", "tada");
	}

	function dragenter(e) {
		this.classList.add("animated", "tada");
	}
	function dragover(e) {
		e.preventDefault();
	}
	function drop(e) {
		e.preventDefault();
		var iddragged = e.dataTransfer.getData("text");
		var draggedElement = document.getElementById(iddragged);
		this.insertBefore(draggedElement, this.lastElementChild);
		draggedElement.classList.add("animated", "bounce");
	}
})();