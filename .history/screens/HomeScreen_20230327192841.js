import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigationavigation();

  return (
    <View>
      <Text className='text-red-500'>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen;