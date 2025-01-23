import MatchAction from "../../model/types/MatchAction";

const getStringByMatchAction = (matchAction: MatchAction) => {
  switch (matchAction) {
    case "ASSIST":
      return "Assist";
    case "GOAL":
      return "Scored a Goal";
    case "YELLOW_CARD":
      return "Yellow Card";
    case "RED_CARD":
      return "Red Card";
    case "SAVE":
      return "Save (Goalkeeper)";
    default:
      return "";
  }
}

export default getStringByMatchAction;