import { useState } from 'react'
import { CgMenu, CgMenuMotion } from "react-icons/cg";
import { useOnClickOutside } from '../../../hooks/useOnClickOutside.js'
import styles from './ActionMenu.module.scss'
import Menu from './Menu.jsx'

const ActionMenu = () => {
	
	const {isOpen, ref, setIsOpen} = useOnClickOutside(false)
	
	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? <CgMenuMotion color='#900' size={30} /> : <CgMenu color='#900' size={30} />}
			</button>
			<Menu isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	)
}

export default ActionMenu