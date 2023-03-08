import React, { useState, useContext } from "react";
import { View, SafeAreaView, FlatList, ScrollView, Dimensions } from "react-native";

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../constants";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../components/CredentialsContext';

const Home = ({route}) => {
  const [nftData, setNftData] = useState(NFTData);

  const [paused, setPaused] = useState(false);
  const [positionStart, setPositionStart] = useState(null)
  const [positionEnd, setPositionEnd] = useState(null)
  const {width} = Dimensions.get("window");
  const THRESHOLD = 1800;

  const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
  const {user} = storedCredentials;

  const clearLogin = () => {
    AsyncStorage.removeItem('vpaCredentials')
    .then(() => {
      setStoredCredentials("")}
    )
    .catch((error) => console.error(error));
  }

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  const handleScroll = (e) => {
    // console.log('scroll' + e.nativeEvent.contentOffset.y)
    const scrollPosition = e.nativeEvent.contentOffset.y;
    if (scrollPosition > positionStart && scrollPosition < positionEnd && paused) {
      setPaused(false)
    } else if ((scrollPosition > positionEnd || scrollPosition < positionStart) && !paused) {
      setPaused(true);
    }
  }

  const handleVideoLayout = (e) => {
    console.log('video' + e.nativeEvent.layout.y)
    const {height} = Dimensions.get("window");
    setPositionStart(e.nativeEvent.layout.y - height + THRESHOLD);
    setPositionEnd(e.nativeEvent.layouty + e.nativeEvent.layout.height - THRESHOLD)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }} onLayout={handleVideoLayout}>
          <FlatList
            onScroll={handleScroll}
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} paused={paused}/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader userName="Swathi" onSearch={handleSearch}/>}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{ height: 300, backgroundColor: '#6082B6' }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
