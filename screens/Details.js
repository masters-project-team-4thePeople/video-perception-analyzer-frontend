import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList, StyleSheet } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
import { Video, AVPlaybackStatus } from 'expo-av';

const DetailsHeader = ({ data, navigation, video, setStatus }) => (

  <View style={{ width: "100%", height: 373 }}>
    <Video
      ref={video}
      style={styles.video}
      source={data.video}
      useNativeControls
      resizeMode="contain"
      isLooping
      onPlaybackStatusUpdate={setStatus}
      shouldPlay
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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
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
            This video is recommended to you because
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