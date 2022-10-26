import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { HeaderButton } from 'react-navigation-header-buttons';
const HeaderBtn = (props) => {
	const { colors } = useTheme();
	return (
		<HeaderButton
			{...props}
			IconComponent={Ionicons}
			iconSize={23}
			color={ colors.white}
		/>
	);
};

export default React.memo(HeaderBtn);
