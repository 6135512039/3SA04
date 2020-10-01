import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, FlatList,TouchableHighlight,StyleSheet,ImageBackground,Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { Name: 'Kongkom Sumlee', Tel: '081-0774499',Faculty: 'CoE' },

]

const ZipItem = ({ Name, Tel ,Faculty}) => (

        <View>
            <Text style = {styles.text1}>Profiles</Text>
            <Text style = {styles.text3}>Name: {Name}</Text>
            <Text style = {styles.text3}>Tel: {Tel}</Text>
            <Text style = {styles.text3}>Faculty: {Faculty}</Text>
        </View>


)

const _keyExtractor = item => item.code

export default function Profilescreen() {
    const navigation = useNavigation()
    return (
        <View>
            <ImageBackground source={require('./bg2.jpg')} style={styles.backdrop}>
            <View>
            <text>Tang</text>
            </View>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
                
            />
            <StatusBar style="auto" />
            <Button title="Profile" onPress={() => navigation.navigate('pro')}>
            </Button>
        <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('development by tang')}
        />
        
        

            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    text1: {
        backgroundColor: 'black',
        width: 'auto',
        height: 'auto',
        opacity: 0.6,
        color: 'white',
        fontSize: 100,
        alignItems: 'center',
        
    },
    text2: {
        color: 'white',
        fontSize: 70,
        opacity: 0.6,
    },
    text3: {
        color: 'white',
        fontSize: 60,
        opacity: 0.6,
    }
});
