# 「 迹 · 录 」

生活的每一刻，都值得记录

## 📆 Overview

Hey there, still be driven mad by messy agendas? No handy and simple app found?

This "**迹·录**" calendar app might be the solution for you. Simple but useful tools supported for you.

1. 📖 **Month / Week / Day view page**: Exact time reminder for you
2. 📄 **Agneda CRUD supported**: Never miss any important event again
3. 🌈 **Simple UI design**: Easy to use and navigate
4. 🖌️ **Lucky Color everyday**: Enhance your mood and make you feel better

## 🛠️  Technology  I use

- React + React Native(Expo)
- TypeScript

💡 I strongly recommend you to use **Expo** for React Native development.

Without any doubt, **Expo is the best** way to build React Native apps with fontend technology.

- 😎 Swift start for RN app development with its packages, such as: expo-router and expo-vector-icons.
- 😄 Easy way to build the app with its EAS service; compared with gradle, it's more convenient and faster.

🔗 More info, go to official website: [Expo Official Website](https://expo.dev)

## 🗂️ Main File Structure

```text
MyCalendarApp/
|---- app/                        # entrance point dir with Stack Route
      |---- _layout.tsx           # stack route layout
      |---- index.tsx             # homepage as the first page
      |---- ... ...
|---- components/                 # reusable components
|---- types/                      # props definition
|---- utils/                      # utility functions mainly for databases 
|---- instance/                   # instances for expansion area
|---- assets/                     # images and other static files
```

- Route structure should be defined in ``app/_layout.tsx``.
- Remember not to delete or even rename ``index.tsx``.

## 🚀 Get Started

### Dependency / Package Install

```bash
npm install
```

### Run the app

```bash
npx expo start
```

Run the app with **Expo Go** is the easiest way.

❗ If you are new to Expo, you may need to install ``expo-cli`` at first.

## Build the app

```bash
eas login

# since eas.json given, there is no need for you to run the command below
# while you want customized build, you can run the command and fix the eas.json
npx eas build:configure

# build the app
npx eas build --platform android
```
