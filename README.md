# _React Native ৩০ days full Handnote_

---

---

# **Day 1: React Native কীভাবে কাজ করে, Expo সেটআপ**

## **1️⃣ React Native কী?**

- React Native হলো **JavaScript framework** যা দিয়ে **iOS ও Android** এর জন্য **native mobile apps**
  বানানো যায়।
- React-এর মতোই component-based architecture।
- Native code এর সঙ্গে link করে **high-performance apps** বানানো যায়।

### **Key Features**

- Cross-platform → একই code iOS + Android
- Hot Reload → কোড update দিলে সাথে সাথে দেখা যায়
- Access to Native APIs → camera, GPS, push notification

---

## **2️⃣ Expo বনাম React Native CLI**

| Feature        | Expo                | React Native CLI                          |
| -------------- | ------------------- | ----------------------------------------- |
| Setup          | সহজ, Quick start    | Native setup দরকার (Android Studio/Xcode) |
| Native Modules | Limited             | Full access                               |
| Deployment     | Easy, OTA update    | Full control                              |
| Best For       | Beginner, Prototype | Production, Advanced apps                 |

**Rule of Thumb:**

- Beginner/Small app → **Expo**
- Big/Custom Native features → **React Native CLI**

**Extra:** Expo থেকে React Native CLI-তে shift করা যায়:

```bash
expo eject
```

---

## **3️⃣ Expo Install & Project Run (Step-by-Step)**

### **Step 0: Pre-requisites**

- Node.js + npm (check: `node -v`, `npm -v`)
- Android Studio (Emulator)
- VS Code বা অন্য editor

---

### **Step 1: Expo CLI Install**

```bash
npm install -g expo-cli
```

---

### **Step 2: Create New Project**

```bash
npx create-expo-app@latest MyFirstApp
cd MyFirstApp
```

---

### **Step 3: Start Project**

```bash
npm start
# OR
expo start
# OR
npx expo
```

- Metro Bundler browser open হবে
- বিভিন্ন command দেখাবে android ,ios,qr code দিয়া app রান করার সব shortcut command দেখাবে।
- QR code দেখাবে

---

### **Step 4: Run on Device/Emulator**

#### **Option A: Real Device**

1. Expo Go App ইনস্টল করুন (Play Store / App Store)
2. Metro QR code স্ক্যান করুন → App চালু হবে

#### **Option B: Android Emulator**

1. Android Studio → Tools → AVD Manager → Emulator চালু করুন
2. টার্মিনালে `a` চাপুন → Emulator এ App launch হবে

#### **Option C: iOS Simulator (Mac)**

1. Xcode → Simulator চালু করুন
2. টার্মিনালে `i` চাপুন → App launch হবে

---

### **Step 5: First Code Example**

`App.js` এ লিখুন:

```jsx
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello Mostakin ভাই! 🚀</Text>
    </View>
  )
}
```

- সেভ করলে **Live Reload / Fast Refresh** দিয়ে App update দেখাবে

---

### **Step 6: Hot Reload & Fast Refresh**

- Dev Menu থেকে enable করুন
- Xiaomi/Redmi ফোনে shake gesture না কাজ করলে **Volume Up + Volume Down একসাথে** চাপুন
- Terminal থেকে `r` → reload, `expo start -c` → cache clear + fresh reload

---

### **Step 7: Notes**

- Physical device optional → Emulator দিয়ে পুরো development করা যায়
- Small apps → Expo recommended
- Large/Production apps → React Native CLI

---

ঠিক আছে Mostakin ভাই 🙂, আমি আপনার জন্য আজকের টপিকের **Handnote** বানিয়ে দিলাম। এই নোট future-এ
দেখলেই সব মনে পড়বে।

---

# **Day 2: Core Components & StyleSheet**

---

## **1️⃣ Core Components**

React Native-এ সব UI বানানো হয় কিছু basic **Core Components** দিয়ে। এগুলো HTML এর
`<div>, <p>, <img>` ইত্যাদির মতো কাজ করে, তবে **native mobile UI element** এ রূপান্তরিত হয়।

### 🔹 `View`

- HTML এর `<div>` এর মতো।
- Layout বানাতে container হিসেবে কাজ করে।

```jsx
<View style={{ padding: 20, backgroundColor: 'lightgray' }}>
  <Text>Hello</Text>
</View>
```

