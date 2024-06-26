import React from 'react';
import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native';

export default function Paginador ({ data, scrollX }) {
    const {width} = useWindowDimensions();

  return (
    <View style={{flexDirection: 'row', height: 64}}>

        {data.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

            const doWidth = scrollX.interpolate({
                inputRange,
                outputRange: [10, 20, 10],
                extrapolate: 'clamp',
            })

            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp'
                });

            return <Animated.View style={[styles.dot, {width: doWidth, opacity}]} key={data[i].id} />
            
        })}

    </View>
  );
};

const styles = StyleSheet.create({
  dot:{
    marginTop: 30,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#683C15',
    marginHorizontal: 8
  }
});
