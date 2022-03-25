import {FlatList, View} from "react-native"
import { topNavBar } from "../../data/data";
import { Nav } from "../nav/nav";

export const NavBar = ({active, setActive}) =>{

    return (
        <View>
            <FlatList 
            data={topNavBar}
             renderItem = {({item, index}) => <Nav title = {item.title} index = {index}  active= {item.title===active}  handlePress= {()=>setActive(item.title)}
             />}
             horizontal showsHorizontalScrollIndicator= {false}
             keyExtractor = {(nav) => nav.title} 
            />
        </View>
    );
}

