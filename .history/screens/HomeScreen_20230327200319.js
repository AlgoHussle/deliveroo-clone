import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

  return (
    <SafeAreaView>
      <Text className='text-red-500'>
        {/* Header */}
        <View>
            <Image 
                source={{
                    uri: 'https://links.papareact.com/wru',
                }}
                className='w-7 h-7'
            />
        </View>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen;