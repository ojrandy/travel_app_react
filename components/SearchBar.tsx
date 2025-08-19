import React from 'react';
import {Image, StyleSheet, View, TextInput, Text} from 'react-native';

import {icons} from "@/constants/icons"

const SearchBar = () => {
    return (
        <View className="flex-row items-center rounded-full px-5 py-4">
            <Image source={icons.search} className=" size-5" resizeMode="contain" tintColor="#ab8bff"/>
            <TextInput
            onPress={() => {}}
            placeholder="Search"
            value=""
            onChangeText={() => {}}
            placeholderTextColor="#a8b5db"
            className="flex-1 ml-2 text-white"

            />
        </View>
    );
};

export default SearchBar;
const style = StyleSheet.create({});
