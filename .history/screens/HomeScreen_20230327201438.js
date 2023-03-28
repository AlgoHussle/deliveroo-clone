import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { 
    ChevronDownIcon,
    UserIcon,
    SearchIcon,
    AdjustmentsIcon,
    } from 'react-native-heroicons/outline';

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
            <View className='flex-row pb-3 items-center mx-4 space-x-2'>
                <Image 
                    source={{
                        uri: 'https://links.papareact.com/wru',
                    }}
                className='w-7 h-7 bg-gray-300 p-4 rounded-full'
            />
            <View>
                <Text className='text-2xl font-bold'>Deliver now </Text>
                <Text className='text-gray-500 font-bold'>Current Location 
                <ChevronDownIcon size={20} color='00CCBB' />
                </Text>
            </View>
        </View>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen;