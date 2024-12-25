import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { PlaceT } from '@/shared/model/types'
import styles from './styles'
import { LightHeptic } from '@/shared/lib/heptics'
import { useAppNavigation } from '@/shared/lib/navigation'
import Typography from '@/shared/ui/Typography'
import { colors } from '@/shared/lib/theme'
import ArrowUp from "@/shared/assets/icons/interface/ArrowUp";
import Marker from "@/shared/assets/icons/interface/Marker";

type SearchPlaceCardProps = {
  place: PlaceT
  /** @default false */
  reserved?: boolean
  /** @default false */
  used?: boolean
}

const SearchPlaceCard = ({
  place,
  reserved = false,
  used = false,
}: SearchPlaceCardProps) => {
  const navigation = useAppNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        LightHeptic();
        navigation.navigate("PlaceDetail", { reserved, finished: used, placeId: place?.id });
      }}
    >
      <View
        style={styles.content}
      >
        <Image
          source={
            place?.medias?.[0]?.filePath ?
              { uri: place.medias[0].filePath }
              :
              require("@/shared/assets/images/bg-card.png")
          }
          style={{ width: 40, height: 40, }}
          resizeMode="cover"
          borderRadius={100}
        />
        <View style={styles.column}>
          <Typography
            align='left'
            font='b'
          >
            {place.name}
          </Typography>
          <View style={styles.distance}>
            <Marker fill={colors.light} size={12} />
            <Typography
              align='left'
              font='r'
              styles={{marginLeft: 4}}
            >
              {Math.round(place.distanceInM)}m
            </Typography>
          </View>
        </View>
      </View>
      <ArrowUp fill={colors.light} size={12} />
    </TouchableOpacity>
  )
}

export default SearchPlaceCard