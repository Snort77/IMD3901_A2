AFRAME.registerComponent( 'gumby-run', {

    init : function(){
        console.log('init component' );

        const Context_AF = this;

        //Variables are not transfering across yet
        //Context_AF.health = 10;
        let ghealth = 10;
        let thrownballs = 0;
        console.log('Health ', ghealth);
        console.log('Health ', thrownballs);

        //const ball = document.querySelector('#ball');
        //ghealth = ball.components['destroy-ball'].currenthealth;


        //if the animation is complete is means Gumby has reached you. this will start the game over function
        Context_AF.el.addEventListener('animationcomplete', function(event){
            Context_AF.gameOver();
            console.log('Health ', ghealth);
            console.log('Health ', thrownballs);
        });
        
        //Context_AF.el.addEventListener(ghealth == 10); {
        //    console.log('Health ', ghealth);
        //}

        //Context_AF.el.if (ghealth == 7); {
        //    console.log('Health ', ghealth);
        //}

       // Context_AF.el.if (ghealth == 5); {
           // console.log('Health ', ghealth);
       // }

      //  Context_AF.el.if (ghealth == 0); {
      //      console.log('WINNER WINNER HAHAHAHHHAHAAH');
      //      Context_AF.Win();
      //  }

    },

    //create a box made of planes, one saying "game over"
    gameOver : function(ghealth){
        const Context_AF = this;

        let GO1Elem = document.createElement('a-plane');
        GO1Elem.setAttribute('id', 'Wall1');
        GO1Elem.setAttribute('Position', '0 2 -4');
        GO1Elem.setAttribute('rotation', '0 0 0');
        GO1Elem.setAttribute('width', '8');
        GO1Elem.setAttribute('height', '4');
        GO1Elem.setAttribute('color', '#7BC8A4');

        let GO2Elem = document.createElement('a-plane');
        GO2Elem.setAttribute('id', 'Wall2');
        GO2Elem.setAttribute('Position', '0 2 4');
        GO2Elem.setAttribute('rotation', '180 0 0');
        GO2Elem.setAttribute('width', '8');
        GO2Elem.setAttribute('height', '4');
        GO2Elem.setAttribute('color', '#7BC8A4');

        let GO3Elem = document.createElement('a-plane');
        GO3Elem.setAttribute('id', 'Wall3');
        GO3Elem.setAttribute('Position', '-4 2 0');
        GO3Elem.setAttribute('rotation', '0 90 0');
        GO3Elem.setAttribute('width', '8');
        GO3Elem.setAttribute('height', '4');
        GO3Elem.setAttribute('color', '#7BC8A4');

        let GO4Elem = document.createElement('a-plane');
        GO4Elem.setAttribute('id', 'Wall4');
        GO4Elem.setAttribute('Position', '3.5 2 0');
        GO4Elem.setAttribute('rotation', '0 -90 0');
        GO4Elem.setAttribute('width', '8');
        GO4Elem.setAttribute('height', '4');
        GO4Elem.setAttribute('color', '#7BC8A4');
        GO4Elem.setAttribute('material', 'src:#gameOver_img')

        //add to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(GO1Elem);
        scene.appendChild(GO2Elem);
        scene.appendChild(GO3Elem);
        scene.appendChild(GO4Elem);

    }
    
});