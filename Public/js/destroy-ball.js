AFRAME.registerComponent( 'destroy-ball', {

    init : function(){

        const Context_AF = this;

        //Here we collect the health variable for Gumby and set it as currenthealth 
        const gumby = document.querySelector('#Gumby');
        let currenthealth = gumby.components['gumby-run'].health;
        
        //once the ball animation is finished currenthealth will subtract 1 from it self then it will return itself to the original Gumby health variable
        Context_AF.el.addEventListener('animationcomplete', function(event){
            //ball Gone function is called
            Context_AF.ballGone();
            currenthealth = gumby.components['gumby-run'].health - 1;
            gumby.components['gumby-run'].health = currenthealth;
            
            console.log('health: ', currenthealth);
        });

    },
    ballGone : function(){
        const Context_AF = this;
        //deletes the ball
        Context_AF.el.parentNode.removeChild( Context_AF.el );
        
    
    },

});