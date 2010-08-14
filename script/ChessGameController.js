function ChessGameController(model){

    var gameModel;

    this.move = function(from, to){
        gameModel.move(from, to); 
    };

    (function(){
        gameModel = model;
    }).call(this);


}
