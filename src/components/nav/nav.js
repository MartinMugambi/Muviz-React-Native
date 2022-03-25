import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native"
import { shadowStyle, textColor } from "../../common/style";


export const Nav = ({title, index,active, handlePress}) =>{
 return (
     <TouchableOpacity onPress={handlePress}>
     <View style= {[styles.container, shadowStyle, index === 0 ? {marginHorizontal: 10}: {marginHorizontal: 5}, active ? textColor : {backgroundColor: "white"}]}>
       <Text>{title}</Text>
     </View>
     </TouchableOpacity>
 );

}


const styles = StyleSheet.create({
    shadowStyle,
    container: {
        width: 70,
        height: 35,
        marginTop: 15,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },

   
})