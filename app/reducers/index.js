import { combineReducers } from 'redux';
import SimpleObjectReducer from './SimpleObjectReducer';
import PlacesReducer from './PlacesReducer'
const rootReducer = combineReducers({
    Config: SimpleObjectReducer('CONFIG'),
    Places: PlacesReducer
});

export default rootReducer;