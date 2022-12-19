$(() => {
    const form = $("form[data-validate=true]");
    const formEl = form[0];
    const btn = $("input[type=submit]");

    form.on("keyup", (e) => {
        if (!e.target.checkValidity()) {
            $(e.target).addClass("is-invalid");
            btn.attr("disabled", true);
        } else {
            $(e.target).removeClass("is-invalid");
            btn.removeAttr("disabled");
        }
    });

    form.on("submit", (e) => {
        if (formEl.checkValidity()) {
            btn.removeAttr("disabled");
        } else {
            e.preventDefault();
            e.stopPropagation();
        }
    });
});
