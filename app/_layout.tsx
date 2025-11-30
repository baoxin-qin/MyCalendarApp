/* This is the root layout of the app based on Tabs router. */
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

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
			{/* Home Screen: display the calendar table */}
			<Tabs.Screen 
				name="index"
				options={{
					title: "主页",
					tabBarIcon: ({color, focused}) => 
						<Ionicons name={focused ? "home" : "home-outline"} size={focused ? 26 : 24} color={color}/>
				}}
			/>

			{/* Views Screen: display the views of the calendar table; with monthly, weekly, daily views */}
			<Tabs.Screen 
				name="views"
				options={{
					title: "视图",
					headerShown: false,
					tabBarIcon: ({color, focused}) => 
						<Ionicons name={focused ? "calendar" : "calendar-outline"} size={focused ? 26 : 24} color={color}/>
				}}
			/>

			{/* Events Screen: creation, edition, details and deletion of events */}
			<Tabs.Screen 
				name="events"
				options={{
					title: "待办",
					headerShown: false,
					tabBarIcon: ({color, focused}) => 
						<Ionicons name={focused ? "book" : "book-outline"} size={focused ? 26 : 24} color={color}/>
				}}
			/>

			{/* Settings Screen: support ics files import and export */}
			<Tabs.Screen 
				name="settings"
				options={{
					title: "文件",
					tabBarIcon: ({color, focused}) => 
						<Ionicons name={focused ? "settings" : "settings-outline"} size={focused ? 26 : 24} color={color}/>
				}}
			/>

		</Tabs>
	)
}