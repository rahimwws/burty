import { View, ScrollView, Image } from 'react-native'
import React from 'react'
import ScreenLayout from '@/shared/ui/Layout'
import Typography from '@/shared/ui/Typography'
import { LargeButton } from '@/shared/ui/Button'

const Error = () => {
  return (
    <ScreenLayout>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image
            style={{ width: '100%', maxWidth: 400, maxHeight: 400, }}
            resizeMode="contain"
            source={require("@/shared/assets/images/error-img.png")}
          />
        </View>
        <View style={{ marginTop: '8%' }}>
          <Typography size={20} font='b'>
            Oops! Something went wrong.
          </Typography>
        </View>
        <View style={{ marginVertical: '6%' }}>
          <Typography size={16} font='m'>
            It seems we can't find the page you're looking for. The link might be broken or the page might have been removed.
          </Typography>
        </View>
        <LargeButton
          text='Back to home'
          type='rounded'
          route='DiscoverNavigator'
          isRoute
        />
      </View>
    </ScreenLayout>
  )
}

export default Error