/**
 * @file introduction.tsx
 * @description App 介绍页面
 */
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export default function Introduction() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.title}>App 基本信息</Text>
                <Text style={{ fontSize: 16}}>名称: 迹·录</Text>
                <Text style={{ fontSize: 16}}>版本: v1.0.0</Text>
                <View style={styles.rowALign}>
                    <Ionicons name='warning-outline' size={18} color={'yellow'} />
                    <Text style={{marginLeft: 5, color: '#E0E0E0'}}>本 App 仅为课程作业设计</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.title}>支持的客户端平台</Text>
                <View style={styles.rowALign}>
                    <View style={[styles.rowALign, {flex:1}]}>
                        <FontAwesome name='android' size={24} color={'darkgreen'} />
                        <Text style={{marginLeft: 1, fontSize: 18}}>Android</Text>
                    </View>
                    <View style={[styles.rowALign, {flex:1}]}>
                        <FontAwesome name='apple' size={24} color={'lightblue'} />
                        <Text style={{marginLeft: 1, fontSize: 18}}>iOS</Text>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.title}>联系我</Text>
                <View style={styles.rowALign}>
                    <Fontisto name='email' size={22} color={'#000'} />
                    <Text style={{marginLeft: 5}}>
                        {'QQ Email: baoxin_qin@qq.com'}
                    </Text>
                </View>
                <View style={styles.rowALign}>
                    <Fontisto name='github' size={22} color={'#000'} />
                    <Text style={{marginLeft: 5}}>
                        {'Github: https://github.com/baoxin-qin/'}
                    </Text>
                </View>
            </View>

            <TouchableOpacity
                onPress={() => router.back()}
                style={{marginVertical: 15}}
            >
                <Text style={{color: 'red', fontSize: 18}}>返回</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
    },
    section: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 20,
        marginVertical: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    },
    rowALign: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    }
})