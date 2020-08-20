import React, { useState, useEffect } from 'react';
import { LoginScreen } from './app/screens/LoginScreen';
import { ListingEditScreen } from './app/screens/ListingEditScreen';
import { Screen } from './app/components/Screen';
import * as ImagePicker from 'expo-image-picker';
import { Button, Image } from 'react-native';
import { ImageInput } from './app/components/ImageInput';
import { ImageInputList } from './app/components/ImageInputList';
import { FormImagePicker } from './app/components/forms/FormImagePicker';

export default function App() {
  return <ListingEditScreen />;
}
