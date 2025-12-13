/**
 * @file RootLayout.tsx
 * @description 日历APP项目的根布局
 */
import { Stack } from "expo-router";

export default function RootLayout() {

	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="index"
				options={{
					headerShown: false,
				}}
			/>
		</Stack>	
	);
}