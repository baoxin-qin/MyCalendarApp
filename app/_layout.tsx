/**
 * @file RootLayout.tsx
 * @description 日历APP项目的根布局
 */
import AntDesign from "@expo/vector-icons/AntDesign";
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
	const [showIntro, setShowIntro] = useState(true); // 入场页面是否显示

	useEffect(() => {
		// 显示入场页面2秒
		const timer = setTimeout(() => {
			setShowIntro(false);
		}, 2000)

		return () => clearTimeout(timer);
	}, [])

	// 入场页面
	if (showIntro) {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>{'迹·录'}</Text>
				<Text style={styles.slogan}>{'生活的每一刻，都值得记录'}</Text>
				<View style={styles.copyright}>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<AntDesign name='copyright' size={15} color={'#CCC'} />
						<Text style={{marginLeft: 5, fontSize: 12, color: '#CCC'}}>{'Copyright for Meet-Day App'}</Text>
					</View>
					<Text style={{marginTop: 5, fontSize: 12, color: '#CCC'}}>{'author: baoxin_qin@qq.com'}</Text>
				</View>
			</View>
		)
	}

	return (
		<Stack screenOptions={{headerShown: false}} >
			{/* 主页面 */}
			<Stack.Screen name="index" options={{headerShown: false}} />
			<Stack.Screen name="query" options={{headerShown: false, headerBackVisible: false}} />
			<Stack.Screen name="introduction" options={{headerShown: false, headerBackVisible: false}} />
		</Stack>	
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEFEFE',
        width: '100%',
        height: '100%',
	},
	title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    slogan: {
        fontSize: 20,
        color: '#666',
        textAlign: 'center',
    },
    copyright: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})