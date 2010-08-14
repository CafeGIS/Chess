function ChessGame(){
    var model = new ChessGameModel();
    var controller = new ChessGameController(model);
    var view = new Chess2DHtmlGraphicalView(model, controller);
}
