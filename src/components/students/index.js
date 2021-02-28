import React, { useEffect, useState } from "react";
import database from '@react-native-firebase/database';
import { Pressable, Image, TextInput,Picker } from 'react-native'
import { Container, Header, Content, Card, CardItem, Icon, Text, Body, Button, View, Thumbnail, Fab, Right } from "native-base";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
function Student({ navigation }) {

  const [values, setvalue] = useState([])
  const [text ,setText]= useState("FA")


  useEffect(() => {

    database().ref("students/")
    .orderByChild("Education")
    .equalTo(text)
    .once("value", snapshot => {
      let allNotes = [];
      snapshot.forEach(snap => {
        allNotes.push(snap.val());

      });



      var value = allNotes
      setvalue(value)


    },
    )

  },[text])
  console.log("outside value", values)

  return (
    <Container>


      <Content padder>
        <Text style={{ fontSize: 40, fontFamily: 'serif' }}>Students</Text>
        <Picker
        selectedValue={text}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setText(itemValue)}
      >
        <Picker.Item label="Fsc(Med)" value="Fsc(Med)" />
        <Picker.Item label="Fsc(pre)" value="Fsc(pre)" />
        <Picker.Item label="ICS" value="ICS" />
        <Picker.Item label="FA(IT)" value="FA(IT)" />
        <Picker.Item label="BS(IT)" value="BS(IT)" />
        <Picker.Item label="Other" value="Other" />
       
      </Picker>
        {values.map((v, i) =>
          <ScrollView key={i}>
            
            <Card key={i} >
              <CardItem header bordered style={{ justifyContent: 'space-between' }}>
                <Text>{`Name:     ${v.name}`}</Text>
                <Text>{`${v.location}`}</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <View>
                    <Text>
                      {`Education:   ${v.Education}`}
                      {"\n"}
                      {`Email:   ${v.email}`}
                      {"\n"}

                    </Text>
                  </View>
                </Body>
              </CardItem>
              <CardItem footer bordered style={{ justifyContent: "space-between" }}>

                <Text style={{ position: 'relative' }}>{`Age:${v.age} `}{"\n"}{"\n"}</Text>

                <Text>{`${v.date}`}</Text>
              </CardItem>

            </Card>
          </ScrollView>
        )}
      </Content>


    </Container>
  );
}
export default Student