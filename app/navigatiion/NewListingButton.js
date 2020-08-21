import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { THEME } from '../theme';

export function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={THEME.WHITE}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: THEME.MAIN_PEACH,
    borderColor: THEME.WHITE,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 20,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
});
