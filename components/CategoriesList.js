import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { COLORS, SHADOWS } from "../constants";
// import Video from 'react-native-video';
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategories } from "../redux/actions";

const CategoriesList = ({ item, index, onPress }) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const {category} = useSelector(state=>state.userReducer);
    const dispatch = useDispatch();
    const [temp, setTemp] = useState([]);

    const handlePress = (item) => {
        item.selected = !item.selected
        if(item.selected) {
            let tempVal = [...category]
            tempVal.push(item)
            setTemp(tempVal)
            setSelectedCategory(item.name)
            dispatch(setSelectedCategories(tempVal));
        } else {
            let tempVal = [...category]
            let arrayCropped = tempVal.find((element) => {
                return element.id === item.id;
            })
            if(arrayCropped) {
                let ind = tempVal.indexOf(arrayCropped)
                tempVal.splice(ind, 1)
            }
            setTemp(tempVal)
            setSelectedCategory("")
            setTemp((temp) => [...temp]);
            dispatch(setSelectedCategories(tempVal));
        }
    }
    return (
        <View flex style={{ backgroundColor: COLORS.primary, margin: 55 }}>
            <TouchableOpacity
                style={item.name === selectedCategory ? styles.originalCategories: styles.selectedCategories}
                onPress={() => handlePress(item)}
            >
                <Text style={{ color: COLORS.white, textAlign: 'center' }}>{item.name}</Text>
            </TouchableOpacity>

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
        flex: 1,
        alignSelf: 'stretch'
    },
    buttons: {
        margin: 16
    },
    originalCategories: {
        width: 95,
        height: 95,
        backgroundColor: COLORS.primary,
        position: "absolute",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        borderColor: '#FF7A7A',
        borderWidth: 5
    },
    selectedCategories: {
        width: 95,
        height: 95,
        backgroundColor: COLORS.secondary,
        position: "absolute",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light
    },
});

export default CategoriesList;
