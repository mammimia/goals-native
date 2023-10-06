import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = ({ text, removeItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#ddd' }}
        onPress={removeItem}
        style={({ pressed }) => pressed && styles.goalItemPressed}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  goalText: {
    color: '#fff',
    padding: 8
  },
  goalItemPressed: {
    opacity: 0.5
  }
});

export default GoalItem;
