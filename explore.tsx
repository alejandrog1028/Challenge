import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#98FF98', dark: '#2A4D4D' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#5E8F8F"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      {/* Light Blue Background Wrapper */}
      <ThemedView style={styles.background}>
        <ThemedText style={styles.title} type="title">
          About Me
        </ThemedText>

        <Collapsible title="Role">
          <ThemedText>I’d like to be a designer or project manager on my team.</ThemedText>
        </Collapsible>

        <Collapsible title="Passion">
          <ThemedText>
            My passion is learning — especially in science, coding, chemistry, and physics. I love discovering how things work.
          </ThemedText>
        </Collapsible>

        <Collapsible title="Dream Career">
          <ThemedText>
            I want to be a mechanical engineer or a scientist. I enjoy building, problem-solving, and constant discovery.
          </ThemedText>
        </Collapsible>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#5E8F8F',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  background: {
    backgroundColor: '#D6F0FF', // Light blue
    padding: 16,
    gap: 12,
    flex: 1,
    borderRadius: 10,
  },
  title: {
    marginBottom: 8,
  },
});
