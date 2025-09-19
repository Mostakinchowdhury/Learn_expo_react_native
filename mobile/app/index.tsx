import { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

export default function Index() {
  const [ishide, setishide] = useState(true)
  const [form, setform] = useState({
    username: '',
    password: '',
    phone_num: ''
  })
  const [success, setsuccess] = useState<string>('')
  const [error, seterror] = useState<string>('')

  return (
    <ScrollView contentContainerStyle={styles.view} showsVerticalScrollIndicator={false}>
      <TextInput
        placeholder="write your username"
        style={styles.input1}
        value={form.username}
        onChangeText={(text) => setform((prev) => ({ ...prev, username: text }))}
      />

      <TextInput
        placeholder="write your password"
        style={styles.input1}
        secureTextEntry={ishide}
        value={form.password}
        onChangeText={(text) => setform((prev) => ({ ...prev, password: text }))}
      />

      <TouchableOpacity onPress={() => setishide((prev) => !prev)} style={styles.button}>
        <Text style={styles.text}>{ishide ? 'Show password' : 'Hide password'}</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="write your phone number"
        style={styles.input1}
        keyboardType="decimal-pad"
        value={form.phone_num}
        onChangeText={(text) => setform((prev) => ({ ...prev, phone_num: text }))}
      />
      <TouchableOpacity
        onPress={() => {
          if (!form.username) {
            seterror('username field is required')
            setsuccess('')
            return
          }
          if (!form.phone_num) {
            seterror('phone number field is required')
            setsuccess('')
            return
          }
          if (!form.password) {
            seterror('password field is required')
            setsuccess('')
            return
          }
          console.log(form)
          setform({
            username: '',
            password: '',
            phone_num: ''
          })
          setsuccess('Thanks for submit')
          seterror('')
        }}
        style={styles.button}
      >
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
      {success && (
        <Text
          style={{
            color: 'green'
          }}
        >
          {success}
        </Text>
      )}
      {error && (
        <Text
          style={{
            color: 'red'
          }}
        >
          {error}
        </Text>
      )}
      <Text style={styles.text}>Hi am mostakin chowdhury</Text>

      <ScrollView style={{}} horizontal showsHorizontalScrollIndicator={ishide}>
        <Image source={require('@/assets/images/pexels.jpg')} style={styles.img} />
        <Image source={require('@/assets/images/pexels.jpg')} style={styles.img} />
        <Image source={require('@/assets/images/pexels.jpg')} style={styles.img} />
      </ScrollView>
      <Text style={styles.text}>Additional Form</Text>
      <TextInput
        placeholder="Enter your email"
        style={styles.input1}
        keyboardType="email-address"
        onChangeText={(text) => console.log('Email:', text)}
      />
      <TextInput
        placeholder="Enter your age"
        style={styles.input1}
        keyboardType="numeric"
        onChangeText={(text) => console.log('Age:', text)}
      />
      <TouchableOpacity
        onPress={() => console.log('Additional form submitted')}
        style={styles.button}
      >
        <Text style={styles.text}>Submit Additional Form</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 14,
    borderRadius: 8
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4b4b4b',
    borderRadius: 12,
    padding: 24,
    margin: 20
  },
  img: {
    height: 200,
    width: 310,
    borderRadius: 16,
    resizeMode: 'cover',
    marginHorizontal: 14
    // objectFit এর পরিবর্তে এটা ব্যবহার করতে হবে
  },
  input1: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 6,
    color: 'white',
    marginVertical: 18,
    width: '100%'
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: 'purple',
    borderRadius: 16
  }
})

// write a form by react native
