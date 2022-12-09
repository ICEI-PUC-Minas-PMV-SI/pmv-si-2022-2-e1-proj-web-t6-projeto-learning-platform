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
 * @param {object[]} items
 * @param {string} propName
 * @param {string|number|boolean|null|undefined} propValue
 * @returns {(string|number|null|undefined)}
 */
module.exports = function (text) {
    return text
        .split("|")
        .map((line) => line.concat("  \r\n"))
        .join("\r\n");
};
