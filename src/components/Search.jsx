import { View, TextInput, ActivityIndicator } from "react-native";
import SearchIcon from "../../assets/images/svgs/search.svg";

const Search = ({
    value,
    handleChange,
    placeholder,
    styles,
    containerStyles,
    isLoading,
}) => {
    return (
        <View
            className={`border border-gray relative rounded-lg w-full px-3 py-1 flex-row justify-center items-center  bg-transparent h-[49] ${containerStyles}`}
        >
            <SearchIcon className="absolute" width={20} height={20} />

            <TextInput
                className="text-gray pl-3 font-wregular flex-1 w-full text-base h-full"
                placeholder={placeholder}
                placeholderTextColor="#EEECE880"
                value={value}
                onChangeText={handleChange}
            />

            {isLoading && <ActivityIndicator size="small" color="#fff" />}
        </View>
    );
};

export default Search;
