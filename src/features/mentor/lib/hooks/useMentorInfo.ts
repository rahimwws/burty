import { useQuery } from "@tanstack/react-query";
import mentor from "../../model/routes";

const useMentorInfo = () => {
   return useQuery({
      queryKey: ["mentorInfo"],
      queryFn: () => mentor.getMentorInfo(),
   });
};

export default useMentorInfo;