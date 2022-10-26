import React, { useState } from 'react';
import { View, Button, Image, Text, Alert,Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import styles from './ImageSelectorStyle';
import { useTheme } from '@react-navigation/native';

export default function ImageSelector(props) {
	const { colors } = useTheme();
	const [pickerUrl, setPickerUrl] = useState();

	const verifyPermissions = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		if (status !== 'granted') {
			Alert.alert('Permisos insuficentes', 'Necesita dar permisos de uso de la camara para usar esta app', [
				{ text: 'OK' },
			]);
			return false;
		}
		return true;
	};

	const handlerTakeImage = async () => {
		const isCameraOk = await verifyPermissions();
		if (!isCameraOk) return;

		if(Platform.OS === 'ios'){
			const image = await ImagePicker.launchImageLibraryAsync({
				allowsEditing: true,
				aspect: [16, 9],
				quality: 0.8,
			});
			setPickerUrl(image.uri);
			props.onImage(image.uri);

		} else {
			const image = await ImagePicker.launchCameraAsync({
				allowsEditing: true,
				aspect: [16, 9],
				quality: 0.8,
			});
			setPickerUrl(image.uri);
			props.onImage(image.uri);

		}

 
	};

	return (
		<View style={styles.container}>
			<View style={styles.preview}>
				{!pickerUrl ? (
					<Text>No hay Imagen selecionada .... </Text>
				) : (
					<Image style={styles.image} source={{ uri: pickerUrl }} />
				)}
			</View>
			<Button title="Tomar foto" color={colors.salmonPink} onPress={handlerTakeImage} />
		</View>
	);
}