---

### 🔹 `Text`

- HTML এর `<p>, <span>, <h1>` এর মতো।
- শুধু টেক্সট দেখানোর জন্য।

```jsx
<Text style={{ fontSize: 20, color: 'blue' }}>Mostakin ভাই</Text>
```

---

### 🔹 `Image`

- ছবি দেখানোর জন্য।

```jsx
<Image
  source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
  style={{ width: 50, height: 50 }}
/>
```

- লোকাল ছবি ব্যবহার:

```jsx
<Image source={require('./assets/icon.png')} style={{ width: 100, height: 100 }} />
```

---

### 🔹 `ScrollView`

- অনেকগুলো এলিমেন্ট থাকলে স্ক্রল করা যায়।
- Default vertical scroll, horizontal চাইলে `horizontal` prop দিতে হয়।

```jsx
<ScrollView>
  <Text>Line 1</Text>
  <Text>Line 2</Text>
  <Text>Line 3</Text>
</ScrollView>
```

---

### 🔹 `SafeAreaView`

- iOS এ **Notch, Status Bar** যেন UI ঢেকে না ফেলে তার জন্য ব্যবহার হয়।
- Android এও ব্যবহার করলে UI edge থেকে safe থাকে।

```jsx
<SafeAreaView style={{ flex: 1 }}>
  <Text>Safe Area Content</Text>
</SafeAreaView>
```

---

## **2️⃣ StyleSheet ব্যবহার (CSS থেকে পার্থক্য)**

React Native এ CSS ফাইল থাকে না। Style দেওয়া হয় **JavaScript object** দিয়ে।

### 🔹 Example:

```jsx
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Mostakin ভাই</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
  },
  title: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold'
  }
})
```

---

### 🔹 CSS vs StyleSheet পার্থক্য

| CSS                                | StyleSheet (React Native)                                 |
| ---------------------------------- | --------------------------------------------------------- |
| আলাদা `.css` ফাইল থাকে             | সব style JS object এর মধ্যে থাকে                          |
| `background-color`                 | `backgroundColor` (camelCase)                             |
| `px`, `%`, `em` ইত্যাদি units লাগে | সংখ্যা দিলেই pixel ধরে নেয় (20 → 20px)                    |
| অনেক CSS property                  | React Native এ limited property (যেগুলো mobile এ কাজ করে) |
| Class, id দিয়ে style apply হয়      | Object reference দিয়ে style apply হয়                      |

---

### **3️⃣ Extra Notes**

- Inline style ও দেওয়া যায়, কিন্তু **StyleSheet ব্যবহার করা best practice**।
- একাধিক style একসাথে দিতে চাইলে:

```jsx
<Text style={[styles.title, { color: 'red' }]}>Hello</Text>
```

- Flexbox system ব্যবহার হয় layout control করার জন্য।

---

## ✅ Summary

- Core Components: `View`, `Text`, `Image`, `ScrollView`, `SafeAreaView` → HTML tag-এর মতো কিন্তু
  native mobile UI।
- StyleSheet: CSS না, বরং JS object; camelCase property নাম, units ছাড়া সংখ্যা।

---

# **Day 3: Flexbox layout system (row, column, justifyContent, alignItems) Dimensions, Platform API**

## 🔹 Flexbox Layout System

👉 React Native এর layout system **Flexbox** ভিত্তিক (CSS এর মতো কিন্তু কিছু পার্থক্য আছে)

### 1. flexDirection

- নির্ধারণ করে children **কোন দিক** এ সাজানো হবে।

  - `row` → বামে থেকে ডানে (horizontal)
  - `column` → উপরে থেকে নিচে (default)

```tsx
<View style={{ flexDirection: 'row' }}>
  <Text>A</Text>
  <Text>B</Text>
</View>
```

---

### 2. justifyContent

👉 মূল (Main Axis) বরাবর children কিভাবে সাজানো হবে।

- `flex-start` → শুরু থেকে
- `flex-end` → শেষে
- `center` → মাঝখানে
- `space-between` → মাঝে সমান gap
- `space-around` → চারপাশে সমান gap

---

### 3. alignItems

👉 ক্রস (Cross Axis) বরাবর children কিভাবে সাজানো হবে।

