$("#submitButton").click(function () {
    var email = $("#email").val();
    if (IsEmail(email)) {
        var nome = $("#nome").val();
        var telefone = $("#telefone").val();
        var observacao = $("#observacao").val();
        var mensagem = `Nome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nObservacao: ${observacao}`;
        alert(mensagem);
    } else {
        alert("Email inválido!")
    }
});

 $("#telefone").mask("(999) 99999-9999");

function IsEmail(email) {
    const regex =
        /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    }

    return true;
}