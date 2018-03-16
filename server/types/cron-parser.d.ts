/** Declaration file generated by dts-gen */

declare module 'cron-parser' {

	export = cron_parser

	declare function cron_parser(): void

	declare namespace cron_parser {

		interface ParsedResult {
			prev: () => Date
			next: () => Date
		}

		function _parseEntry(entry?: any): ParsedResult

		function parseExpression(expression?: any, options?: any, callback?: any): ParsedResult

		function parseFile(filePath?: any, callback?: any): ParsedResult

		function parseString(data?: any): ParsedResult

	}

}
