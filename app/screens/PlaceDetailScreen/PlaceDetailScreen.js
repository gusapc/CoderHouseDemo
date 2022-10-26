import React, { useLayoutEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import { useTheme } from '@react-navigation/native';

import styles from './PlaceDetailScreenStyle';
export default function PlaceDetailScreen({ navigation, route }) {

	const { colors } = useTheme();
	const { image, title } = route.params;

	useLayoutEffect(() => {
		navigation.setOptions({ title: title });
	}, []);

	return (
		<View style={[styles.container, {backgroundColor: colors.black}]}>
			<ImageBackground source={{ uri: image }} resizeMode="contain" style={styles.container}></ImageBackground>
		</View>
	);
}
