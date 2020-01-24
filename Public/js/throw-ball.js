AFRAME.registerComponent( 'throw-ball', {
    init : function(){
        console.log('init component' );

        const Context_AF = this;

        //When a ball is clicked it will start the throwball function
        Context_AF.el.addEventListener('click', function(event){
            console.log('click');
            Context_AF.throwball();
        });
    },
    //the throwball function deletes the previous ball and place a new one
    throwball : function(){
        const Context_AF = this;

        //this deletes the previous ball
        Context_AF.el.parentNode.removeChild( Context_AF.el );

        //The new ball is preset in the middle so it will always hit Gumby it also has a animation of it being thrown
        let yeetElem = document.createElement('a-entity');
        yeetElem.setAttribute('id', 'ball');
        yeetElem.setAttribute('geometry', 'primitive: sphere; segmentsWidth: 8; segmentsHeight: 8');
        yeetElem.setAttribute('material', 'color:rgb(255, 100, 100)');
        yeetElem.setAttribute('position', '3 5 0');
        yeetElem.setAttribute('animation', 'property: position; to: 40 10 0; dur: 1200; easing: linear');
        //add the next js file to the new ball
        yeetElem.setAttribute('destroy-ball', '');

        //add to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(yeetElem);


    }

});