import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Modal } from 'react-native';

const GoalInput = ({ addGoal, visible, closeModal }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const handleAddGoal = () => {
    if (enteredGoal === '') return;

    addGoal(enteredGoal);
    setEnteredGoal('');
    closeModal();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={enteredGoal}
          placeholder="Enter your goal!"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={handleAddGoal}
              disabled={enteredGoal?.length === 0}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: 100,
    marginHorizontal: 8
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 8
  }
});

export default GoalInput;
