$(document).ready(function(){

	//arreglo de objetos con categorías y sub categorías
	var ctg = [
		{
			name: "Aire Libre-Parrillas",
			img: "dist/img/airelibre_y_parrilla.png"
		},
		{
			"name": "Automóvil",
			"img": "dist/img/automovil.png"
		},
		{
			name: "Baño",
			img: "dist/img/bano.png"
		},
		{
			name: "Cocina",
			img: "dist/img/cocina.png"
		},
		{
			name: "Construcción",
			img: "dist/img/construccion.png"
		},
		{
			name: "Decohogar",
			img: "dist/img/decohogar.png"
		},
		{
			name: "Electro y Línea Blanca",
			img: "dist/img/electronica_lineablanca.png"
		},
		{
			name: "Ferretería",
			img: "dist/img/ferreteria.png"
		},
		{
			name: "Herramientas",
			img: "dist/img/herramientas.png"
		},
		{
			name: "Iluminación",
			img: "dist/img/iluminacion.png",
			subcategoria: [
				{
					name_sc: "Ampolletas y Fluorescencia",
					img_sc: "",
					subsgtecategoria: [
					{
						name_ssc: "Ampolletas LED",
						img_ssc: ""
					},
					{
						name_ssc: "Ampolletas Ahorro de Energía",
						img_ssc: ""
					},
					{
						name_ssc: "Ampolletas Halógenas",
						img_ssc: ""
					},
					{
						name_ssc: "Ampolletas Incandescentes",
						img_ssc: ""
					},
					{
						name_ssc: "Ampolletas Eco Halógenas",
						img_ssc: ""
					},
					{
						name_ssc: "Ampolletas Vintage Edison",
						img_ssc: ""
					},
					{
						name_ssc: "Fluorescencia Compacta",
						img_ssc: ""
					},
					{
						name_ssc: "Fluorescentes Circulares",
						img_ssc: ""
					},
					{
						name_ssc: "Tubos Fluorescente",
						img_ssc: ""
					}]
				},
				{
					name_sc: "Iluminación Exterior",
					img_sc: ""
				},
				{
					name_sc: "Iluminación Interior",
					img_sc: ""
				},
				{
					name_sc: "Iluminación LED",
					img_sc: ""
				},
				{
					name_sc: "Ventiladores de techo",
					img_sc: ""
				},
				{
					name_sc: "Iluminación para tu negocio",
					img_sc: ""
				},
				{
					name_sc: "Automatización del Hogar",
					img_sc: ""
				}
			]
		},
		{
			name: "Jardín y terrazas",
			img: "dist/img/jardin_terraza.png"
		},
		{
			name: "Muebles",
			img: "dist/img/muebles.png"
		},
		{
			name: "Pinturas",
			img: "dist/img/pinturas.png"
		},
		{
			name: "Pisos y cerámicas",
			img: "dist/img/pisos_ceramica.png"
		},
		{
			name: "Puertas y ventanas",
			img: "dist/img/puertas_ventanas.png"
		}
	];

	//agregar li con categorias desde la lista de objetos
	for (var i=0; i<ctg.length; ++i){
		$('.carrusel-ctg').append( '<div class="elementoCtg"><img src="' + ctg[i].img + '" alt="' + ctg[i].name + '"><h4>' + ctg[i].name + '</h4></div>' );
	}
	//funciones para quitar display=none en cada caso;
	//aire libre-parrillas
	/*$('').on('click', function(){
		$('').removeClass('ocultar');
	});
	//automovil
	$('').on('click', function(){
		$('').removeClass('ocultar');
	});
	//baño
	$('').on('click', function(){
		$('').removeClass('ocultar');
	});
	//cocina
	$('').on('click', function(){
		$('').removeClass('ocultar');
	});
	//construccion
	$('').on('click', function(){
		$('').removeClass('ocultar');
	});
	//decohogar
	$('').on('click', function(){
		$('').removeClass('ocultar');
	});//electro y linea blanca
	$('').on('click', function(){
		$('').removeClass('ocultar');
	});
	//ferreteria
	$('').on('click', function(){
		$('').removeClass('ocultar');
	});
	//herramientas
	$('').on('click', function(){
		$('').removeClass('ocultar');
	});
	//iluminacion
	$('').on('click', function(){
		$('').removeClass('ocultar');
		//sc ampolletas y fluorescencia
		$('').on('click', function(){
			$('').removeClass('ocultar');
			//ssc ampolletas led
			$('').on('click', function(){
				$('').removeClass('ocultar');
			});
			//ssc ampolletas ahorro de energia
			$('').on('click', function(){
				$('').removeClass('ocultar');
			});
			//ssc ampolletas halogenas
			$('').on('click', function(){
				$('').removeClass('ocultar');
			});
			//ssc ampolletas incandescentes
			$('').on('click', function(){
				$('').removeClass('ocultar');
			});
			//ssc ampolletas eco halogenas
			$('').on('click', function(){
				$('').removeClass('ocultar');
			});
			//ssc ampolletas vintage edison
			$('').on('click', function(){
				$('').removeClass('ocultar');
			});
			//ssc fluorescencia compacta
			$('').on('click', function(){
				$('').removeClass('ocultar');
			});
			//ssc fluorescentes circulares
			$('').on('click', function(){
				$('').removeClass('ocultar');
			});
			//ssc tubos fluorescentes
			$('').on('click', function(){
				$('').removeClass('ocultar');
			});
		});
		//sc iluminacion exterior
		$('').on('click', function(){
			$('').removeClass('ocultar');
		});
		//sc iluminacion interior
		$('').on('click', function(){
			$('').removeClass('ocultar');
		});
		//sc iluminacion led
		$('').on('click', function(){
			$('').removeClass('ocultar');
		});
		//sc ventiladores de techo
		$('').on('click', function(){
			$('').removeClass('ocultar');
		});
		//sc iluminacion para tu negocio
		$('').on('click', function(){
			$('').removeClass('ocultar');
		});
		//sc automatizacion del hogar
		$('').on('click', function(){
			$('').removeClass('ocultar');
		});
	});
	//jardin y terrazas
	$('').on('click', function(){
		$('').removeClass('ocultar');
	});
	//muebles
	$('').on('click', function(){
		$('').removeClass('ocultar');
	});
	//pinturas
	$('').on('click', function(){
		$('').removeClass('ocultar');
	});
	//pisos y ceramicas
	$('').on('click', function(){
		$('').removeClass('ocultar');
	});
	//puertas y ventanas
	$('').on('click', function(){
		$('').removeClass('ocultar');
	});

	//guardar datos al dar click en buscar
	$('#botonBuscar').on('click', function (){

	});*/
});

