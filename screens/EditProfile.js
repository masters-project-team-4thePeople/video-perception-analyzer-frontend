import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, Linking } from "react-native";
import { HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, FONTS, SIZES } from "../constants";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native";
import Footer from "../components/Footer";
import { DataTable } from 'react-native-paper';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const EditProfile = () => {

  const { userinfo } = useSelector(state => state.userReducer);
  const [filesUploaded, setFilesUploaded] = useState([])
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [videoStatus, setVideoStatus] = useState("")
  const [pipelineStatus, setPipelineStatus] = useState("")
  const tableHead = ['Video Title', 'Video Status', 'Pipeline Status']
  const [tableData, setTableData] = useState([])

  const loadUserUploadedFiles = async (user_id) => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    try {
      let string = 'http://165.22.179.123/videos-api/information?user_id=' + user_id
      const response = await fetch(string, requestOptions);
      const json = await response.json();
      // setFilesUploaded(json)
      if (Object.keys(json).length > 0) {
        let temp = []
        Object.keys(json).forEach(function (e) {
          let obj = {
            title: json[e].video_title,
            url: json[e].video_url,
            status: json[e].vpa_video_status,
            pipelineStatus: json[e].vpa_pipeline_status
          }
          temp.push(obj)
        })
        setTableData(temp)
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (userinfo && userinfo[0] && userinfo[0].id) {
      loadUserUploadedFiles(userinfo[0].id)
    }
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <HomeHeader searchBar={3} />
      <ScrollView>
        <View style={{ alignContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: SIZES.medium,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
              alignContent: 'center',
              textAlign: 'center',
              paddingTop: 20,
              marginLeft: 0,
              flexDirection: 'row'
            }}
          >
            Your Uploads
          </Text>
            {Object.keys(tableData).length > 0 ? <DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title>Video Title</DataTable.Title>
              <DataTable.Title>Video Status</DataTable.Title>
              <DataTable.Title>Pipeline Status</DataTable.Title>
            </DataTable.Header>
            {tableData.map(e => {
              return (
                <DataTable.Row key={e["url"]}>
                  <DataTable.Cell onPress={() => Linking.openURL(e["url"])}><Text style={{color: '#2196f3'}}>{e["title"]}</Text></DataTable.Cell>
                  <DataTable.Cell>{e["status"]}</DataTable.Cell>
                  <DataTable.Cell>{e["pipelineStatus"]}</DataTable.Cell>
                </DataTable.Row>
              )
            })
            }
          </DataTable>: <Text
          style={{
            fontSize: SIZES.medium,
            fontFamily: FONTS.semiBold,
            color: 'red',
            alignContent: 'center',
            textAlign: 'center',
            paddingTop: 20,
            marginLeft: 0,
            flexDirection: 'row'
          }}>You do not have any uploads yet.</Text>}
          
        </View>
      </ScrollView>
      <View>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
});