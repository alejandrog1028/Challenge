import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>Press any option.</ThemedText>
      <Collapsible title="Role">
        <ThemedText> I want to be the designer or project manager in my team. </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Passion">
        <ThemedText>
          My passion is learning. I enjoy learning new things everyday but the thing I am most interested is science and this includes chemistry, coding, and phsyics. I like learning these subjects becase I find them interesting and they are some fields I want to pursue. </ThemedText>
      </Collapsible>
      <Collapsible title="Dream Career">
        <ThemedText>
          My dream career is to be a mechanical engineer or laboratory scientist. I want to be a engineer because I like working with things and figuring out how it works. I would also like to be a scientist since they are constantly learning and inventing or improving on modern-day inventions.
        </ThemedText>

 
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
