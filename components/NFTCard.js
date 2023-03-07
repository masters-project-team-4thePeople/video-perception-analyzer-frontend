import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, StyleSheet, ScrollView, Dimensions } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
import { RectButton, CircleButton } from "./Button";
// import Video from 'react-native-video';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Button } from "react-native-web";

const NFTCard = ({ data, paused }) => {
  const navigation = useNavigation();
  const video = React.useRef(null);
  const [status, setStatus] = useState({});
  // const [paused, setPaused] = useState(false);
  const [positionStart, setPositionStart] = useState(null)
  const [positionEnd, setPositionEnd] = useState(null)
  const THRESHOLD = 100;

  const {width} = Dimensions.get("window");

  // handleVideoLayout = (e) => {
  //   console.log(e.y)
  //   const {height} = Dimensions.get("window");
  //   setPositionStart(e.y - height + THRESHOLD);
  //   setPositionEnd(e.y + e.height - THRESHOLD)
  // }

  // handleScroll = (e) => {
  //   console.log(e.y)
  //   const scrollPosition = e.nativeEvent.contentOffset.y;
  //   if (scrollPosition > positionStart && scrollPosition < positionEnd && paused) {
  //     setPaused(false)
  //   } else if ((scrollPosition > positionEnd || scrollPosition < positionStart) && !paused) {
  //     setPaused(true);
  //   }
  // }

  return (
      <View
        style={{
          backgroundColor: COLORS.white,
          borderRadius: SIZES.font,
          marginBottom: SIZES.extraLarge,
          margin: SIZES.base,
          ...SHADOWS.dark,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 350,
          }}
        >
          {/* <Image
            source={data.image}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: SIZES.font,
              borderTopRightRadius: SIZES.font,
            }}
          /> */}
          <Video
          ref={video}
          style={styles.video}
          source={data.video}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={setStatus}
          shouldPlay={paused}
          // onLayout={handleVideoLayout}
          />
          {/* <View style={styles.buttons}>
            <Button title="Play from 5s" onPress={() => video.current.playFromPositionAsync(5000)}/>
            <Button title={status.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => video.current.setIsLoopingAsync(!status.isLooping)}/> 
          </View> */}

          <CircleButton imgUrl={assets.heart} right={10} top={10} />
        </View> 

        <SubInfo />

        <View style={{ width: "100%", padding: SIZES.font }}>
          <NFTTitle
            title={data.name}
            subTitle={data.creator}
            titleSize={SIZES.large}
            subTitleSize={SIZES.small}
          />

          <View
            style={{
              marginTop: SIZES.font,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <EthPrice price={data.price} />
            <RectButton
              minWidth={120}
              fontSize={SIZES.font}
              handlePress={() => navigation.navigate("Details", { data })}
            />
          </View>
        </View>
      </View>
  );
};

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  video: {
    flex:1,
    alignSelf: 'stretch'
  },
  buttons: {
    margin: 16
  }
});

export default NFTCard;
