import { StyleSheet } from 'react-native';
import { defaultColors } from '../../../assets';
export default StyleSheet.create({
	placeItem: {
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		paddingVertical: 16,
		paddingHorizontal: 30,
		flexDirection: 'row',
		alignItems: 'center',
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: defaultColors.peachPuff,
	},
	info: {
		marginLeft: 25,
		width: 250,
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	title: {
		color: defaultColors.blush,
		fontSize: 18,
		marginBottom: 6,
	},
	address: {
		color: '#666',
		fontSize: 16,
	},
});
