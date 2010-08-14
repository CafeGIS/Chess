function Chess2DHtmlGraphicalView(model, controller){

    var IMG_FILE_SUFFIX = ".png";
    var IMG_DIR = "images/";

    var board;
    var modelConstants;
    var dragInfo;

    /* Private methods */
    
    function createBoard(){
        var i, j,
            htmlDomBoard,
            rank, square;

        var LETTERS = ['a','b','c','d','e','f','g','h'];
    
        htmlDomBoard = document.createElement('div');
        htmlDomBoard.id = "chess-board";
        
        for(i = 1 ; i <= 8 ; i++){
            rank = document.createElement('div');
            rank.className = "chess-board-rank"; // use classList eventually (some public domain code : https://developer.mozilla.org/en/DOM/element.classList)
                                                 // check jQuery as well
            for(j = 1 ; j <= 8 ; j++){
                square = document.createElement('div');
                square.className = "chess-board-square"; // use classList eventually
                square.id = LETTERS[j-1] + (9-i);

                square.addEventListener('dragenter', squareDragEnter, false);
                
                // To tell the browser that some place is droppable, e.preventDefault has to be done to this place on dragover (http://html5doctor.com/native-drag-and-drop/)
                square.addEventListener('dragover', function(e){e.preventDefault();}, false); 
                
                square.addEventListener('drop', squareDrop, false);
                
                rank.appendChild(square);
            }
        
            htmlDomBoard.appendChild(rank);
        }
        
        return htmlDomBoard;
    }
    
    
    function fileName(piece){
        var imgFileName = IMG_DIR;
        
        switch(piece.color){
            case modelConstants.WHITE : 
                imgFileName += "White";
                break;
            case modelConstants.BLACK :
                imgFileName += "Black";
                break;
            default : 
                throw new Error("Piece color not recognized in constructor function of Chess2DHtmlGraphicalView");
        }
        
        switch(piece.type){
            case modelConstants.PAWN : 
                imgFileName += "Pawn";
                break;
            case modelConstants.ROOK :
                imgFileName += "Rook";
                break;
            case modelConstants.KNIGHT : 
                imgFileName += "Knight";
                break;
            case modelConstants.BISHOP :
                imgFileName += "Bishop";
                break;
            case modelConstants.KING : 
                imgFileName += "King";
                break;
            case modelConstants.QUEEN :
                imgFileName += "Queen";
                break;
                
            default : 
                throw new Error("Piece type not recognized in constructor function of Chess2DHtmlGraphicalView");
        }
        
        imgFileName += IMG_FILE_SUFFIX;

        return imgFileName;
    }
    
    /*
    ** Drag & Drop management
    */
    
    function pieceImgDragStart(ev){
        var target = ev.target;
       
        //target.parentNode.style.backgroundColor = 'rgb(200,100,150)';

        ev.dataTransfer.effectAllowed = "move";

        //img = document.createElement("img");
        //img.src = target.src;
        //document.body.appendChild(img);
        //img.width = window.getComputedStyle(img, null).getPropertyValue('width');
        //img.height = window.getComputedStyle(img, null).getPropertyValue('height');
        //target.parentNode.removeChild(target);
        
        ev.dataTransfer.setDragImage(target, 0, 0); // a bit random
        
        dragInfo = {};
        dragInfo.dragStartPos = target.parentNode.id;
        dragInfo.img = target;
        
        //target.parentNode.removeChild(target);
    }
    
    function squareDragEnter(ev){

        ev.target.style.backgroundColor = '#4B0082';
        ev.dataTransfer.dropEffect = "move";
    }
    
        
    function squareDrop(ev){
        var target = ev.target;
            from = dragInfo.dragStartPos,
            to = target.id;
            
        target.style.backgroundColor = 'rgb(150,200,100)';
        
        controller.move(from, to);

        //ev.preventDefault(); 
        ev.stopPropagation(); // otherwise it bubbles up and destroy the document.
        console.log('squareDrop');
        
        return false;
    }
    
    
    
    function movePerformedHandler(from, to){
        var fromSquare = document.getElementById(from),
            fromSquareContent = dragInfo.img, // Unique child
            toSquare = document.getElementById(to);
            
        toSquare.appendChild(fromSquareContent);    
    }
    
    
    /* Public methods */
    this.getBoardDocumentFragment = function(){
        return board;
    };
   

    
    /** constructor function **/
    // Init the board itself.
    // add the pieces according to what is in the model
    // register to model events
    // add the controller functions at the end.
    (function(){
        var currentModelBoard;
        var pos;
        var piece;
        var imgFileName;
        var img;
        
        board = document.createDocumentFragment();
        board.appendChild( createBoard() );
        
        modelConstants = model.getConstants();
        
        currentModelBoard = model.getBoardByPosition();
        
        for(pos in currentModelBoard){ // enumerable properties
            piece = currentModelBoard[pos];
            imgFileName = fileName(piece);
        
            img = document.createElement('img');
            img.src = imgFileName;
            img.draggable = "true";
            
            img.addEventListener('dragstart', pieceImgDragStart, false);
        
            board.querySelector('#' + pos).appendChild(img);
        }
        
        model.addEventListener("movePerformed", movePerformedHandler);
        
    }).call(this);
}
