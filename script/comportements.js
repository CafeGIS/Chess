function comportementDragStart(ev)
{// Applique a <IMG>
	ev.dataTransfer.effectAllowed='move';
	// Aux echecs, on a besoin que de bouger les pieces
	
	//ev.dataTransfer.setDragImage(ev.target,0,0);
	//ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
	// Ce que je deplace est une image, ca tombe bien !
}	

function comportementDrag(ev) {/* Applique a <IMG> */}
function comportementDragEnd(ev) {/* Applique a <IMG> */}

function comportementDrop(ev)
{// Applique a <DIV>
    var idelt = ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(idelt));
	//ev.target.appendChild(ev.dataTransfer);
	ev.preventDefault();
	//return false;
}

function comportementDragEnter(ev)
{// Applique a <DIV>
	ev.target.style.backgroundColor = '#4B0082';
	ev.dataTransfer.dropEffect = 'move';
}

function comportementDragOver(ev) {/* Applique a <DIV> */}

function comportementDragLeave(ev)
{// Applique a <DIV>
	ev.target.style.backgroundColor = "";
}
