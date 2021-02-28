import React, {useEffect,useState} from "react";
import database from '@react-native-firebase/database';
import {Pressable,Image} from 'react-native'
import { Container, Header, Content, Card, CardItem,Icon, Text, Body,Button, View, Thumbnail, Fab, Right } from "native-base";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
function Studentdetail({navigation}) {

  const [values, setvalue]= useState([])
   useEffect(()=>  {
  
    database().ref("students/").once("value", snapshot => {
          let allNotes = [];
      snapshot.forEach(snap => {
          allNotes.push(snap.val());
        
        }); 
       
       
        
        var value=allNotes
        setvalue(value) 
     
      
      },
      )
         
    },[])
    console.log("outside value",values)
     
    return (
      <Container>
      
     
        <Content padder>
           <Text style={{fontSize:40,fontFamily:'serif'}}>Students</Text>
            {values.map((v,i)=>
            <ScrollView key={i}>
          <Card key={i} >
           <CardItem header bordered style={{justifyContent:'space-between'}}>
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
            <CardItem footer bordered style={{justifyContent:"space-between"}}>

              <Text style={{position:'relative'}}>{`Age:${v.age} `}{"\n"}{"\n"}</Text>
              
              <Text>{`${v.date}`}</Text>
              <Button style={{backgroundColor:'blue'}} ><Text>Delete</Text></Button>
           <Button style={{backgroundColor:'blue'}}><Text>Edit</Text></Button>
            </CardItem>
          
          </Card>
          </ScrollView>
          )}
        </Content>
       
      
      </Container>
    );
  }
export default Studentdetail