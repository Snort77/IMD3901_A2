AFRAME.registerComponent( 'create-ball', {
    init : function(){
        console.log('init component' );

        const Context_AF = this;
        
        //When the button is clicked the create ball function is called
        Context_AF.el.addEventListener('click', function(event){
            console.log('click');
            Context_AF.createBall();
        });

        //when the button is hovered over the size increases
        Context_AF.el.addEventListener('mouseenter', function(event){
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
        });
        //when the mouse leaves the button it gos back to normal size
        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        });
    },
    
    createBall : function(){
        const Context_AF = this;

        //This creates the ball but places it randomly in from of the user to make it harder to defeat Gumby
        let ballElem = document.createElement('a-entity');
        ballElem.setAttribute('class', 'clickable');
        ballElem.setAttribute('geometry', 'primitive: sphere; segmentsWidth: 8; segmentsHeight: 8');
        ballElem.setAttribute('material', 'color:rgb(255, 100, 100)');
        ballElem.setAttribute('position', { x:1 + (Math.random() * 3.0), y:2, z: 1 -(Math.random() * 3.0)});

        //this add the throw ball script to the ball object
        ballElem.setAttribute('throw-ball', '');

        //add to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(ballElem);

    }

});