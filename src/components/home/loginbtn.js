import {Button, View ,Text, Container} from 'native-base'
import React from 'react'
import {StyleSheet,TouchableOpacity} from 'react-native'

const Loginbtn=({navigation})=>{
    return(
        <Container>
<View>
    <Text style={styles.heading}>Campus Recuritment System</Text>
    <View >
    <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('Student Login')}
      >
        <Text>STUDENT LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('Company Login')}
      >
        <Text>COMPANY LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('Admin Login')}
      >
        <Text>ADMIN LOGIN</Text>
      </TouchableOpacity>
    </View>
    </View>
</Container>
    )
}
const styles=StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        margin:'5%',

      },
    heading:{
        fontSize:40,
        textAlign:'center',
        fontFamily:'Serif,san-serief',
        fontStyle:'italic',
        textShadowColor:'red',
        textShadowRadius:2,
    }
})
export default Loginbtn