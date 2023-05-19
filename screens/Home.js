import React, { useState, useContext, useCallback, useEffect } from "react";
import { View, SafeAreaView, FlatList, Dimensions, Text, Image, TouchableOpacity } from "react-native";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData,categoriesVideoData, assets, SIZES } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../components/CredentialsContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { setUserCategories, setVideoPlaying } from "../redux/actions";
import {shuffle} from 'lodash'

const Home = ({route}) => {
  const navigation = useNavigation();
  // const [nftData, setNftData] = useState(NFTData);
  const [nftData, setNftData] = useState([]);
  const [videoViewingData, setVideoViewingData] = useState([]);
  // const [videoCategoriesData, setVideoCategoriesData] = useState([]);
  const { usercategories } = useSelector(state => state.userReducer);
  const [paused, setPaused] = useState(false);
  const [positionStart, setPositionStart] = useState(null)
  const [positionEnd, setPositionEnd] = useState(null)
  const {width} = Dimensions.get("window");
  const dispatch = useDispatch();
  const THRESHOLD = 1800;
  const [isVisible, setIsVisible] = useState(false)
  // const [userCategories, setUserCategories] = useState([])
  

  const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
  const {user} = storedCredentials ? storedCredentials : {};

  const clearLogin = () => {
    AsyncStorage.removeItem('vpaCredentials')
    .then(() => {
      setUserCategories([])
      setStoredCredentials("")}
    )
    .catch((error) => console.error(error));
  }

  const loadCategoriesOfUser = async() => {
    let showData = []
    Object.keys(usercategories).forEach(e=> {
      showData.push(...categoriesVideoData[e])
    })
    showData = shuffle(showData)
    setVideoViewingData(showData)
    setNftData(showData)
  }

  useEffect(()=>{
    loadCategoriesOfUser()
  }, [usercategories])

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(videoViewingData);
    }

    const filteredData = videoViewingData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(videoViewingData);
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
    const {height} = Dimensions.get("window");
    setPositionStart(e.nativeEvent.layout.y - height + THRESHOLD);
    setPositionEnd(e.nativeEvent.layouty + e.nativeEvent.layout.height - THRESHOLD)
  }

  const _onViewableItemsChanged = useCallback(({ viewableItems }) => {
      if(viewableItems[0]){
        if(viewableItems[0].isViewable){
          setIsVisible(true)
        }
        dispatch(setVideoPlaying([viewableItems[0]["item"]]))
      }

  }, []);

  const _viewabilityConfig = {
    itemVisiblePercentThreshold: 100
  }  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }} onLayout={handleVideoLayout}>
          <FlatList
            onScroll={handleScroll}
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item}/>}
            keyExtractor={(item) => item.id}
            onViewableItemsChanged={_onViewableItemsChanged}
            viewabilityConfig={_viewabilityConfig}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} searchBar={1}/>}
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

        {/* <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
          <View style={{backgroundColor: 'white', height: 40, color: 'black', flexDirection: 'row'}}>
            <TouchableOpacity onPress={navigateToHome}>
              <Image
                source={assets.home}
                resizeMode="contain"
                style={{ width: 30, height: 30, marginLeft: 40, marginTop: 10, shadowColor: 'black' }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToUpload}>
              <Image
                source={assets.upload}
                resizeMode="contain"
                style={{ width: 30, height: 30, marginLeft: 65, marginTop: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToEdit}>
              <Image
                source={assets.edit}
                resizeMode="contain"
                style={{ width: 30, height: 30, marginLeft: 65, marginTop: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToProfile}>
              <Image
                source={assets.user}
                resizeMode="contain"
                style={{ width: 30, height: 30, marginLeft: 65, marginTop: 10 }}
              />
            </TouchableOpacity>
          </View>
        </View> */}
        <Footer/>
      </View>
    </SafeAreaView>
  );
};

export default Home;
