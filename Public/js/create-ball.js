AFRAME.registerComponent( 'create-ball', {
    init : function(){
        console.log('init component' );

        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event){
            console.log('click');
            Context_AF.createBall();
        });
        Context_AF.el.addEventListener('mouseenter', function(event){
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
        });
        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        });
    },
    createBall : function(){
        const Context_AF = this;

        let ballElem = document.createElement('a-entity');
        ballElem.setAttribute('class', 'clickable');
        ballElem.setAttribute('geometry', 'primitive: sphere; segmentsWidth: 8; segmentsHeight: 8');
        ballElem.setAttribute('material', 'color:rgb(100, 255, 100)')
        ballElem.setAttribute('position', { x: (Math.random() * 6.0), y:0, z: 0 -(Math.random() * 3.0)});

        ballElem.setAttribute('throw-ball', '');

        //add to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(ballElem);

    }

});