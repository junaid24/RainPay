import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    width: 327,
    height: 64,
    marginTop: 35,
    marginLeft: 24,
    fontFamily: 'UniversalSans-900',
    fontSize: 24,
    fontWeight: '900',
    color: '#2F3355',
    lineHeight: 32,
  },
  subtitle: {
    position: 'absolute',
    width: 327,
    height: 48,
    marginTop: 75,
    marginLeft: 24,
    fontFamily: 'UniversalSans-500',
    fontSize: 16,
    fontWeight: '504',
    color: '#7D819C',
    lineHeight: 24,
  },
  buttonContainer: {
    width: 327,
    marginTop: 300,
    marginLeft: 23,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#3B4DCC',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff',
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;
