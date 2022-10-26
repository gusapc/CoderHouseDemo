import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PlaceListScreen from './screens/PlaceListScreen/PlaceListScreen';
import NewPlaceScreen from './screens/NewPlaceScreen';
import { defaultColors } from '../assets';
import PlaceDetailScreen from './screens/PlaceDetailScreen';
const AppStack = createStackNavigator();

const options = {
	headerStyle: {
	  backgroundColor: defaultColors.darkSienna,
	},
	headerTintColor: '#fff',
	headerTitleStyle: {
	  fontWeight: 'bold',
	},
  }

const AppNavigator = () => (
	<AppStack.Navigator>
		<AppStack.Screen options={options} name="PlaceListScreen" component={PlaceListScreen} />
		<AppStack.Screen options={options} name="NewPlaceScreen" component={NewPlaceScreen} />
		<AppStack.Screen options={options} name="PlaceDetailScreen" component={PlaceDetailScreen} />
	</AppStack.Navigator>
);

export default AppNavigator;