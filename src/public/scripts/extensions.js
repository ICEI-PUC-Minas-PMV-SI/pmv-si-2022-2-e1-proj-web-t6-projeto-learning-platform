$.fn.mutate = function (attributes, callback) {
    const config = {
        attributes: true,
        childList: true,
        attributeOldValue: true,
        attributeFilter: attributes,
    };

    const observer = new MutationObserver((mutationList, observer) => {
        const { target, attributeName } = mutationList[0] || {};

        if (attributes.indexOf(attributeName) > -1) {
            callback(
                attributes.reduce((values, attribute) => {
                    return {
                        ...values,
                        [attribute]: target.getAttribute(attribute),
                    };
                }, {})
            );
        }
    });

    this.each((i, el) => {
        observer.observe(el, config);
    });
};

$.fn.queryParams = function () {
    const url = new URL(window.location.href);
    return url.searchParams;
};

$.fn.updateUrl = function (params = {}) {
    const url = new URL(window.location);

    Object.keys(params).forEach((key) => {
        url.searchParams.set(key, value);
    });

    window.history.pushState(null, "", url.toString());
};

$.fn.navigate = function (params = {}) {
    const url = new URL(window.location);

    Object.keys(params).forEach((key) => {
        url.searchParams.set(key, value);
    });

    window.location.href = url.toString();
};

$.fn.render = function (template, context, mode) {
    const { templates } = Handlebars;

    if (template in templates) {
        if (mode === "append") {
            return this.append(templates[template](context));
        }
        if (mode === "prepend") {
            return this.prepend(templates[template](context));
        }

        this.html(templates[template](context));
    }
};