- `flex-start` → উপরে/বামে
- `flex-end` → নিচে/ডানে
- `center` → মাঝখানে
- `stretch` → available জায়গা জুড়ে

---

### 4. flex

👉 কোন child **কতটা জায়গা নেবে** সেটা নির্ধারণ করে।

- `flex: 1` → available জায়গা সমানভাবে নেবে।
- `flex: 2` → অন্য child এর দ্বিগুণ জায়গা নেবে।

---

✅ Flexbox ব্যবহার = Responsive Layout সহজে বানানো যায়।

---

## 🔹 Dimensions API

👉 ডিভাইসের **screen size** (height, width) জানতে ব্যবহৃত হয়।

```tsx
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

console.log(width, height)
```

- `window` → অ্যাপের পুরো window এর সাইজ
- `screen` → পুরো screen এর সাইজ (status bar সহ)

---

## 🔹 Platform API

👉 কোন ডিভাইসে (Android / iOS) কোড চলছে সেটা চেক করতে ব্যবহার হয়।

```tsx
import { Platform } from 'react-native'

if (Platform.OS === 'ios') {
  console.log('Running on iOS')
} else {
  console.log('Running on Android')
}
```

- `Platform.OS` → `"ios"` / `"android"`
- `Platform.Version` → OS এর version নম্বর

---

## 📝 Summary (Exam-Ready Note)

- **flexDirection** → row / column
- **justifyContent** → main axis এ position
- **alignItems** → cross axis এ position
- **flex** → space ভাগ করা
- **Dimensions** → screen width & height
- **Platform API** → device অনুযায়ী কোড চালানো

---

# **Day 4: TextInput, Button, Pressable, TouchableOpacity, KeyboardAvoidingView**


## 1️⃣ **TextInput**

👉 ইউজারের কাছ থেকে **input নেওয়ার জন্য** ব্যবহার হয়।

🔹 **কখন ব্যবহার করবেন?**

* লগইন ফর্ম (username, password)
* সার্চ বক্স
* কমেন্ট/ফিডব্যাক ফিল্ড

🔹 **Props (গুরুত্বপূর্ণ):**

* `placeholder` → hint টেক্সট দেখায়
* `value` → state এর ভ্যালু দেখায়
* `onChangeText` → যখন user টাইপ করে তখন ফাংশন চালায়
* `secureTextEntry` → পাসওয়ার্ড ফিল্ডের জন্য

🔹 **Example:**

```jsx
import { TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <TextInput
      style={{ borderWidth: 1, padding: 10, margin: 10 }}
      placeholder="Enter your name"
      value={text}
      onChangeText={setText}
    />
  );
}
```

---

## 2️⃣ **Button**

👉 সহজ একটা **pressable button** বানানোর জন্য ব্যবহার হয়।

🔹 **কখন ব্যবহার করবেন?**

* খুবই বেসিক button দরকার হলে (customization দরকার নেই)
* দ্রুত test/demo এর জন্য

🔹 **Props (গুরুত্বপূর্ণ):**

* `title` → বাটনের ভেতরে টেক্সট
* `onPress` → যখন চাপা হবে তখন কী করবে

🔹 **Example:**

```jsx
import { Button, View } from "react-native";

export default function App() {
  return (
    <View>
      <Button
        title="Click Me"
        onPress={() => alert("Button Pressed")}
      />
    </View>
  );
}
```

⚠️ Limitation → Button খুব rigid, style করা যায় না। এজন্য `TouchableOpacity` বা `Pressable` বেশি ব্যবহার হয়।

---

## 3️⃣ **TouchableOpacity**

👉 Button এর alternative। **Custom style, animation, opacity effect** সহকারে বাটন বানাতে কাজে লাগে।

🔹 **কখন ব্যবহার করবেন?**

* Custom design button বানাতে
* Icon + Text একসাথে button করতে
* Press করলে opacity কমে যাবে → user বুঝবে যে press হয়েছে

🔹 **Props (গুরুত্বপূর্ণ):**

* `onPress` → বাটন চাপলে কাজ করবে
* `activeOpacity` → কতটা fade হবে (default: 0.2)

🔹 **Example:**

