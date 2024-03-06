import { StyleSheet } from "react-native";
import { COLORS, FONTWEIGHT, SIZES } from "../../constants/theme";

export const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: COLORS.light.background,
    height: 'auto',
    padding: 5
  },
  title: {
    fontSize: SIZES.medium,
    fontWeight: FONTWEIGHT.bold
  },
  image: {
    marginHorizontal: 10,
  },
  subtitle: {
    fontSize: SIZES.small,
    fontWeight: FONTWEIGHT.light,
  }
})

