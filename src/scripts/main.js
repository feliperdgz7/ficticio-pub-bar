$('#telefone').mask('(00) 00000-0000',{
    placeholder: '(xx) xxxxx-xxxx'
});

$('form').validate({
    rules:{
        nome:{
            required: true
        },
        email:{
            required: true,
            email: true
        },
        mensagem:{
            required: true
        },
    },
    errorPlacement: function(error, element){
        error.addClass('error');
        error.insertAfter(element);
    },

    submitHandler: function(form){
        alert('Enviado com Sucesso!')
        $('#form') = ''
    }
})

document.addEventListener('DOMContentLoaded', function(){
    const modalExemplo = new bootstrap.Modal('#maior-idade');
    setTimeout(function(){
        modalExemplo.show();
    }, 1000);
})