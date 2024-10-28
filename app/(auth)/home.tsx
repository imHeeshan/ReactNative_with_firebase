import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '@/FirebaseConfig'
import { Link } from 'expo-router'

const page = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
      <Link href={"/(auth)/details"} asChild>
        <TouchableOpacity style={{ padding: 8, borderRadius: 8, alignItems: 'center', backgroundColor: '#6495ED' }}>
          <Text style={{ color: '#fff' }}>Go to Details</Text>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity style={{ padding: 8, borderRadius: 8, alignItems: 'center', backgroundColor: '#6495ED' }}
        onPress={() => FIREBASE_AUTH.signOut()}
      >
        <Text style={{ color: '#fff' }}>Sign out</Text>
      </TouchableOpacity>

    </View>
  )
}

export default page

const styles = StyleSheet.create({})