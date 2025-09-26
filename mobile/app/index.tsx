import { useEffect, useState } from 'react'
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

export default function Index() {
  const [ishide, setishide] = useState(true)
  const [form, setform] = useState({
    username: '',
    password: '',
    phone_num: ''
  })
  useEffect(() => {
    console.log(Dimensions.get('window'))
    console.log(` screen ${JSON.stringify(Dimensions.get('screen'))}`)
    console.log(Platform)
  })

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80} // ⬅️ কীবোর্ড কতটা ওপরে উঠবে সেটার offset
    >
      <ScrollView contentContainerStyle={styles.view} keyboardShouldPersistTaps="handled">
        <TextInput
          placeholder="Username"
          style={styles.input1}
          value={form.username}
          onChangeText={(text) => setform((prev) => ({ ...prev, username: text }))}
        />

        <TextInput
          placeholder="Password"
          style={styles.input1}
          secureTextEntry={ishide}
          value={form.password}
          onChangeText={(text) => setform((prev) => ({ ...prev, password: text }))}
        />

        <TouchableOpacity onPress={() => setishide((prev) => !prev)} style={styles.button}>
          <Text style={styles.text}>{ishide ? 'Show Password' : 'Hide Password'}</Text>
        </TouchableOpacity>

        <TextInput
          placeholder="Phone Number"
          style={styles.input1}
          keyboardType="numeric"
          value={form.phone_num}
          onChangeText={(text) => setform((prev) => ({ ...prev, phone_num: text }))}
        />
        <View style={{ flex: 1, gap: 12 }}>
          <Text style={{ ...styles.text, flex: 8, backgroundColor: 'gray' }}>hi</Text>
          <Text style={{ ...styles.text, flex: 1, backgroundColor: 'gray' }}>hello</Text>
          <Text style={{ ...styles.text, flex: 1, backgroundColor: 'gray' }}>how</Text>
          <Text style={{ ...styles.text, flex: 1, backgroundColor: 'gray' }}>are</Text>
          <Text style={{ ...styles.text, flex: 1, backgroundColor: 'gray' }}>you</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  view: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20,
    backgroundColor: '#4b4b4b'
  },
  input1: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 6,
    color: 'white',
    marginVertical: 18
  },
  text: {
    color: '#fff',
    fontSize: 16
  },
  button: {
    backgroundColor: 'purple',
    padding: 12,
    borderRadius: 8
  }
})
