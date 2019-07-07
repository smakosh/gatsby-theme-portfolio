import React from 'react'
import { Global } from './styles'
import './fonts.css'

export default ({ children }) => (
	<>
		<Global />
		{children}
	</>
)