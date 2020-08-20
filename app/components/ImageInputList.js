import React, { useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { ImageInput } from './ImageInput';

export function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollRef = useRef();
  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollRef}
        onContentSizeChange={() => scrollRef.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
  },
});