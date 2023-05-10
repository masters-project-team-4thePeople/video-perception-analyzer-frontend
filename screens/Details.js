import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList, StyleSheet, ScrollView } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
import { Video, AVPlaybackStatus } from 'expo-av';
import {shuffle} from 'lodash'

const DetailsHeader = ({ data, navigation, video, setStatus }) => (

  <View style={{ width: "100%", height: 200 }}>
    <Video
      ref={video}
      style={styles.video}
      source={{uri: data.video}}
      useNativeControls
      resizeMode="contain"
      isLooping
      onPlaybackStatusUpdate={setStatus}
      shouldPlay={true}
    // onLayout={handleVideoLayout}
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />

    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  const video = React.useRef(null);
  const [status, setStatus] = useState({});
  const [recommendationReason, setRecommendationReason] = useState(['The reason this particular video is recommended to you is based on a combination of factors, including your watch history, search history, and interests. Our algorithms analyze your activity on the platform, including the videos you have watched, liked, and shared, and then suggest new videos that we think you will enjoy based on your preferences. Additionally, we might recommend videos that are popular or trending among users with similar interests, to broaden your horizons. Our goal is to help you discover new content that you will find interesting and engaging', 
  'When you select a category or interest on a video platform, the algorithm uses machine learning to analyze your past behavior, such as the videos you have watched, liked, shared, and searched for, to understand your preferences and interests. Based on this data, the algorithm recommends videos that are similar to the ones you have interacted with in the past, or that other users with similar interests have interacted with. The algorithm also considers other factors such as the popularity of the video, its relevance to the selected category, and the recency of its publication. Overall, the algorithm aims to provide you with a personalized and relevant video experience based on your interests and behavior.',
  'The recommendation is based on machine learning algorithms  used to analyze user behavior on a platform, such as watching history, likes, and interests, to suggest content that they may be interested in. The algorithms are designed to look for patterns in the user behavior and preferences and use those patterns to recommend similar content. For example, if you frequently watch videos about cooking, the recommendation system may suggest more cooking videos or related content such as food blogs or recipe websites. Similarly, if you have liked or commented on videos about a particular sports team, the recommendation system may suggest more content related to that team, such as game highlights, interviews, or news updates. The recommendation system is constantly learning from the user behavior and improving its suggestions over time.',
  'The recommendation is based on patterns in the user behavior and preferences and uses those patterns to suggest videos that the user is likely to be interested in. For example, if a user has watched several videos about dogs, the recommendation system may suggest more videos about dogs or related content such as dog training, dog food, or dog grooming tips. The recommendation system also takes into account the popularity and relevance of the video. If a video has a high number of views, likes, and positive comments, the recommendation system may suggest it to other users who have similar interests. It is important to note that the recommendation system is not always perfect and may suggest videos that the user is not interested in. However, the system is constantly learning from the user behavior and improving its suggestions over time.'
  ])

  const shuffleRecommendationReason = () => {
    shuffle(recommendationReason)
  }
  useEffect(() => {
    shuffleRecommendationReason()
  }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: -100,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <React.Fragment>
        <DetailsHeader data={data} navigation={navigation} video={video} setStatus={setStatus} />
        <SubInfo />
        <View style={{ padding: SIZES.font }}>
          <DetailsDesc data={data} />
          <Text
            style={{
              fontSize: SIZES.font,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
            }}
          >
            Why this video has been recommended?
          </Text>
          <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
            {recommendationReason[0]}
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
              }}
            >
            </Text>
          </Text>
        </View>
        </View>
      </React.Fragment>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

var styles = StyleSheet.create({
  video: {
    flex: 1,
    alignSelf: 'stretch'
  },
})