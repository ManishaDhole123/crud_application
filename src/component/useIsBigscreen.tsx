import { useMediaQuery } from "react-responsive";

export default function useIsBigScreen() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  return isBigScreen;
}