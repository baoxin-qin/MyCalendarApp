/* This is the root layout of the app based on Tabs router. */
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { act } from "react";

const tabBarTheme = {
	/* Theme style for the tab bar */
	light: {
		activeTintColor: "#007AFF",
		inactiveTintColor: "#8E8E93",
		backgroundColor: "#F8F8F8",
	},
	dark: {
		activeTintColor: "#0A84FF",
		inactiveTintColor: "#86868B",
		backgroundColor: "#1C1C1E",
	},
}

export default function RootLayout() {
	const colorScheme = useColorScheme(); // get the color scheme of the device (light / dark)
	const {activeTintColor, inactiveTintColor, backgroundColor} = tabBarTheme[colorScheme ?? "light"];

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor:activeTintColor,
				tabBarInactiveTintColor:inactiveTintColor,
			}}
		>
			<Tabs.Screen 
				name="index"
				options={{
					title: "主页",
					tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color}/>
				}}
			/>

			<Tabs.Screen 
				name="settings"
				options={{
					title: "设置",
					tabBarIcon: ({color}) => <Ionicons name="settings" size={24} color={color}/>
				}}
			/>

		</Tabs>
	)
}