import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  name_label: {
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
  order_container: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  order_name: {
    fontSize: 15,
  },
  order_price: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  total: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'right',
  },
});
