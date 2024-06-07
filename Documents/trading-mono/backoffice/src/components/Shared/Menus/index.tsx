import React, { createContext, useContext, useState } from 'react'
import styles from './Menus.module.css';
import { MoreVertical } from 'react-feather';
import { createPortal } from 'react-dom';
import { useOutsideClick } from '@/hooks';

interface Props {
    children: React.ReactNode
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

const intialValues  = {
    open,
    close,
    setPosition:null,
    openId: "",
    position: null,
} as {
    open: Function;
    close: any;
    openId: string
    position: any
    setPosition: any;
}

const MenusContext = createContext(intialValues);

const Menus = ({children}: Props) => {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

    return (
        <MenusContext.Provider value={{openId, close, open, position, setPosition}}>
                {children}
        </MenusContext.Provider>
  )
}

const Menu = ({children}: any) => {
    return <div>{children}</div>
}

const Toggle = ({id}:{id: string}) => {
    const {openId, close, open, setPosition} = useContext(MenusContext);
    const handleClick = (event:any) => {
        const rect = event.target.closest('button').getBoundingClientRect();
        setPosition({
            x: window.innerWidth - rect.width - rect.x,
            y: rect.y + rect.height + 8
        })
        openId === '' || openId !== id ? open(id) : close()
    }
return <button className={styles.toggle} onClick={handleClick} >
    <MoreVertical size={20} />
</button>
}

const List = ({id, children}:{id: string, children: any}) => {
    const { openId, position, close } = useContext(MenusContext);
    const ref = useOutsideClick({handler: close, listenCapturing: true});
    if(openId !== id) return null;

    return createPortal(
        <ul className={styles.list} style={{
            top: position.y,
            right: position.x
        }} ref={ref}  >{children}</ul>, document.body
    )
}

const Button = ({children, onClick, ...rest}:ButtonProps) => {

    const { close } = useContext(MenusContext);

    const handleClick = (e:any) => {
        onClick?.(e);
        close()
    }

return <li>
    <button onClick={handleClick} className={styles.button} {...rest} >{children}</button>
</li>
}

Menus.Menu = Menu
Menus.Toggle = Toggle
Menus.List = List
Menus.Button = Button


export default Menus