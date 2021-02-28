import React from 'react';
import Loginbtn from './loginbtn'
import StudentLogin from '../../screen/studentlogin/login'
import CompanyLogin from '../../screen/companylogin/login'
import AdminLogin from '../../screen/AdminLogin/login'
import StudentSignup from '../../screen/studentlogin'
import CompanySignup from '../../screen/companylogin'
import Student from '../../components/students'
import Company from '../../components/company'
import Companydetail from '../admin/companydetail'
import Studentdetail from '../admin/studentsdetail'
import Admin from '../admin'

import { createStackNavigator } from '@react-navigation/stack';
const Home=()=>{
    const Stack = createStackNavigator();

    return(
    <Stack.Navigator>
        <Stack.Screen name="." component={Loginbtn} />
        <Stack.Screen name="Student Login" component={StudentLogin} />
        <Stack.Screen name="Admin Login" component={AdminLogin} />
        <Stack.Screen name="Company Login" component={CompanyLogin} />
        <Stack.Screen name="Student Signup" component={StudentSignup} />
        <Stack.Screen name="Company Signup" component={CompanySignup} />
        <Stack.Screen name="Companies" component={Company} />
        <Stack.Screen name="Students" component={Student} />
        <Stack.Screen name="Admin Panel" component={Admin} />
        <Stack.Screen name="Students Detail" component={Studentdetail} />
        <Stack.Screen name="Companies Detail" component={Companydetail} />
    </Stack.Navigator>
    )
}
export default Home