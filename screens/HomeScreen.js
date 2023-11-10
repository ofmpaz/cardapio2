import React, { Component, useLayoutEffect } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Entypo'
import { ScrollView } from "react-native";
import Feature from "../components/Home/Feature";


const HomeScreen = () => {

    return (
        <SafeAreaView className=" bg-white">

            <View style={{backgroundColor: 'gold', marginVertical: 1}}>
                    <View>
                        <Text style={{ color: 'gray', marginLeft: 2, fontSize: 64, textAlign: 'center',  }}>CARDÁPIO</Text>
                        
                    </View>
                </View>
               

            {/* Body */}
            <ScrollView showsVerticalScrollIndicator={false} className="bg-gray-100">
                
                
                <Feature />
                <Text></Text>
            </ScrollView>

        </SafeAreaView>
    );
};

export default HomeScreen;