```jsx
import { TouchableOpacity, Text } from "react-native";

export default function App() {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "blue",
        padding: 10,
        margin: 10,
        borderRadius: 8
      }}
      onPress={() => alert("TouchableOpacity Pressed")}
      activeOpacity={0.6}
    >
      <Text style={{ color: "white" }}>Custom Button</Text>
    </TouchableOpacity>
  );
}
```

---

## 4️⃣ **Pressable**

👉 TouchableOpacity এর মতো কিন্তু **আরও advanced**।
Pressable → আপনাকে **press এর state (hover, pressed, long press)** control করতে দেয়।

🔹 **কখন ব্যবহার করবেন?**

* যখন button এর বিভিন্ন state অনুযায়ী style দিতে চান (press করলে color বদলাবে)
* long press event handle করতে হলে

🔹 **Props (গুরুত্বপূর্ণ):**

* `onPress` → normal press
* `onLongPress` → লম্বা press
* `style={({ pressed }) => ...}` → press হলে style পরিবর্তন করা যাবে

🔹 **Example:**

```jsx
import { Pressable, Text } from "react-native";

export default function App() {
  return (
    <Pressable
      onPress={() => alert("Pressed!")}
      onLongPress={() => alert("Long Pressed!")}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "lightblue" : "skyblue",
          padding: 10,
          margin: 10,
          borderRadius: 8
        }
      ]}
    >
      <Text>Pressable Button</Text>
    </Pressable>
  );
}
```

---

## 5️⃣ **KeyboardAvoidingView**

👉 যখন **TextInput এ টাইপ করার সময় keyboard উঠবে**, তখন input field ঢেকে ফেলে।
এই সমস্যা এড়াতে KeyboardAvoidingView ব্যবহার হয়।

🔹 **কখন ব্যবহার করবেন?**

* ফর্ম বা চ্যাট অ্যাপ বানানোর সময় (যাতে keyboard টেক্সট ঢেকে না ফেলে)

🔹 **Props (গুরুত্বপূর্ণ):**

* `behavior="padding"` → keyboard উঠলে উপরের দিকে প্যাড করে
* `behavior="height"` → layout এর height adjust করে
* `keyboardVerticalOffset` → কতটুকু offset করবে

🔹 **Example:**

```tsx
import { KeyboardAvoidingView, TextInput, Platform } from "react-native";

export default function App() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={50}
    >
      <TextInput
        style={{ borderWidth: 1, padding: 10, width: 200 }}
        placeholder="Type something..."
      />
    </KeyboardAvoidingView>
  );
}
```

---

# ✅ Quick Recap (কোনটা কখন ব্যবহার করবেন)

* **TextInput** → User থেকে data input নিতে
* **Button** → Simple button দরকার হলে (কাস্টম style দরকার না হলে)
* **TouchableOpacity** → Stylish button + opacity effect
* **Pressable** → Advanced button (state-based style, long press, hover)
* **KeyboardAvoidingView** → Input field যেন keyboard এ ঢাকা না পড়ে

---


# **Day 5: FlatList, SectionList, VirtualizedList, KeyExtractor, renderItem, performance optimization**

## 1️⃣ **FlatList**

👉 লম্বা ডেটার লিস্ট **efficiently render** করার জন্য ব্যবহৃত হয়।
সাধারণ map loop করলে performance কমে যায়। FlatList শুধু screen এ visible item গুলো render করে → performance অনেক ভালো হয়।

🔹 **কখন ব্যবহার করবেন?**

* Data list → যেমন products, users, chat messages
* যখন অনেক বড় array render করতে হবে

🔹 **Props (গুরুত্বপূর্ণ):**

* `data` → কোন array render হবে
* `renderItem` → প্রতিটি item কীভাবে দেখাবে
* `keyExtractor` → প্রতিটি item এর unique key
* `horizontal` → horizontal list render করবে
* `numColumns` → grid বানাতে

🔹 **Example:**

```jsx
import { FlatList, Text, View } from "react-native";

const DATA = [{ id: "1", name: "Apple" }, { id: "2", name: "Banana" }];

export default function App() {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.name}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
```

---

## 2️⃣ **SectionList**

👉 Data কে **section/group আকারে render** করতে কাজে লাগে।
যেমন: Contacts app → (A, B, C অনুযায়ী আলাদা section)।

🔹 **কখন ব্যবহার করবেন?**

* যখন data কে group করে দেখাতে হবে
* Example: Grocery list (Fruits, Vegetables), Contacts list

