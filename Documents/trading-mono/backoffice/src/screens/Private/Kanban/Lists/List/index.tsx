import { useMemo } from "react";
import { Droppable } from "react-beautiful-dnd";
import Issue from "./Issue";
import styles from './List.module.css';

interface Props{
 status: string;
 issues: any;
}

const List = ({issues, status}: Props) => {
  const filteredIssues = useMemo(() => issues?.filter((issue:any) => issue.status_issue == status), [issues]);
  
  return (
    <Droppable key={status} droppableId={status}  >
      {provided => (
       <div className={styles.list}>
         <h2>{status} ({filteredIssues?.length})</h2>
         <div className={styles.list_container} {...provided.droppableProps}  ref={provided.innerRef} >
          {filteredIssues?.map((issue:any, index:number) => (
            <Issue key={issue.uuid} {...issue} index={index} />
          ))}
          {provided.placeholder}
         </div>
       </div>
      )}
    </Droppable>
  )
}

export default List