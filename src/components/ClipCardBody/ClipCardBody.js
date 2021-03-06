import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './ClipCardBody.module.scss'

const ClipCardBody = props => {
	const { children, className, ...other } = props
	return (
		<div className={classnames(styles.root, className)} {...other}>
			{children}
		</div>
	)
}

ClipCardBody.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export default ClipCardBody
