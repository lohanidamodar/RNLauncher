import React from 'react';
import { View, Text, Button, ScrollView, NativeModules, BackHandler, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Divider, Card } from '../../components';

class HomeScreen extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title: 'Home'
    })
    allApps;
    componentWillMount(){
        console.log("All packages", NativeModules.InstalledApps.getApps);
        console.log("All packages", JSON.parse(NativeModules.InstalledApps.getApps));
        allApps = JSON.parse(NativeModules.InstalledApps.getApps);
        
    }
    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', function() {
            return true;
        });
    }
    handleOnPress = (app) => {
        NativeModules.InstalledApps.launchApplication(app.name)

    }
    render(){
        return(
            <ScrollView style={styles.container}>
                {allApps.map((app,i)=>{return(
                    <TouchableOpacity key={i} onPress={()=>this.handleOnPress(app)} style={styles.appListItem}>
                        <Text style={styles.text}>{app.label}</Text>
                    
                    </TouchableOpacity>
                )})}
                
            </ScrollView>
        )
    }
}

export default HomeScreen;