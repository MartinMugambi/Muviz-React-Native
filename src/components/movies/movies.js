import {View, Text, StyleSheet, FlatList} from "react-native";
import {useEffect} from "react"
import useMovie from "../../hooks/useMovie";
import BannerItem from "../bannerItem/item";


const Movies = () =>{

  const [{data, loading, error},fecthMovie] = useMovie();

    useEffect(()=>{
     fecthMovie(`movie/top_rated`);
    },[])

console.log(data);
    return (
        <View>
         <FlatList
           data={data}
           renderItem = {({item, index}) => <BannerItem  movie ={item} index= {index} />}
           keyExtractor = {(movie) => movie.id} 
           horizontal showsHorizontalScrollIndicator = {false}
         />
        </View>
    );
}

export default Movies;