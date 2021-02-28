import React, { useEffect, useState } from "react";
import database from '@react-native-firebase/database';
import { Pressable, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Icon, Text, Body, Button, View, Thumbnail, Fab, Right } from "native-base";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
function Companydetail({ navigation }) {

    const [values, setvalue] = useState([])
    useEffect(() => {

        database().ref("companies/").once("value", snapshot => {
            let allNotes = [];
            snapshot.forEach(snap => {
                allNotes.push({
                    name: snap.val(),
                    _key: snap.key
                });

            });



            var value = allNotes
            setvalue(value)


        },
        )

    }, [])
    const dell = async (e)  => {
         await database()
            .ref(`/companies/${e}`)
            .remove().then(()=> alert('deleted'),
            database().ref("companies/").once("value", snapshot => {
                let allNotes = [];
                snapshot.forEach(snap => {
                    allNotes.push({
                        name: snap.val(),
                        _key: snap.key
                    });
    
                });
    
    
    
                var value = allNotes
                setvalue(value)
    
    
            },
            )
    
            )
           
    }
    console.log("outside value", values)

    return (
        <Container>


            <Content padder>
                <Text style={{ fontSize: 40, fontFamily: 'serif' }}>Companies</Text>
                {values.map((v, i) =>
                    <ScrollView key={i}>
                        <Card key={i} >
                            <CardItem header bordered style={{ justifyContent: 'space-between' }}>
                                <Text>{`Name:     ${v.name.name}`}</Text>
                                <Text>{`${v.name.location}`}</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <View>
                                        <Text>
                                            {`Education:   ${v.name.Education}`}
                                            {"\n"}
                                            {`Email:   ${v.name.email}`}
                                            {"\n"}

                                        </Text>
                                    </View>
                                </Body>

                            </CardItem>
                            <CardItem footer bordered style={{ justifyContent: "space-between" }}>
                                <Button style={{ backgroundColor: 'blue' }} onPress={()=>dell(v._key)}>
                                    <Text>Delete</Text></Button>
                                <Button style={{ backgroundColor: 'blue' }}><Text>Edit</Text></Button>

                            </CardItem>

                        </Card>
                    </ScrollView>
                )}
            </Content>


        </Container>
    );
}
export default Companydetail