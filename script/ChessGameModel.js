function ChessGameModel(){

    /* CONSTANTS */
    var WHITE = 0,
        BLACK = 1,
        PAWN = 2,
        BISHOP = 3,
        KNIGHT = 4,
        ROOK = 5,
        QUEEN = 6,
        KING = 7;
        EVENT_LIST = ["movePerformed", "moveForbidden"];

    /* Private attributes */
    var board,
        events;
        
        

    /* Private methods */
    function addPiece(piece, position){
        board[position] = piece;
    }
       
    function initBoard(){
        addPiece(new ChessModelPiece(WHITE, ROOK), "a1");
        addPiece(new ChessModelPiece(WHITE, KNIGHT), "b1");
        addPiece(new ChessModelPiece(WHITE, BISHOP), "c1");
        addPiece(new ChessModelPiece(WHITE, QUEEN), "d1");
        addPiece(new ChessModelPiece(WHITE, KING), "e1");
        addPiece(new ChessModelPiece(WHITE, BISHOP), "f1");
        addPiece(new ChessModelPiece(WHITE, KNIGHT), "g1");
        addPiece(new ChessModelPiece(WHITE, ROOK), "h1");
        
        addPiece(new ChessModelPiece(WHITE, PAWN), "a2");
        addPiece(new ChessModelPiece(WHITE, PAWN), "b2");
        addPiece(new ChessModelPiece(WHITE, PAWN), "c2");
        addPiece(new ChessModelPiece(WHITE, PAWN), "d2");
        addPiece(new ChessModelPiece(WHITE, PAWN), "e2");
        addPiece(new ChessModelPiece(WHITE, PAWN), "f2");
        addPiece(new ChessModelPiece(WHITE, PAWN), "g2");
        addPiece(new ChessModelPiece(WHITE, PAWN), "h2");
        
        addPiece(new ChessModelPiece(BLACK, ROOK), "a8");
        addPiece(new ChessModelPiece(BLACK, KNIGHT), "b8");
        addPiece(new ChessModelPiece(BLACK, BISHOP), "c8");
        addPiece(new ChessModelPiece(BLACK, QUEEN), "d8");
        addPiece(new ChessModelPiece(BLACK, KING), "e8");
        addPiece(new ChessModelPiece(BLACK, BISHOP), "f8");
        addPiece(new ChessModelPiece(BLACK, KNIGHT), "g8");
        addPiece(new ChessModelPiece(BLACK, ROOK), "h8");
        
        addPiece(new ChessModelPiece(BLACK, PAWN), "a7");
        addPiece(new ChessModelPiece(BLACK, PAWN), "b7");
        addPiece(new ChessModelPiece(BLACK, PAWN), "c7");
        addPiece(new ChessModelPiece(BLACK, PAWN), "d7");
        addPiece(new ChessModelPiece(BLACK, PAWN), "e7");
        addPiece(new ChessModelPiece(BLACK, PAWN), "f7");
        addPiece(new ChessModelPiece(BLACK, PAWN), "g7");
        addPiece(new ChessModelPiece(BLACK, PAWN), "h7");
     }

    function canMove(from, to){
        return true; // will change eventually...
    }
    
    /* Public methods */
    this.getConstants = function(){
        return {PAWN : PAWN,
                BISHOP : BISHOP,
                KNIGHT : KNIGHT,
                ROOK : ROOK,
                QUEEN : QUEEN,
                KING : KING,
                WHITE : WHITE,
                BLACK : BLACK};
    };
    
    this.pieceAt = function(pos){
        var p = board[pos];
        
        return (p instanceof ChessModelPiece) ? p : null;
    };

    this.move = function(from, to){
        if(this.pieceAt(from) !== null){
            if(canMove(from, to)){
                // actual move
                board[to] = board[from];
                delete board[from];
                
                events["movePerformed"].notify(from, to);
                
                // check if the player has won or if there is pat
                
            }
            else
                events["moveForbidden"].notify(from, to);
        }
        else
            throw new Error("Nothing to be moved on " + from); // create a specific error type eventually
    };

    
    this.addEventListener = function(eventType, listener){
        // check if eventType is cool

        events[eventType].addListener(listener);
    };
    

    this.getBoardByPosition = function(){
        return board;
        // /!\ very dangerous since it's a reference and people could mess the model up. To be replaced by a copy.
    
    };


    (function(){
        events = {};
        EVENT_LIST.forEach(function(e){
                                events[e] = new GameEvent();
                           });
        
        board = {};
        initBoard();
    }).call(this);

}
