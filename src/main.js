import Matter from 'matter-js'
import matterRect from './physics/rect.js'

import kaboom from 'kaboom'

const k = kaboom({
	fullscreen: true,
	debug: true,
	scale: 1,
	clearColor: [0, 0, 0, 1],
})

k.scene('main', () => {
	const engine = Matter.Engine.create()

	k.add([
		k.pos(k.width() * 0.6, k.height() * 0.1),
		k.rect(110, 32),
		k.rotate(0),
		k.pos(140, 200),
		k.color(255, 0, 0),
		matterRect(engine),
	])

	k.add([
		k.pos(k.width() * 0.5, k.height() * 0.5),
		k.rect(220, 32),
		k.pos(200, 300),
		k.color(0, 0, 1),
		matterRect(engine, { isStatic: true }),
	])

	k.add([
		k.pos(k.width() * 0.7, k.height() * 0.3),
		k.rect(220, 32),
		k.pos(300, 400),
		k.color(0, 0, 1),
		matterRect(engine, { isStatic: true }),
	])

	k.onUpdate(() => {
		Matter.Engine.update(engine, k.dt() * 1000)
	})
})

k.go('main')
