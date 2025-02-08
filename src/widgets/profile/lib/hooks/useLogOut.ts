import { useMutation, useQueryClient } from "@tanstack/react-query";
import { user } from "../../model/routes";
import { removeTokens } from "@/shared/api/token/storage";
import { useAppNavigation } from "@/shared/lib/navigation";
import { isAxiosError } from "axios";
import useUserIdStore from "@/features/auth/model/stores/userId";

export const useLogOut = () => {
    const navigation = useAppNavigation();
    const queryClient = useQueryClient();
    const setUserId = useUserIdStore((store) => store.setId);

    return useMutation({
        mutationFn: () => user.logOut(),
        onSuccess: async () => {
            navigation.navigate("Auth");
            await removeTokens();
            setUserId("");
            queryClient.invalidateQueries({
                queryKey: ["profile"]
            });
            alert("Logged out");
        },
        onError: (err) => {
            if (isAxiosError(err)) {
                alert(err.response?.data.message);
            }
        },
    });
};
export default useLogOut;