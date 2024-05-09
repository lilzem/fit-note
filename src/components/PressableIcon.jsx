import { Image, TouchableHighlight } from "react-native";

const PressableIcon = ({ icon, handlePress, width }) => {
    return (
        <TouchableHighlight onPress={handlePress} underlayColor="transparent">
            <Image className={`w-${width} h-${width}`} source={icon} />
        </TouchableHighlight>
    );
};

export default PressableIcon;
