import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FeatureCard = (props) => {
    const navigation = useNavigation();
    const [isFavorited, setIsFavorited] = useState(props.favorite);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderWidth: 1, borderColor: 'lightslategray', borderRadius: 8 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: 130, height: 100 }}>
                <Image source={{ uri: props.img }} style={{ width: 120, height: 90, borderRadius: 21 }} />
            </View>
            <View style={{ flex: 1, flexDirection: 'column', borderTopRightRadius: 10, borderBottomRightRadius: 10, backgroundColor: 'white', paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#333' }}>{props.name}</Text>
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => {
                            navigation.navigate('Restaurant', { name: props.name, img: props.img, price: props.price, cat: props.cat, location: props.location, des: props.des });
                        }}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'gray', marginTop: 5, flex: 1 }}>{props.des}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 5, paddingBottom: 5 }}>
                    <Text style={{ color: '#00CCBB', fontSize: 20 }}>R$ {props.price}</Text>
                    <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={toggleFavorite}>
                        <Icon name="star" size={25} color={isFavorited ? 'gold' : 'gray'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default FeatureCard;
