/** Declaration file generated by dts-gen */

declare module 'heartbeats' {

	export class Heart {

		age: number

		name: string

		constructor(heartrate?: number, name?: string)

		createEvent(ms?: number, fn?: Function): void
		
		createEvent(ms?: number, options?: Object, fn?: Function): void

		createPulse(name?: string): any

		destroy(): void

		event(name?: string): any

		kill(): void

		killAllEvents(): void

		killEvent(name?: string, beatevent?: any): void

		killPulse(name?: string): void

		newPulse(name?: string): any

		pulse(name?: string): any

		setHeartrate(heartrate?: number): any

	}

	export const all: Object

	export const hearts: Object

	export function create(heartrate?: number, name?: string): Heart

	export function createHeart(heartrate?: number, name?: string): Heart

	export function destroy(name?: string): void

	export function destroyHeart(name?: string): void

	export function heart(name?: string): Heart

	export function killHeart(name?: string): void

}
