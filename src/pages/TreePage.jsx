import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Tree from '../components/Tree/Tree'

const TreePage = () => {
	return (
		<div className="TreePage">
			<Tree />
			<Outlet />
		</div>
	)
}

export default TreePage
