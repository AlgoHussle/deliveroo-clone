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
    <SafeAreaView className='bg-white pt-5'>
        <Text className='text-red-500'>

          {/* Header */}
            <View className='flex-row pb-3 items-center mx-4 space-x-2'>
                <Image 
                    source={{
                        uri: 'https://links.papareact.com/wru',
                    }}
                    className='w-7 h-7 bg-gray-300 p-4 rounded-full'
            />

            <View className='flex-1'>
                <Text className='font-bold text-gray-400 text-xs'>Deliver now </Text>
                <Text className='font-bold text-xl'>Current Location 
                    <ChevronDownIcon size={20} color='#00CCBB'  />
                </Text>
            </View>

            <UserIcon size={35} color='#00CCBB' />
        </View>

        {/* Search */}
        <View>
            <View></View>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
</svg>

        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;