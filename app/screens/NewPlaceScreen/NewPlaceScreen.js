// import React /*{useEffect, useState}*/ from 'react';
// import { Text, View, Button, TextInput, ScrollView } from 'react-native';
// import styles from './NewPlaceScreenStyle';
// import { useTheme } from '@react-navigation/native';

// const NewPlaceScreen = (props) => {
// 	const { colors } = useTheme();
// 	return (
// 		<ScrollView>
// 			<View style={styles.container}>
// 				<Text style={styles.label}> Titulo</Text>
// 				<TextInput style={styles.input} />
// 				<Button title="Grabar direccion" color={colors.amaranthPurple} onPress={() => {}} />
// 			</View>
// 		</ScrollView>
// 	);
// };

// export default NewPlaceScreen;

// import React, { useState } from 'react';
// import { Text, View, Button, TextInput, ScrollView } from 'react-native';
// import styles from './NewPlaceScreenStyle';
// import { useTheme } from '@react-navigation/native';
// import { useDispatch } from 'react-redux';

// import * as placesActions from '../../actions/PlacesActions';

// const NewPlaceScreen = (props) => {
// 	const dispatch = useDispatch();
// 	const [title, setTitle] = useState('');
// 	const { colors } = useTheme();
// 	const onHandlerTitle = (text) => setTitle(test);
// 	const onHandleSave = () => dispatch(placesActions.addPlace(title));
// 	return (
// 		<ScrollView>
// 			<View style={styles.container}>
// 				<Text style={styles.label}> Titulo</Text>
// 				<TextInput
// 					style={styles.input}
// 					onChange={onHandlerTitle}
// 					value={title}
// 				/>
// 				<Button title="Grabar direccion" color={colors.amaranthPurple} onPress={() => {}} />
// 			</View>
// 		</ScrollView>
// 	);
// };

// export default NewPlaceScreen;

// import React, { useState } from 'react';
// import { Text, View, Button, TextInput, ScrollView } from 'react-native';
// import styles from './NewPlaceScreenStyle';
// import { useTheme } from '@react-navigation/native';
// import { useDispatch } from 'react-redux';

// import * as placesActions from '../../actions/PlacesActions';

// const NewPlaceScreen = ({ navigation }) => {
// 	const dispatch = useDispatch();
// 	const [text, onChange] = useState('');
// 	const { colors } = useTheme();
// 	const onHandleSave = () => {
// 		dispatch(placesActions.addPlace(text));
// 		navigation.goBack();
// 	};
// 	return (
// 		<ScrollView>
// 			<View style={styles.container}>
// 				<Text style={styles.label}> Titulo</Text>
// 				<TextInput style={styles.input} onChangeText={onChange} value={text} />
// 				<Button title="Grabar direccion" color={colors.amaranthPurple} onPress={onHandleSave} />
// 			</View>
// 		</ScrollView>
// 	);
// };

// export default NewPlaceScreen;

import React, { useState } from 'react';
import { Text, View, Button, TextInput, ScrollView } from 'react-native';
import styles from './NewPlaceScreenStyle';
import { useTheme } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import * as placesActions from '../../actions/PlacesActions';

import ImageSelector from '../../components/ImageSelector/';

const NewPlaceScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const [text, onChange] = useState('');
	const [selectImage, setSelectImage] = useState('');
	const { colors } = useTheme();
	const onHandleSave = () => {
		dispatch(placesActions.addPlace(text,selectImage ));
		navigation.goBack();
	};
	const onHandlerImageTaken = (path) => setSelectImage(path);
	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.label}> Titulo</Text>
				<TextInput style={styles.input} onChangeText={onChange} value={text} />
				<ImageSelector onImage={onHandlerImageTaken} />
				<View style={styles.footer}>
					<Button title="Grabar direccion" color={colors.amaranthPurple} onPress={onHandleSave} />
				</View>
			</View>
		</ScrollView>
	);
};

export default NewPlaceScreen;
