"use strict";

$("#pix").on("click", function () {
    $("#cartao").prop("checked", false);
});

$("#cartao").on("click", function () {
    $("#pix").prop("checked", false);
});

$("#btn-informar-dados").on("click", function () {
    var regExp = /[a-zA-Z]/g;
    if (regExp.test($("#valor").val()) || $("#valor").val().length === 0) {
        $("#total-com-desconto").text("Total: R$ 0,00");
        alert("Os campos devem ser preenchidos.");
        return;
    }

    var strValor = $("#valor").val();
    var valor = parseFloat(strValor.replace(",", "."));
    var umPorCentoDoValor = valor / 100;
    var dezPorCentoDoValor = umPorCentoDoValor * 10;
    var totalComDesconto = valor - dezPorCentoDoValor;
    $("#total-com-desconto").text("Total: R$ ".concat(totalComDesconto.toFixed(2)));
});

$("#btn-informar-dados").on("click", function () {
    if ($("#pix").is(":checked")) {
        // PIX
        $("#cartao").prop("checked", false);
        $(".cartao").css("display", "none");
        $(".pix").css("display", "block");

        $("#cpf").attr("required", "required");
        // CARTAO
        $("#numero").removeAttr("required");
        $("#titular").removeAttr("required");
        $("#cod-seguranca").removeAttr("required");
        $("#vencimento").removeAttr("required");
        $("#parcelas").removeAttr("required");
    }

    if ($("#cartao").is(":checked")) {
        // CARTAO
        $("#pix").prop("checked", false);
        $(".pix").css("display", "none");
        $(".cartao").css("display", "block");

        $("#numero").attr("required", "required");
        $("#titular").attr("required", "required");
        $("#cod-seguranca").attr("required", "required");
        $("#vencimento").attr("required", "required");
        $("#parcelas").attr("required", "required");
        // PIX
        $("#cpf").removeAttr("required");

        var regExp = /[a-zA-Z]/g;
        if (regExp.test($("#valor").val()) || $("#valor").val().length === 0) {
            var strValor = $("#valor").val("0,00");
        }

        var strValor = $("#valor").val();
        var valor = parseFloat(strValor.replace(",", "."));

        var umaVezSemJuros = valor;
        $("#uma-parcela").text("1 X R$ ".concat(umaVezSemJuros.toFixed(2)));

        var duasVezSemJuros = valor / 2;
        $("#duas-parcela").text("2 X R$ ".concat(duasVezSemJuros.toFixed(2)));

        var tresVezSemJuros = valor / 3;
        $("#tres-parcela").text("3 X R$ ".concat(tresVezSemJuros.toFixed(2)));

        var umPorCentoDoValor = valor / 100;

        var cincoPorCentoDoValor = umPorCentoDoValor * 5;
        var totalComJuros = valor + cincoPorCentoDoValor;
        var quatroVezComJuros = totalComJuros / 4;
        $("#quatro-parcela").text("4 X R$ ".concat(quatroVezComJuros.toFixed(2)));

        var dezPorCentoDoValor = umPorCentoDoValor * 10;
        var totalComJuros = valor + dezPorCentoDoValor;
        var cincoVezComJuros = totalComJuros / 5;
        $("#cinco-parcela").text("5 X R$ ".concat(cincoVezComJuros.toFixed(2)));

        $("#total-com-desconto").text("Total: R$ ".concat(valor.toFixed(2)));
    }
});

$("#numero").on("input", function () {
    var numeroCartao = $("#numero").val();

    if (numeroCartao.startsWith("1234")) {
        $("#card-img").attr("src", "icon/mastercard.png");
        $(".num-cartao-invalido").css("visibility", "hidden");
        return;
    }
    if (numeroCartao.startsWith("4321")) {
        $("#card-img").attr("src", "icon/visacard.png");
        $(".num-cartao-invalido").css("visibility", "hidden");
        return;
    }

    $("#card-img").attr("src", "icon/credit-card.png");
    $(".num-cartao-invalido").css("visibility", "visible");

});

$("#parcelas").on("change", function () {
    $("#parcelas option:selected").each(function () {
        if ($("#uma-parcela").is(":selected")) {
            var strValor = $("#valor").val();
            var valor = parseFloat(strValor.replace(",", "."));
            $("#total-com-desconto").text("Total: R$ ".concat(valor.toFixed(2)));
        }
        if ($("#duas-parcela").is(":selected")) {
            var strValor = $("#valor").val();
            var valor = parseFloat(strValor.replace(",", "."));
            $("#total-com-desconto").text("Total: R$ ".concat(valor.toFixed(2)));
        }
        if ($("#tres-parcela").is(":selected")) {
            var strValor = $("#valor").val();
            var valor = parseFloat(strValor.replace(",", "."));
            $("#total-com-desconto").text("Total: R$ ".concat(valor.toFixed(2)));
        }
        if ($("#quatro-parcela").is(":selected")) {
            var strValor = $("#valor").val();
            var valor = parseFloat(strValor.replace(",", "."));

            var umPorCentoDoValor = valor / 100;
            var cincoPorCentoDoValor = umPorCentoDoValor * 5;
            var totalComJuros = valor + cincoPorCentoDoValor;
            $("#total-com-desconto").text("Total: R$ ".concat(totalComJuros.toFixed(2)));
        }
        if ($("#cinco-parcela").is(":selected")) {
            var strValor = $("#valor").val();
            var valor = parseFloat(strValor.replace(",", "."));
            var umPorCentoDoValor = valor / 100;
            var dezPorCentoDoValor = umPorCentoDoValor * 10;
            var totalComJuros = valor + dezPorCentoDoValor;
            $("#total-com-desconto").text("Total: R$ ".concat(totalComJuros.toFixed(2)));
        }
    })
});

$("#btn-pagar").on("click", function () {
    $(".btn h5").css("visibility", "visible");
    setTimeout(function () {
        $(".btn h5").css("visibility", "hidden");
    }, 5000);
});