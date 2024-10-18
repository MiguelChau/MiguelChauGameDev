const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(pokedev => {
	pokedev.addEventListener("click", () => {
		esconderCartaoPokedev();

		const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

		desativarPokedevNaListagem();
		ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);

	})
})


function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
	const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
	pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
	const pokedevAtivoNaListagem = document.querySelector(".ativo");
	pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
	const idPokedevSelecionado = pokedev.attributes.id.value;
	const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
	const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
	cartaoPokedevParaAbrir.classList.add("aberto");
	return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
	const cartaoPokedevAberto = document.querySelector(".aberto");
	cartaoPokedevAberto.classList.remove("aberto");
}

document.querySelector('.btn-mostrar-projetos').addEventListener('click', function() {
	// Seleciona todos os itens que estão ocultos
	const itensOcultos = document.querySelectorAll('.pokedev.oculto');
  
	// Para cada item oculto, remove a classe 'oculto' para mostrá-los
	itensOcultos.forEach(item => {
	  item.classList.remove('oculto');
	});
  
	// Opcional: Esconder o botão após revelar os itens
	this.style.display = 'none';
  });
