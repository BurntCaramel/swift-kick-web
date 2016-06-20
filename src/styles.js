import sow from 'react-sow'

const textColor = '#222'
const fieldSize = 16
const fieldColor = '#eee'
const fieldBorder = `none`

export const textAreaStyler = sow({
	width: '100%',
	fontSize: fieldSize,
	padding: '0.5em',
	color: textColor,
	backgroundColor: fieldColor,
	border: fieldBorder
})

export const outputStyler = sow({
	padding: '0.5em',
	backgroundColor: 'rgba(255,255,255, 0.1)'
})
