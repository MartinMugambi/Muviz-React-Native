import {View, Text, StyleSheet, Image} from "react-native"

const MovieItem = ({movie, index}) =>{

    const imageBaseUrl = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;


    return (
        <View style= {styles.container}>
            <Image  source={{uri: imageBaseUrl}}  style ={[styles.image, index === 0 ? {marginLeft: 15} : {marginLeft: 18}]} />
            <Text style= {[styles.title, index === 0 ? {marginLeft: 15} : {marginLeft: 18}]}>{movie.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
 
    container: {
     marginTop: 10
    },  
    image: {
        width: 120,
        height: 150,
        borderRadius: 10,
        marginLeft: 10,
        
    },
    title: {
     fontWeight: "bold",
    }
})

export default MovieItem;