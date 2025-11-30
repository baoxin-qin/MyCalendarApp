/**
 * @file DailyWord.tsx
 * @description the component of homepage showing the daily word
 */
import { StyleSheet, Text, View } from "react-native";

export default function DailyWord() {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>
                    今日箴言
                </Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentText}>
                    加载中 ...
                </Text>
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
    title : {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    titleText: {
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
    contentText: {
        fontSize: 16,
        color: 'black',
    }
});