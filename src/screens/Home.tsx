import {FirstPage} from '../components/FirstPage/FirstPage';
import {Header} from '../components/Header/Header';
import {MenuSection} from '../components/MenuSection/MenuSection';
import {ProfileSection} from '../components/ProfileSection/ProfileSection';
import {SecondPage} from '../components/SecondPage/SecondPage';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Animated,
  NativeSyntheticEvent,
  useWindowDimensions,
  NativeScrollEvent,
} from 'react-native';

const Home = () => {
  const [position, setPosition] = React.useState<number>(0);
  const [selected, setSelected] = React.useState<number>(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const horizontalScroll = React.useRef<ScrollView>(null);
  const {width} = useWindowDimensions();

  const listenScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {x} = e.nativeEvent.contentOffset;
    const halfScreen = Math.floor(width / 2);
    if (x > halfScreen) {
      setSelected(1);
    } else {
      setSelected(0);
    }
  };

  const onMenuPress = React.useCallback((selectedItem: any, offset: any) => {
    setSelected(selectedItem);
    horizontalScroll?.current?.scrollTo({x: offset, animated: true});
  }, []);

  return (
    <>
      <Header />
      <ScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        style={styles.backgroundStyle}>
        <ProfileSection />
        <MenuSection
          selected={selected}
          scrollX={scrollX}
          x={position}
          onFirstPress={() => onMenuPress(0, 0)}
          onSecondPress={() => onMenuPress(1, width)}
          setX={x => setPosition(x)}
        />
        <Animated.ScrollView
          ref={horizontalScroll}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          overScrollMode="never"
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: true,
              listener: (event: NativeSyntheticEvent<NativeScrollEvent>) =>
                listenScroll(event),
            },
          )}
          decelerationRate="fast">
          <FirstPage />
          <SecondPage />
        </Animated.ScrollView>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
  },
});
