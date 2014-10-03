var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$lista = $('#contenido'),
	$post = $('.item').first();


if(localStorage.getItem('autosave')) {
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}


function mostrarOcultarFormulario () {
	$form.slideToggle();
	$lista.slideToggle();
	return false;
}


var id = setInterval(function() {
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());
}, 1000)

function agregarPost() {
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();


	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

		$clone.hide();

		$lista.prepend($clone);
		mostrarOcultarFormulario();
		$titulo.val('');
		$url.val('');
		$clone.fadeIn();


	return false;
}
// Eventos
$button.click( mostrarOcultarFormulario );
$form.on('submit', agregarPost)