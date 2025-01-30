import { useQuery } from "@tanstack/react-query";
import { user } from "@/widgets/profile/model/routes";

const useUserPass = () => {
   return useQuery({
      queryKey: ["userPass"],
      queryFn: () => user.getUserPass(),
      staleTime: 5 * 60 * 1000,
   });
};

export default useUserPass;