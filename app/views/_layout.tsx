/* This is the layout for views section */
import { Stack } from "expo-router";

const today = new Date();
const initDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;

export default function ViewsLayout() {
    return (
        <Stack
            screenOptions={{
                headerTitleAlign:"center",
                headerShown: true,
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: '视图区',
                    headerBackVisible: true,
                }}
            />
        </Stack>
    )
}