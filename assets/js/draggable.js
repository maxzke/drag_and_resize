$(".item").draggable({
    stop: function(event, ui) {
        // Show dropped position.
        var pos = $(this).position();        
        console.log(pos);
    }

});
$(".item").click(function(){
    console.log(this.id);
});
$(".item" ).resizable({
    stop: function(event, ui) {
        // Show dropped position.
        let alto = ui.size.height;     
        let ancho = ui.size.width;
        console.log('id->'+this.id);
        console.log('height'+alto);
        console.log('width'+ancho);
    }
});


function moverMesas(){    
    let mesas = document.querySelectorAll('.mesa');
    // let elemento;
    // elemento = mesas.className;
    // elemento = mesas.classList.add('item');
    mesas.forEach(element => {
        element.classList.add('item');
        console.log(element);
    });
    console.log(mesas);
}