AFRAME.registerComponent( 'throw-ball', {
    init : function(){
        console.log('init component' );

        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event){
            console.log('click');
            Context_AF.throwball();
        });
    },
    throwball : function(){
        const Context_AF = this;

        Context_AF.el.parentNode.removeChild( Context_AF.el );

        let yeetElem = document.createElement('a-entity');
        yeetElem.setAttribute('class', 'clickable');
        yeetElem.setAttribute('geometry', 'primitive: sphere; segmentsWidth: 8; segmentsHeight: 8');
        yeetElem.setAttribute('material', 'color:rgb(100, 255, 100)')
        yeetElem.setAttribute('position', '5 5 0');
        yeetElem.setAttribute('animation', 'property: position; to: 80 15 0; dur: 1800; easing: linear')

        //add to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(yeetElem);


    }

});