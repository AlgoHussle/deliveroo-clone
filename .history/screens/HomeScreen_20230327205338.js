import { View, Text, SafeAreaView, Image, TextInput } from 'react-native'
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
            <View>
            </View>

            <AdjustmentsVerticalIcon size={35} color='#00CCBB' />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;