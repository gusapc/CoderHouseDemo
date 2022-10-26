import { StyleSheet } from 'react-native'; 
import { defaultColors } from '../../../assets';
export default StyleSheet.create({
	container:{
		alignItems: 'center'
	},
	preview:{
		width: '100%',
		height: 200,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: defaultColors.blush,
		borderWidth: 1
	},
	image:{
		width: '100%',
		height: '100%'
	},
});