//carrusel

$('#slider3 .item3').each(function(i){
  var $this = $(this),
      width = $this.width(),
      left = width * i,
      color = 25 * i;
  $this.css({ left: left })
  .find('.inset3').css({ backgroundColor: 'white' });
});
$('.trigger3').on('click',function(){
  var $this = $(this),
      width = $('.item3').width() * 1,
      speed = 500;
  if ( $this.hasClass('first3') ) {
    $('.frame3').animate({ scrollLeft: 0 },speed * 3);
  } else if ( $this.hasClass('last3') ) {
    $('.frame3').animate({ scrollLeft: $('.frame3')[0].scrollWidth },speed * 3);
  } else if ( $this.hasClass('prev3') ) {
    $('.frame3').animate({ scrollLeft: '-=' + width },speed);
  } else if ( $this.hasClass('next3') ) {
    $('.frame3').animate({ scrollLeft: '+=' + width },speed);
  }
});
$('#slider2 .item2').each(function(i){
  var $this = $(this),
      width = $this.width(),
      left = width * i,
      color = 25 * i;
  $this.css({ left: left })
  .find('.inset2').css({ backgroundColor: 'white' });
});
$('.trigger2').on('click',function(){
  var $this = $(this),
      width = $('.item2').width() * 1,
      speed = 500;
  if ( $this.hasClass('first2') ) {
    $('.frame2').animate({ scrollLeft: 0 },speed * 3);
  } else if ( $this.hasClass('last2') ) {
    $('.frame2').animate({ scrollLeft: $('.frame2')[0].scrollWidth },speed * 3);
  } else if ( $this.hasClass('prev2') ) {
    $('.frame2').animate({ scrollLeft: '-=' + width },speed);
  } else if ( $this.hasClass('next2') ) {
    $('.frame2').animate({ scrollLeft: '+=' + width },speed);
  }
});
$('#slider1 .item1').each(function(i){
  var $this = $(this),
      width = $this.width(),
      left = width * i,
      color = 25 * i;
  $this.css({ left: left })
  .find('.inset1').css({ backgroundColor: 'white' });
});
$('.trigger1').on('click',function(){
  var $this = $(this),
      width = $('.item1').width() * 1,
      speed = 500;
  if ( $this.hasClass('first1') ) {
    $('.frame1').animate({ scrollLeft: 0 },speed * 3);
  } else if ( $this.hasClass('last1') ) {
    $('.frame1').animate({ scrollLeft: $('.frame1')[0].scrollWidth },speed * 3);
  } else if ( $this.hasClass('prev1') ) {
    $('.frame1').animate({ scrollLeft: '-=' + width },speed);
  } else if ( $this.hasClass('next1') ) {
    $('.frame1').animate({ scrollLeft: '+=' + width },speed);
  }
});



$("#demo1").click(function(){
$('.no_display1').slideDown(500, function () {});
});

$("#demo2").click(function(){
$('.no_display2').slideDown(500, function () {});
});

$("#demo3").click(function(){
$('.no_display3').slideDown(500, function () {});
});