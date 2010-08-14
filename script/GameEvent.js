function GameEvent(){
    var listeners;

    this.addListener = function(l){
        listeners.push(l);
    };

    this.notify = function(){
        var args = arguments;
        
        listeners.forEach(function(e){
            e.apply({}, args );
        });
    };
    
    (function _constructor(){
        listeners = [];
    }).call(this);

}
