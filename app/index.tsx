import { ActivityIndicator, Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '@/FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { Ionicons } from '@expo/vector-icons'

const page = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const [securePassword, setSecurePassword] = useState(true)
    const { email, password } = credentials
    const [isLoading, setIsLoading] = useState(false)
    const auth = FIREBASE_AUTH
    const handleChange = (field: string, value: any) => {
        console.log(field, value);

        setCredentials({ ...credentials, [field]: value })
    }
    const signUp = async () => {
        setIsLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response);

        } catch (error: any) {
            console.log(error);
            Alert.alert("Sign in faied ", error.message);

        }
        finally {
            setIsLoading(false)
        }
    }
    const signIn = async () => {
        setIsLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            console.log(response);

        } catch (error: any) {
            console.log(error);
            Alert.alert("Sign in faied ", error.message);

        }
        finally {
            setIsLoading(false)
        }
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, textAlign: 'center', color: '#626D77' }}>Welcome to learn about  Firebase connect with React Native !</Text>
            <View style={{ width: 300, gap: 20, marginTop: 50 }}>
                <View>
                    <Text>Email</Text>
                    <TextInput placeholder='Enter your email' style={styles.input} keyboardType='email-address' value={email} onChangeText={(value) => handleChange("email", value)} />
                </View>
                <View>
                    <Text>Password</Text>
                    <View style={[styles.input, { flexDirection: 'row' }]}>
                        <TextInput placeholder='Enter your password' style={{ flex: 1 }} secureTextEntry={securePassword} value={password} onChangeText={(value) => handleChange("password", value)} />
                        <TouchableOpacity onPress={()=>setSecurePassword(!securePassword)}>
                        <Ionicons name='eye' size={20} />
                        </TouchableOpacity>
                    </View>

                </View>
                {isLoading ? <ActivityIndicator size={"large"} /> :
                    <View style={{ gap: 10 }}>
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
        borderColor: "gray", paddingHorizontal: 5,
        alignItems:'center'

    }
})