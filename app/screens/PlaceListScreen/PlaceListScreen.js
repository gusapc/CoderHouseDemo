// import React, { useLayoutEffect } from 'react';
// import { Text, View, FlatList, Platform } from 'react-native';
// import HeaderButton from '../../components/HeaderButton/HeaderButton';
// import styles from './PlaceListScreenStyle';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// const PlaceListScreen = ({ navigation }) => {
// 	useLayoutEffect(() => {
// 		navigation.setOptions({
// 			headerRight: () => (
// 				<HeaderButtons HeaderButtonComponent={HeaderButton}>
// 					<Item
// 						title="Nueva"
// 						iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
// 						onPress={() => navigation.push('NewPlaceScreen')}
// 					/>
// 				</HeaderButtons>
// 			),
// 		});
// 	}, [navigation]);
// 	return (
// 		<View style={styles.container}>
// 			<Text>Direccione</Text>
// 		</View>
// 	);
// };

// export default PlaceListScreen;

// import React, { useLayoutEffect } from 'react';
// import { FlatList, Platform } from 'react-native';
// import HeaderButton from '../../components/HeaderButton/HeaderButton';
// import styles from './PlaceListScreenStyle';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// import { useSelector } from 'react-redux';
// import PlaceItem from '../../components/PlaceItem/PlaceItem';

// const PlaceListScreen = ({ navigation }) => {
// 	const places = useSelector((state) => state.Places.places);
// 	useLayoutEffect(() => {
// 		navigation.setOptions({
// 			headerRight: () => (
// 				<HeaderButtons HeaderButtonComponent={HeaderButton}>
// 					<Item
// 						title="Nueva"
// 						iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
// 						onPress={() => navigation.push('NewPlaceScreen')}
// 					/>
// 				</HeaderButtons>
// 			),
// 		});
// 	}, [navigation]);
// 	return (
// 		<FlatList
// 			data={places}
// 			keyExtractor={(item) => item.id}
// 			renderItem={(itemData) => (
// 				<PlaceItem
// 					image={null}
// 					title={itemData.item.title}
// 					address={null}
// 					onSelect={() => navigation.push('Detalle')}
// 				/>
// 			)}
// 		/>
// 	);
// };

// export default PlaceListScreen;

import React, { useLayoutEffect, useEffect } from 'react';
import { FlatList, Platform, View } from 'react-native';
import HeaderButton from '../../components/HeaderButton/HeaderButton';
import styles from './PlaceListScreenStyle';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import PlaceItem from '../../components/PlaceItem/PlaceItem';

const PlaceListScreen = ({ navigation }) => {
	const places = useSelector((state) => state.Places.places);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<HeaderButtons HeaderButtonComponent={HeaderButton}>
					<Item
						title="Nueva"
						iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
						onPress={() => navigation.push('NewPlaceScreen')}
					/>
				</HeaderButtons>
			),
		});
	}, [navigation]);

	return (
		<FlatList
			style={{ flex: 1 }}
			data={places}
			keyExtractor={(item) => item.id}
			renderItem={({ item, index }) => (
				<PlaceItem
					image={item.image}
					title={item.title || `Place Item ${index + 1}`}
					address={null}
					onSelect={() => {
						navigation.push('PlaceDetailScreen', {
							image: item.image,
							title: item.title || `Place Item ${index + 1}`,
						});
					}}
				/>
			)}
		/>
	);
};

export default PlaceListScreen;
