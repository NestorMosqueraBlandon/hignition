import { useEffect, useRef } from "react";


interface Props{
    handler: any
    listenCapturing?: boolean
}
export const useOutsideClick = ({handler, listenCapturing = true}:Props) => {
    const ref = useRef<any>();

    useEffect(() => {
        const handleClick = (event:any) => {
            if(ref.current && !ref.current.contains(event.target)) {
                handler()
            }; 
        }

        document.addEventListener('click', handleClick, listenCapturing)

        return ()=> document.removeEventListener('click', handleClick, listenCapturing);
    }, [handler, listenCapturing]);
    return ref;
}