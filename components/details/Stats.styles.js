import { StyleSheet } from "react-native"
import { SIZES, FONTWEIGHT } from "../../constants/theme"

export const styles = StyleSheet.create({
  stats_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SIZES.small
  },
  stat_titles: {
    fontSize: SIZES.medium,
    fontWeight: FONTWEIGHT.bold
  },
})