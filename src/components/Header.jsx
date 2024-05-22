import {
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
} from "react-native";
import { icons } from "../constants/icons";
import { router } from "expo-router";
import Arrow from "../../assets/images/svgs/left_arrow.svg";
import Share from "../../assets/images/svgs/share.svg";
import PressableIcon from "./PressableIcon";

const Header = ({ isWorkout = false }) => {
    return (
        <View className="flex-row w-full justify-between items-center mb-4 px-5">
            <View className="w-fit rounded-xl">
                <Arrow width={24} height={24} onPress={() => router.back()} />
            </View>

            <View>
                {!isWorkout && (
                    <Text className="text-white font-wbold text-lg">
                        FitNote
                    </Text>
                )}
            </View>

            <View className="w-fit rounded-xl">
                {/* {isWorkout && (
                    <Share
                        width={24}
                        height={24}
                        onPress={() => router.push("/sign-in")}
                    />
                )} */}
            </View>
        </View>
    );
};

export default Header;