🔹 **Props (গুরুত্বপূর্ণ):**

* `sections` → array of sections (প্রতিটি section এ title + data থাকে)
* `renderItem` → প্রতিটি item render করবে
* `renderSectionHeader` → প্রতিটি section এর header render করবে
* `keyExtractor`

🔹 **Example:**

```jsx
import { SectionList, Text, View } from "react-native";

const DATA = [
  { title: "Fruits", data: ["Apple", "Banana"] },
  { title: "Vegetables", data: ["Carrot", "Potato"] },
];

export default function App() {
  return (
    <SectionList
      sections={DATA}
      renderItem={({ item }) => <Text>{item}</Text>}
      renderSectionHeader={({ section }) => (
        <Text style={{ fontWeight: "bold" }}>{section.title}</Text>
      )}
      keyExtractor={(item, index) => item + index}
    />
  );
}
```

---

## 3️⃣ **VirtualizedList**

👉 FlatList & SectionList actually VirtualizedList এর উপর তৈরি।
এটা **base component** যেটা দিয়ে আপনি নিজের custom list বানাতে পারেন।

🔹 **কখন ব্যবহার করবেন?**

* যখন একদম custom control দরকার হয়
* খুব advanced scenario তে (FlatList / SectionList enough না হলে)

🔹 **Props (গুরুত্বপূর্ণ):**

* `data` → আপনার dataset
* `getItem` → index থেকে item return করবে
* `getItemCount` → total item সংখ্যা return করবে
* `renderItem`
* `keyExtractor`

🔹 **Example:**

```jsx
import { VirtualizedList, Text } from "react-native";

const DATA = Array.from({ length: 100 }).map((_, i) => `Item ${i}`);

export default function App() {
  const getItem = (data, index) => ({ id: index.toString(), title: data[index] });
  const getItemCount = (data) => data.length;

  return (
    <VirtualizedList
      data={DATA}
      initialNumToRender={10}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      keyExtractor={(item) => item.id}
      getItem={getItem}
      getItemCount={getItemCount}
    />
  );
}
```

---

## 4️⃣ **KeyExtractor**

👉 প্রতিটি item কে **unique key** দেয়।
React Native performance optimization এর জন্য **unique key** খুবই গুরুত্বপূর্ণ।

🔹 **কখন ব্যবহার করবেন?**

* সবসময় যখন FlatList/SectionList ব্যবহার করবেন

🔹 **Best Practice:**

* unique id থাকলে সেটা ব্যবহার করুন → `item.id`
* id না থাকলে `index` ব্যবহার করতে পারেন (কিন্তু avoid করাই ভালো)

```jsx
keyExtractor={(item) => item.id}
```

---

## 5️⃣ **renderItem**

👉 প্রতিটি item render করার জন্য function।

```jsx
renderItem={({ item }) => (
  <Text>{item.name}</Text>
)}
```

⚠️ **Tips:** renderItem function এর ভিতরে বেশি কাজ করলে performance কমে যাবে।
তাই separate component বানিয়ে দিন।

---

## 6️⃣ **Performance Optimization**

বড় dataset এর ক্ষেত্রে performance optimize করা খুব জরুরি।

🔹 **Tips:**

1. **keyExtractor এ unique key ব্যবহার করুন** → Re-render কম হবে
2. **initialNumToRender** → শুরুতে কত item render হবে সেট করুন
3. **maxToRenderPerBatch** → প্রতি ব্যাচে কত item render হবে
4. **windowSize** → visible এর আশেপাশে কত item render হবে
5. **removeClippedSubviews** → screen এর বাইরে থাকা item unload হবে
6. **memoization ব্যবহার করুন** → item component `React.memo` দিয়ে wrap করুন
7. **getItemLayout** → যদি item height/fixed size জানা থাকে → scroll performance অনেক বাড়ে

---

# ✅ Quick Recap (কোনটা কখন ব্যবহার করবেন)

* **FlatList** → Simple & efficient list (সবচেয়ে বেশি ব্যবহার হয়)
* **SectionList** → Grouped/Section-wise data list
* **VirtualizedList** → Base list component (FlatList/SectionList এর নিচের লেভেল)
* **KeyExtractor** → প্রতিটি item কে unique id দেওয়া (performance এর জন্য জরুরি)
* **renderItem** → প্রতিটি item কীভাবে দেখাবে
* **Performance Optimization** → বড় dataset এর জন্য অবশ্যই apply করতে হবে

