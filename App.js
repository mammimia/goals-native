import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, key: Math.random().toString() }
    ]);
  };

  const removeGoalHandler = (goalKey) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalKey);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={() => setIsModalVisible(true)}
        />
        <GoalInput
          addGoal={addGoalHandler}
          visible={isModalVisible}
          closeModal={() => setIsModalVisible(false)}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            alwaysBounceVertical
            keyExtractor={(item) => item.key}
            renderItem={(itemData) => {
              const { item } = itemData;
              return (
                <GoalItem
                  text={item?.text}
                  removeItem={() => removeGoalHandler(item?.key)}
                />
              );
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  goalsContainer: {
    flex: 5
  }
});
