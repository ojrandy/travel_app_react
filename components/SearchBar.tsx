import React from 'react';
import {Image, View, TextInput, Text} from 'react-native';

import {icons} from "@/constants/icons"

// Tells the TypeScript what the Props should be
interface Props {
    placeholder: string;
    onPress?: () => void;
    value?: string;
    onChangeText?: (text:string) => void;
}

const SearchBar = ({placeholder, value, onChangeText ,onPress}: Props) => {
    return (
        <View className="flex-row items-center  px-5 py-4 bg-dark-200">
            <Image source={icons.search} className=" size-5" resizeMode="contain" tintColor="#ab8bff"/>
            <TextInput
            onPress={onPress}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor="#a8b5db"
            className="flex-1 ml-2 text-white"

            />
        </View>
    );
};

export default SearchBar;

