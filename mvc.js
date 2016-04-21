/**
 * Created by ve on 4/17/16.
 */
/**
 * Created by denis on 17.04.16.
 */

var view = {
    showNumber : function(n){ $('.mvc-result').html(n) }
};


var model = {
    number : 0,

    calculate : function(x,y) {
        this.number = x*y;
        var res = this.number;
        view.showNumber(res)
    }
};

var controller = {
    handleClick : function() {model.calculate(2,5)}
};


$(function(){
    var app = {
        init: function(){ this.main(); this.event()},
        main: function(){},
        event: function(){
            $('.mvc-button').on('click', controller.handleClick);
        }
    }
    //$('.mvc-button').on('click', controller.handleClick);
    app.init()

});