import { useState } from 'react'
import styles from './Select.module.css'
import { X } from 'react-feather';

type Option = {
  name: string,
  value: string
}

interface Props {
  options?: Option[]; 
  value?: any
  setValue?: any;
}

const SearchInput = ({options, value, setValue}:Props) => {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [valueInfo, setValueInfo] = useState<any>([]);
  const addItem = (item_name: string, item: string) => {
    const element = {name: item_name, item} 
    const exist = value.filter((v:any) => v == item);
    const existInfo = valueInfo.filter((v:any) => v.item == item);
    
    if(exist.length <= 0){
      setValue([...value, element.item ])
    }
        
    if(existInfo.length <= 0){
     setValueInfo([...valueInfo, element ])
   }
  }

  const removeItem = (item: string) => { 
    const exist = value.filter((v:any) => v != item);
    const existInfo = valueInfo.filter((v:any) => v.item != item);
    
    setValueInfo(existInfo)
    setValue(exist)
  }

  return (
    <div className={styles.select_element}>
      <span className={styles.input} onClick={() => setOpen(!open)}>
        {valueInfo?.map((item:any) => (
          <div key={item.item}>{item.name} <button onClick={() => removeItem(item.item)}><X size={18} /></button></div>
        ))}
      </span>
      <div className={`${styles.select} ${open && styles.select_active} `} id="" >
        <input type="search" onChange={(e) => setSearch(e.target.value)} name="" id="" placeholder='Search' /> 
        <div>
        {options?.filter((option) => option.name.toLowerCase().includes(search.toLowerCase())).map(({name, uuid}: any) => (
          <input key={uuid} readOnly onClick={() => addItem(name, uuid)} className={styles.options} value={name} />
        ))}
        </div>

      </div>
    </div>
  )
}

export default SearchInput