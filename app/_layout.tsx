import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';

export default function HomeLayout() {
  return (
    <><View style={styles.conatainer}>
          <View style={styles.content}>
              <Slot />
          </View>
      </View>
    <View style={styles.footer}>
        <Text> Footer Content </Text>
    </View></>
  )
}
const styles = StyleSheet.create({
    conatainer: {
        flex:1,
        justifyContent: 'space-between',
    },
    content: {
        flex: 1,
    },
    footer: {
        height: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'black'
    },
});