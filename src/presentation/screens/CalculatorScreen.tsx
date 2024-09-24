import {Pressable, Text, View} from 'react-native';
import {styles, colors} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    prevNumber,
    formula,
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
          {formula}
        </Text>
        {formula === prevNumber ? (
          <Text style={styles.subResult}></Text>
        ) : (
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
            {prevNumber}
          </Text>
        )}
      </View>

      <View style={styles.row}>
        <CalculatorButton
          label="C"
          color={colors.ligthGray}
          blackText={true}
          onPress={clean}
        />
        <CalculatorButton
          label="+/-"
          color={colors.ligthGray}
          blackText={true}
          onPress={toggleSign}
        />
        <CalculatorButton
          label="del"
          color={colors.ligthGray}
          blackText={true}
          onPress={deleteOperation}
        />
        <CalculatorButton
          label="÷"
          color={colors.orange}
          onPress={divideOperation}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          label="7"
          onPress={() => {
            buildNumber('7');
          }}
        />
        <CalculatorButton
          label="8"
          onPress={() => {
            buildNumber('8');
          }}
        />
        <CalculatorButton
          label="9"
          onPress={() => {
            buildNumber('9');
          }}
        />
        <CalculatorButton
          label="x"
          color={colors.orange}
          onPress={multiplyOperation}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          label="4"
          onPress={() => {
            buildNumber('4');
          }}
        />
        <CalculatorButton
          label="5"
          onPress={() => {
            buildNumber('5');
          }}
        />
        <CalculatorButton
          label="6"
          onPress={() => {
            buildNumber('6');
          }}
        />
        <CalculatorButton
          label="-"
          color={colors.orange}
          onPress={substractOperation}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          label="1"
          onPress={() => {
            buildNumber('1');
          }}
        />
        <CalculatorButton
          label="2"
          onPress={() => {
            buildNumber('2');
          }}
        />
        <CalculatorButton
          label="3"
          onPress={() => {
            buildNumber('3');
          }}
        />
        <CalculatorButton
          label="+"
          color={colors.orange}
          onPress={addOperation}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          label="0"
          doubleSize={true}
          onPress={() => {
            buildNumber('0');
          }}
        />
        <CalculatorButton
          label="."
          onPress={() => {
            buildNumber('.');
          }}
        />
        <CalculatorButton
          label="="
          color={colors.orange}
          onPress={calculateResult}
        />
      </View>
    </View>
  );
};
