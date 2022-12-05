/**
 * Helper usado para acessar dados em qualquer context
 * sem precisar mudar o cominho do context  com '../',
 * o que causa errors quando formatando os arquivos com
 * com prettier.
 *
 * Uso:
 * ```
 * {{data "user.username"}}
 * {{data "user.list.2.username"}}
 * ```
 *
 * @param {string} path
 * @param {object} options
 * @returns {(string|number|null|undefined)}
 */
module.exports = function (path, options) {
    const parts = path.split(".");

    return (function recurse(props, opts) {
        if (!props.length) return opts;

        const next = props.shift();

        if (!opts[next]) return null;

        return recurse(props, opts[next]);
    })(parts, options.data.root);
};
