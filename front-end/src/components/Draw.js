import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Box, makeStyles } from '@material-ui/core'


// const data = {
// 	labels: [
// 		'Red',
// 		'Green',
// 		'Yellow'
// 	],
// 	datasets: [{
// 		data: [300, 50, 100],
// 		backgroundColor: [
// 			'#FF6384',
// 			'#36A2EB',
// 			'#FFCE56'
// 		],
// 		hoverBackgroundColor: [
// 			'#FF6384',
// 			'#36A2EB',
// 			'#FFCE56'
// 		]
// 	}]
// };

const useStyles = makeStyles({
	root: {
		display: "flex"

	}
})

function Draw({data}) {
	const classes = useStyles()
	return (
		<Box className={classes.root}>
			<Doughnut data={data} />
		</Box>
	)
}

export default Draw
