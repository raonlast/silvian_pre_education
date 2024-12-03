import React, {useState} from 'react';
import {StyleSheet, Pressable} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {ColorType} from '../types/color-tiles.type';

interface IColorTileProps {
  color: ColorType;
}

const ColorTile = ({color}: IColorTileProps) => {
  const [isVisible, setIsVisible] = useState(false); // 현재 상태
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const toggleOpacity = () => {
    if (isVisible) {
      opacity.value = withTiming(0, {duration: 500});
    } else {
      opacity.value = withTiming(1, {duration: 1000});
    }
    setIsVisible(!isVisible);
  };

  return (
    <Pressable onPress={toggleOpacity}>
      <Animated.View
        style={[styles.circle, {backgroundColor: color}, animatedStyle]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default ColorTile;
