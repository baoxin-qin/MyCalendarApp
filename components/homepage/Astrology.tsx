/**
 * @file Astrology.tsx
 * @description This is the component of homepage showing the astrology information
 * !!
 * ATTENTION: This file is just an entertainment and expasion function.
 * Methods I use in this file is not worthy to be used in real world application.
 * !!
 */
import { getConstellation } from "@/instance/constellation";
import { getRandomColor } from "@/instance/luckyColor";
import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Astrology() {
    const today = new Date();
    const { nameCN, nameEng, feature } = getConstellation(today);

    const dateKey = today.toDateString();
    const luckyColor = useMemo(()=>{
        return getRandomColor();
    }, [dateKey]);

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>
                    今日占卜
                </Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentText}>
                    本日星座: {nameCN}
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Text style={styles.contentText}>今日幸运色: </Text>
                    <Text style={[styles.contentText, {color: luckyColor.color}]}>{luckyColor.nameCN}</Text>
                    <Text style={styles.contentText}>{luckyColor.meaning}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    titleText : {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    content : {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    contentText : {
        fontSize: 16,
        color: 'black',
    }
});