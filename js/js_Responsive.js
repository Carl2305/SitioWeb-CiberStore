// JavaScript Document
var cont=1;
$(document).ready(function(){
	$("#divcarrucel").cycle({fx: "shuffle", eising: "easeOutBack",	delay: -2000});
	barra();
	RedesSociales();
	borrar();
});
function barra(){
	$("#icon_menu").click(function(){
		if(cont===1){
			$("#BarBuscar").css({"display":"none"});
			cont=0;
		}
		else{
			$("#BarBuscar").css({"display":"block"});
			cont=1;
		}
	});
}
function RedesSociales(){
	$(".imgRds").click(function(){
		switch($(this).data("cod")){
			case 0:
				window.open("https://www.facebook.com/"); break;
			case 1:
				window.open("https://twitter.com"); break;
			default:
				window.open("https://mail.google.com/");
		}
	});
}
function borrar(){
	$("#validar01").val('');
	$("#validar02").val('');
	$("#validar03").val('');
}
function validar(){
	var nombre, apellidos, comentario;
	nombre=$("#validar01").val();
	apellidos=$("#validar02").val();
	comentario=$("#validar03").val();
	if(nombre==="" || apellidos==="" || comentario===""){
		alert("Todos los campos son albligatorios");
	}
	else{
		$("#formCQ").submit;
		alert("enviado");
	}
}