AFRAME.registerComponent( 'gumby-run', {

    init : function(){
        console.log('init component' );

        const Context_AF = this;

        if(Context_AF.el.object3D.position = (5, 0, 0)){
            Context_AF.gameOver();
        }

        Context_AF.el.addEventListener('click', function(event){
            console.log('click');
            Context_AF.gameOver();
        });
        Context_AF.el.addEventListener('mouseenter', function(event){
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
        });
        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        });

    },
    gameOver : function(){
        const Context_AF = this;

        let GOE1lem = document.createElement('a-plane');
        GOE1lem.setAttribute('id', 'Green');
        GOE1lem.setAttribute('Position', '0 2 -4');
        GOE1lem.setAttribute('rotation', '0 0 0');
        GOE1lem.setAttribute('width', '8');
        GOE1lem.setAttribute('height', '4');
        GOE1lem.setAttribute('color', '#7BC8A4');

        let GOE2lem = document.createElement('a-plane');
        GOE2lem.setAttribute('id', 'Green');
        GOE2lem.setAttribute('Position', '0 2 4');
        GOE2lem.setAttribute('rotation', '180 0 0');
        GOE2lem.setAttribute('width', '8');
        GOE2lem.setAttribute('height', '4');
        GOE2lem.setAttribute('color', '#7BC8A4');

        let GOE3lem = document.createElement('a-plane');
        GOE3lem.setAttribute('id', 'Green');
        GOE3lem.setAttribute('Position', '-4 2 0');
        GOE3lem.setAttribute('rotation', '0 90 0');
        GOE3lem.setAttribute('width', '8');
        GOE3lem.setAttribute('height', '4');
        GOE3lem.setAttribute('color', '#7BC8A4');

        let GOE4lem = document.createElement('a-plane');
        GOE4lem.setAttribute('id', 'Green');
        GOE4lem.setAttribute('Position', '3.5 2 0');
        GOE4lem.setAttribute('rotation', '0 -90 0');
        GOE4lem.setAttribute('width', '8');
        GOE4lem.setAttribute('height', '4');
        GOE4lem.setAttribute('color', '#7BC8A4');

        //add to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(GOE1lem);
        scene.appendChild(GOE2lem);
        scene.appendChild(GOE3lem);
        scene.appendChild(GOE4lem);

    }

});