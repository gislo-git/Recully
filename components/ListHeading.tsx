import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const ListHeading = ({title}:ListHeadingProps) => {
  return (
    <View className='list-head'>
      <Text className='list-title'>{title}</Text>

      <TouchableOpacity className="list-action">
        <Text className='list_action_text'>View all</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ListHeading