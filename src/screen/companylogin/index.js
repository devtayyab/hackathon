import React ,{useState}from 'react';
import auth from '@react-native-firebase/auth';
import {ScrollView,StyleSheet,Image,Picker} from 'react-native'
import {  Header,  Form, Item,
     Input, Label,Icon,Text, Button, Card,} from 'native-base';
import database from '@react-native-firebase/database';
  function CompanySignup({navigation}) {
 
  const[ name, setname] = useState()
  const[ email, setemail] = useState()
  const[ password, setpassword] = useState()
  const[ location, setlocation] = useState()
  const [selectedValue, setSelectedValue] = useState("National");
    const Savedata=()=>{
     
      console.log("tayyab")

      {email && password && name  &&location ? 

  auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
    const newReference = database()
  .ref('/companies')
  .push();

console.log('Auto generated key: ', newReference.key);

newReference
  .set({
    name : name,
    email:email,
    location:location,
    password: password,
    Education: selectedValue
  })
  .then(() => console.log('Data updated.'));
  navigation.navigate('Company Login')

  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      alert('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      alert('That email address is invalid!');
    }

    console.error(error);
    setname("")
  setemail("")
  setlocation("")
  setpassword("")
  })
  
 : alert("Please fill all feilds")    }
  }
  
  console.log(selectedValue)
    return (
      
        
          <Form>
            <ScrollView>
              <Card style={styles.display}>
              {/* <Image style={styles.img} source={require('./img/logo.jpg')}></Image> */}
              {/* <Header><Text style={{color : "white"}}>Signup</Text></Header> */}
            <Item stackedLabel>
              <Label style={styles.label}>Company Name</Label>
              <Input placeholder="" value={name} onChangeText={(text)=>setname(text)} required/>
            </Item>
            <Item stackedLabel>
              <Label style={styles.label}>Email</Label>
              <Input placeholder=""  value={email} onChangeText={(text)=>setemail(text)} required/>

            </Item>
            
            <Item stackedLabel>
              <Label style={styles.label}>password</Label>
              <Input placeholder=""  value={password} onChangeText={(text)=>setpassword(text)} required/>
            </Item>
            <Item stackedLabel>
              <Label style={styles.label}>confirm Password</Label>
              <Input placeholder=""  required />
            </Item>
            <Item stackedLabel>
              <Label style={styles.label}>Location</Label>
              <Input placeholder="" value={location} onChangeText={(text)=>setlocation(text)}/>
            </Item> 
            <Item stackedLabel>
              <Label style={styles.label}>Status</Label>
              <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="National" value="National" />
        <Picker.Item label="International" value="International" />
        <Picker.Item label="City base" value="City Base" />
        <Picker.Item label="Remote" value="Remote" />

       
      </Picker>
            </Item> 
           
            <Item style={{justifyContent: 'space-around'}}>
            <Button style={{backgroundColor: "#DDDDDD"}}  typeof="submit" onPress={()=>Savedata()}><Text style={{color:'black'}}>Sign Up</Text></Button>
         
            </Item>
           
          </Card>
            </ScrollView>
          </Form>
       
     
    );
  }

  const styles = StyleSheet.create({
    signup:{
      // backgroundColor: "lightgrey",
      fontFamily:'serif',
      margin: 30,
      padding:20,
      shadowColor: 'grey'
    },
    label:{
      color:'black',
      fontFamily:'serif'
    },
    display:{
      marginTop:6,
        justifyContent:'center',
         color:'green',
         backgroundColor:'#fff0f5' ,
         borderColor: 'red',
         borderEndWidth:6,
         borderTopWidth:0,
         borderRadius:10
      },
      img:{
        width:300,
        position:'relative',
        alignSelf:'center',
        height:70
    }   
  })
export default CompanySignup
