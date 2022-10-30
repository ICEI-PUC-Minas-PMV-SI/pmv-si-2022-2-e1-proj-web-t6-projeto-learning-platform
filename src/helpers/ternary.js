


/**
 * Helper usado para acessar dados em qualquer context
 * sem precisar mudar o cominho do context  com '../',
 * o que cause errors quando formatando os arquivos com
 * com prettier.
 *
 * Uso:
 * ```
 * {{data "user.username"}}
 * {{data "user.list.2.username"}}
 * ```
 *
 * @param {boolean} check
 * @param {string|number|boolean} value1
 * @param {string|number|boolean} value2
 * @returns {(string|number|null|undefined)}
 */
module.exports = function (check, value1, value2, options) {
    return check ? value1 : value2;
};
