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
 * @param {number} size
 * @param {object} options
 * @returns {(string|number|null|undefined)}
 */
module.exports = function (size, options) {
    return Array.from(Array(size).keys())
};
