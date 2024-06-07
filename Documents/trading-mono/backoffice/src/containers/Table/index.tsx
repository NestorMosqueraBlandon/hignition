import { Result } from '@rv/entities'
import styles from './Table.module.css'
import { DivisaFormater } from '@/utilities';
import { Menus, Pagination } from '@/components';
import { UseMutateFunction } from '@tanstack/react-query';
import { Modal } from '..';
import BrandForm from '@/screens/Private/Prooving/Brands/Create/BrandForm';
import { useState } from 'react';

interface DataRecord {
  [key: string]: any;
}

interface Props<T extends DataRecord> extends Result<T> {
  headers: string[];
  keys: string[];
  deleteHandler: UseMutateFunction<any, unknown, string, unknown>
  isDeleting: boolean;
}

const Table = <T extends DataRecord>({ items, count, headers, keys, isDeleting, deleteHandler }: Props<T>) => {
  const [itemToEdit, setItemToEdit] = useState<any>()
  const handleEditClick = (item: any) => {
    setItemToEdit(item);
    console.log('CLICKINS'); // Añade un console.log para depurar
  };

  console.log(itemToEdit)
  return (
    <>
        <table className={styles.table}>
          <thead className={styles.header}>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.uuid}>
                {keys.map((key) => (
                  <td key={key}>{key == 'price' ? DivisaFormater({ value: item[key] }) : key.includes('.') && item[key.split('.')[0]] ? item[key.split('.')[0]][key.split('.')[1]] : key == "createdAt" ? item[key].slice(0, 10) : item[key]}</td>
                ))}
                <td className={styles.actions}>
                  <Menus.Menu>
                    <Menus.Toggle id={item.uuid} />

                    <Menus.List id={item.uuid}>
                      <Modal.Open opens="edit" onClick={() => handleEditClick(item)}>
                        <Menus.Button >Edit</Menus.Button>
                      </Modal.Open>
                      <Menus.Button disabled={isDeleting} onClick={() => deleteHandler(item.uuid)}>Delete</Menus.Button>
                    </Menus.List>
                  </Menus.Menu>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
        <Modal.Window title='Edit Brand' name="edit">
                      <BrandForm brandToEdit={itemToEdit} />
                    </Modal.Window>
      <div className={styles.pagination}>
        <Pagination count={count} />
      </div>
    </>
  )
}

export default Table