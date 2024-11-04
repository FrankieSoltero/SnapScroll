import React, { useState } from 'react';
import { View, ScrollView, Dimensions, Text, StyleSheet } from 'react-native';

export default function SnapScrollExample () {
  const [activeSection, setActiveSection] = useState(0);
  const sections = [1, 2, 3]; // Three snap scroll sections

  // This function handles setting the active section for the indicator dots
  const handleScroll = (event: { nativeEvent: { contentOffset: { y: any; }; }; }) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const index = Math.round(currentOffset / Dimensions.get('window').height);
    setActiveSection(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Snap Scroll Sections */}
        {sections.map((section, index) => (
          <View key={index} style={styles.snapSection}>
            <Text style={styles.sectionText}>Snap Section {section}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Dots Indicator */}
      <View style={styles.dotsContainer}>
        {sections.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { width: activeSection === index ? 12 : 8, height: activeSection === index ? 12 : 8 },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  snapSection: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height, // Full height for vertical snapping
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
  sectionText: {
    fontSize: 24,
  },
  dotsContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: 'black',
    borderRadius: 6,
    marginVertical: 4,
  },
  normalSection: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
  normalText: {
    fontSize: 20,
  },
});
