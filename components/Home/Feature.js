import React from 'react';
import { Text, View } from 'react-native';
import { data, datasuco } from '../../data/Data';
import FeatureCard from './FeatureCard';

const Feature = () => {
    return (
        <View style={{ marginTop: 8, paddingHorizontal: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 36, color: '#333', marginBottom: 15 }}>Lanches</Text>
            </View>
            {data.map((offer) => (
                <View key={offer.id} style={{ marginBottom: 1 }}>
                    <FeatureCard
                        id={offer.id}
                        img={offer.image}
                        name={offer.name}
                        cat={offer.category}
                        price={offer.price}
                        location={offer.location}
                        des={offer.desc}
                        favor={offer.favorite}
                    />
                </View>
            ))}

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 36, color: '#333', marginBottom: 15 }}>Sucos</Text>
            </View>
            {datasuco.map((offer) => (
                <View key={offer.id} style={{ marginBottom: 1 }}>
                    <FeatureCard
                        id={offer.id}
                        img={offer.image}
                        name={offer.name}
                        cat={offer.category}
                        price={offer.price}
                        location={offer.location}
                        des={offer.desc}
                        favor={offer.favorite}
                    />
                </View>

            ))}
        </View>


    );
};

export default Feature;
