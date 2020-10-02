import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, FlatList,TouchableHighlight,StyleSheet,ImageBackground,Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View>
            <Text style = {styles.text1}>{place}</Text>
            <Text style = {styles.text2}>{code}</Text>
        </View>
    </TouchableHighlight>

)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <ImageBackground source={require('./bg2.jpg')} style={styles.backdrop}>
            <TouchableHighlight onPress={() => navigation.navigate('Profiles')}>
            <View>
            <Text style = {styles.text1}>Profiles</Text>
            </View>
            </TouchableHighlight>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
                
            />
            <StatusBar style="auto" />
            
            
            <Button title="Press me" color="#f194ff" onPress={() => Alert.alert('development by tang')}/>
        
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
        marginTop: 10,
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
        color: 'black',
        marginVertical: 8,
    }
});
