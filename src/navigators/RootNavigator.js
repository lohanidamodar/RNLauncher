import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { HomeScreen }  from '../screens';
import globalStyles from '../styles/GlobalStyles';

const stackNavOptions = {
    navigationOptions: ({navigation})=>({
        headerStyle: globalStyles.headerStyle,
        headerTitleStyle: globalStyles.headerTitleStyle
    }),
    headerType: 'screen',
    cardStyle: {
        backgroundColor: '#fff',
    }
};

export default RootNavigator = DrawerNavigator({
    Home: { 
        screen: HomeScreen
    }
});