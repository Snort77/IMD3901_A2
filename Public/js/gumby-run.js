AFRAME.registerComponent( 'gumby-run', {

    init : function(){
        console.log('init component' );

        const Context_AF = this;

        Context_AF.el.object3D.position.set(40);

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
});