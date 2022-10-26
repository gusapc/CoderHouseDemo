import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './PlaceItemStyle';

const PlaceItem = (props) => {
	return (
		<TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
			<Image   source={{ uri: props.image }} style={styles.image}  />
			<View style={styles.info}>
				<Text style={styles.title}>{props.title}</Text>
				<Text style={styles.address}>{props.address}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default React.memo(PlaceItem);

PlaceItem.propTypes = {
	onSelect: PropTypes.func,
	image: PropTypes.string,
	title: PropTypes.string,
	address: PropTypes.string,
};

PlaceItem.defaultProps = {
	onSelect: () => {},
	image: '',
	title: '',
	address: '',
};
