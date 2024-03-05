import { StyleSheet } from "react-native";
import { FONTWEIGHT, SIZES, SHADOWS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: FONTWEIGHT.heavy,
    marginHorizontal: SIZES.small,
  }
})

export default styles