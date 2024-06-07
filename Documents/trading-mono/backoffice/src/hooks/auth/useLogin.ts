import { loginApi } from "@/services";
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {
    const navigate = useNavigate();

    const {mutate: login, isLoading} = useMutation({
        mutationFn: loginApi,
        onSuccess: () => {
        navigate('/dashboard')
        }
    });

    return { login, isLoading }
}