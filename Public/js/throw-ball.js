AFRAME.registerComponent( 'throw-ball', {
    init : function(){
        console.log('init component' );

        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event){
            console.log('click');
            Context_AF.throwball();
        });
        Context_AF.el.addEventListener('mouseenter', function(event){
            Context_AF.el.object3D.material.rgb(100, 200, 100);
        });
        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.material.rgb(100, 255, 100);
        });
    },
    throwball : function(){
        const Context_AF = this;

        Context_AF.el.parentNode.removeChild( Context_AF.el );


    }

});