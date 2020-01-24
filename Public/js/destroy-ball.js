AFRAME.registerComponent( 'destroy-ball', {

    init : function(){

        const Context_AF = this;

        const gumby = document.querySelector('#Gumby');
        let currenthealth = gumby.components['gumby-run'].ghealth;
        
        Context_AF.el.addEventListener('animationcomplete', function(event){
            Context_AF.ballGone();
            currenthealth = gumby.components['gumby-run'].ghealth - 1;
            gumby.components['gumby-run'].ghealth = currenthealth;
            console.log('health1: ', currenthealth);
        });

    },
    ballGone : function(){
        const Context_AF = this;
        
        Context_AF.el.parentNode.removeChild( Context_AF.el );
        
    
    },

});