import React from 'react';
import { Image, View, Button } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useApiSimpleObj } from '../../hooks';
import styles from './ExampleScreenStyle';
import { Metrics } from '../../styles';
import { TextComponent, PrimaryBtn } from '../../components';
import locales from '../../utils/locales';
export default function ExampleScreen(props) {
	const t = (text) => (locales?.i18n?.t ? locales?.i18n?.t(text) : text);

	const { screenWidth } = Metrics;
	const { colors, images } = useTheme();
	const configLoader = useApiSimpleObj('CONFIG');
	return (
		<View style={[styles.container, { backgroundColor: colors.background }]}>
		 
		</View>
	);
}
