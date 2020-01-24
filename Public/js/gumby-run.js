AFRAME.registerComponent( 'gumby-run', {

    init : function(){
        console.log('init component' );

        const Context_AF = this;

        //Give Gumby health set to 10, also mention in the log how much health he has
        Context_AF.health = 10;
        console.log('Health ', Context_AF.health);

        //if the animation is complete is means Gumby has reached you. this will start the game over function
        Context_AF.el.addEventListener('animationcomplete', function(event){
            Context_AF.gameOver();
            console.log('Health ', Context_AF.health);
        });

    },

    //tick to constantly check if Gumby has health or not
    tick : function(){

        const Context_AF = this;
        
        //If Gumby's health is at 0 it will start the win function
        if (Context_AF.health === 0){
            Context_AF.Winner();
        }

    },

    //create a box made of planes, one saying "game over"
    gameOver : function(){
        const Context_AF = this;

        let GO1Elem = document.createElement('a-plane');
        GO1Elem.setAttribute('id', 'Wall1');
        GO1Elem.setAttribute('Position', '0 2 -4');
        GO1Elem.setAttribute('rotation', '0 0 0');
        GO1Elem.setAttribute('width', '8');
        GO1Elem.setAttribute('height', '4');
        GO1Elem.setAttribute('color', '#292929');

        let GO2Elem = document.createElement('a-plane');
        GO2Elem.setAttribute('id', 'Wall2');
        GO2Elem.setAttribute('Position', '0 2 4');
        GO2Elem.setAttribute('rotation', '180 0 0');
        GO2Elem.setAttribute('width', '8');
        GO2Elem.setAttribute('height', '4');
        GO2Elem.setAttribute('color', '#292929');

        let GO3Elem = document.createElement('a-plane');
        GO3Elem.setAttribute('id', 'Wall3');
        GO3Elem.setAttribute('Position', '-4 2 0');
        GO3Elem.setAttribute('rotation', '0 90 0');
        GO3Elem.setAttribute('width', '8');
        GO3Elem.setAttribute('height', '4');
        GO3Elem.setAttribute('color', '#292929');

        let GO4Elem = document.createElement('a-plane');
        GO4Elem.setAttribute('id', 'Wall4');
        GO4Elem.setAttribute('Position', '3.5 2 0');
        GO4Elem.setAttribute('rotation', '0 -90 0');
        GO4Elem.setAttribute('width', '8');
        GO4Elem.setAttribute('height', '4');
        GO4Elem.setAttribute('color', '#292929');
        GO4Elem.setAttribute('material', 'src:#gameOver_img')

        //add to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(GO1Elem);
        scene.appendChild(GO2Elem);
        scene.appendChild(GO3Elem);
        scene.appendChild(GO4Elem);

    },
    //winning screen will pop up, the log will mention it and Gumby will be deleted
    Winner : function(){
        const Context_AF = this;

        console.log('Winner!!');

        Context_AF.el.parentNode.removeChild( Context_AF.el );

        let W1Elem = document.createElement('a-plane');
        W1Elem.setAttribute('id', 'Wall1');
        W1Elem.setAttribute('Position', '0 2 -4');
        W1Elem.setAttribute('rotation', '0 0 0');
        W1Elem.setAttribute('width', '8');
        W1Elem.setAttribute('height', '4');
        W1Elem.setAttribute('color', '#7BC8A4');

        let W2Elem = document.createElement('a-plane');
        W2Elem.setAttribute('id', 'Wall2');
        W2Elem.setAttribute('Position', '0 2 4');
        W2Elem.setAttribute('rotation', '180 0 0');
        W2Elem.setAttribute('width', '8');
        W2Elem.setAttribute('height', '4');
        W2Elem.setAttribute('color', '#7BC8A4');

        let W3Elem = document.createElement('a-plane');
        W3Elem.setAttribute('id', 'Wall3');
        W3Elem.setAttribute('Position', '-4 2 0');
        W3Elem.setAttribute('rotation', '0 90 0');
        W3Elem.setAttribute('width', '8');
        W3Elem.setAttribute('height', '4');
        W3Elem.setAttribute('color', '#7BC8A4');

        let W4Elem = document.createElement('a-plane');
        W4Elem.setAttribute('id', 'Wall4');
        W4Elem.setAttribute('Position', '3.5 2 0');
        W4Elem.setAttribute('rotation', '0 -90 0');
        W4Elem.setAttribute('width', '8');
        W4Elem.setAttribute('height', '4');
        W4Elem.setAttribute('material', 'src:#winner_img')

        //add to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(W1Elem);
        scene.appendChild(W2Elem);
        scene.appendChild(W3Elem);
        scene.appendChild(W4Elem);

    }

});