import { ActivityIndicator, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '@/FirebaseConfig'

const page = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const auth = FIREBASE_AUTH
    const handleChange = (field: string, value: any) => {
        console.log(field, value);

        setCredentials({ ...credentials, [field]: value })
    }
    const signUp = ()=>{

    }
    const signIn = ()=>{

    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:20,textAlign:'center',color:'#626D77'}}>Welcome to learn about  Firebase connect with React Native !</Text>
            <View style={{ width: 300, gap: 20, marginTop: 50 }}>
                <View>
                    <Text>Email</Text>
                    <TextInput  placeholder='Enter your email' style={styles.input} keyboardType='email-address' value={credentials.email} onChangeText={(value) => handleChange("email", value)} />
                </View>
                <View>
                    <Text>Password</Text>
                    <TextInput  placeholder='Enter your password' style={styles.input} secureTextEntry={true} value={credentials.password} onChangeText={(value) => handleChange("password", value)} />
                </View>
                {isLoading ? <ActivityIndicator size={"large"} /> :
                   <View style={{gap:10}}>
                     <TouchableOpacity style={{ padding: 8, borderRadius: 8, alignItems: 'center', backgroundColor: '#6495ED' }}
                    onPress={signIn}
                    >
                        <Text style={{ color: '#fff' }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 8, borderRadius: 8, alignItems: 'center', backgroundColor: '#6495ED' }}
                    onPress={signUp}
                    >
                        <Text style={{ color: '#fff' }}>Create account</Text>
                    </TouchableOpacity>
                   </View>
                }

            </View>
        </View>
    )
}

export default page

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "gray",paddingLeft:5

    }
})