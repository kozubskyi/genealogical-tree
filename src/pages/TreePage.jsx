import React from 'react'
import Tree from '../components/Tree/Tree'

const TreePage = () => {
	return (
		<div className="TreePage">
			<Tree />
			{/* <div className="zoom">
				<button onClick={() => setScale(prev => prev + 0.1)}>+</button>
				<button onClick={() => setScale(prev => prev - 0.1)}>-</button>
			</div> */}
		</div>
	)
}

export default TreePage
