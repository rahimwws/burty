import { useMutation } from "@tanstack/react-query";
import { user } from "../../model/routes";
import { removeTokens } from "@/shared/api/token/storage";
import { useAppNavigation } from "@/shared/lib/navigation";
import { isAxiosError } from "axios";

export const useLogOut = () => {
    const navigation = useAppNavigation();
    return useMutation({
        mutationFn: () => user.logOut(),
        onSuccess: () => {
            removeTokens();
            console.log("Logged out");
            alert("Logged out");
            navigation.navigate("Auth");
        },
        onError: (err) => {
            if (isAxiosError(err)) {
                alert(err.response?.data.message);
            }
        },
    });
};
export default useLogOut;