import React from "react";
import { View, Text, Pressable } from "react-native";

export const Welcome = ({navigation}) => {
  return (
    <View>
      <Pressable onPress={()=>{navigation.navigate('Appnavi')}}>
        <Text>Welcome</Text>
      </Pressable>
    </View>
  );
};
