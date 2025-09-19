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