---



# **Day 6: Expo Assets (Image, Fonts, Icons লোড করা), Local images বনাম Remote images, File input, Video, Audio**
---

## 1️⃣ **Expo Assets (Image, Fonts, Icons)**

### 🔹 **Image**

React Native এ `Image` component ব্যবহার করে local বা remote image লোড করা যায়।

```jsx
import { Image } from "react-native";

// Local image
<Image source={require("./assets/logo.png")} style={{ width: 100, height: 100 }} />

// Remote image
<Image source={{ uri: "https://picsum.photos/200" }} style={{ width: 100, height: 100 }} />
```

👉 **কখন কোনটা ব্যবহার করবেন?**

* Local image → App এর ভেতরে default ছবি/লোগো (offline always available)
* Remote image → API থেকে আসা ছবি বা ওয়েবে hosted image

---

### 🔹 **Fonts (Expo Font)**

Custom fonts use করতে হলে **expo-font** ব্যবহার হয়।

```bash
expo install expo-font
```

```jsx
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { Text } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return <Text style={{ fontFamily: "Poppins", fontSize: 20 }}>Hello Fonts!</Text>;
}
```

👉 **কেন fonts ব্যবহার করবেন?** → App design কে unique করতে।

---

### 🔹 **Icons (Expo Vector Icons)**

Expo project এ by default আসে → `@expo/vector-icons`

```jsx
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

export default function App() {
  return (
    <View>
      <Ionicons name="home" size={32} color="blue" />
    </View>
  );
}
```

👉 **কেন icons ব্যবহার করবেন?** → UI কে আরও professional ও user-friendly করতে।

---

## 2️⃣ **Local Images বনাম Remote Images**

| Feature      | Local Images                         | Remote Images                       |
| ------------ | ------------------------------------ | ----------------------------------- |
| Source       | `require("./assets/pic.png")`        | `{ uri: "https://..." }`            |
| Availability | Offline সবসময় থাকবে                  | Internet দরকার                      |
| Performance  | Fast (app এর ভেতরে bundle হয়)        | Load হতে সময় নেয় (network delay)    |
| Use Case     | Logos, default assets, static images | User profile pics, API থেকে আসা ছবি |

👉 **Best Practice:**

* App UI এর জন্য → Local images
* Dynamic content (API থেকে) → Remote images

---

## 3️⃣ **File Input (Document/Image Picker)**

React Native এ web এর মতো `<input type="file">` নাই।
এর জন্য **expo-image-picker** ব্যবহার করতে হয়।

```bash
expo install expo-image-picker
```

```jsx
import * as ImagePicker from "expo-image-picker";
import { Button, Image } from "react-native";
import { useState } from "react";

export default function App() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <Button title="Pick an Image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </>
  );
}
```

👉 **কেন দরকার?**

* Profile picture upload
* File sharing apps
* Document upload feature

---

## 4️⃣ **Video Handling**

Expo তে video play করার জন্য → **expo-av** ব্যবহার হয়।

```bash
expo install expo-av
```

```jsx
import { Video } from "expo-av";
import { View } from "react-native";

export default function App() {
  return (
    <View>
      <Video
        source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }}
        style={{ width: 300, height: 200 }}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
    </View>
  );
}
```

👉 **কেন দরকার?**

* Media apps (YouTube clone, Netflix clone)
* Course apps (ভিডিও প্লে করতে)

---

## 5️⃣ **Audio Handling**

Expo তে audio play করার জন্যও **expo-av** ব্যবহার হয়।

```jsx
import { Audio } from "expo-av";
import { Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/sound.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }

  return <Button title="Play Sound" onPress={playSound} />;
}
```

👉 **কেন দরকার?**

* Music player apps
* Notification sound
* Meditation apps

---

# ✅ Quick Recap (কোনটা কখন ব্যবহার করবেন)

* **Image** → Local (logo, static asset), Remote (API content)
* **Fonts** → Custom design, branding
* **Icons** → App navigation & buttons এ use করা
* **File Input (Image Picker)** → Profile upload, file sharing
* **Video** → Course app, media app
* **Audio** → Music app, alert sound

---
