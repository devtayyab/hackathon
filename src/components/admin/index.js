import {Button, View ,Text, Container} from 'native-base'
import React from 'react'
import {StyleSheet,TouchableOpacity} from 'react-native'

const Admin=({navigation})=>{
    return(
        <Container>
<View>
    <Text style={styles.heading}>Campus Recruitment System</Text>
    <View >
    <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('Students Detail')}
      >
        <Text>STUDENTS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('Companies Detail')}
      >
        <Text>COMPANAIES</Text>
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
export default Admin