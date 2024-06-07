// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { DragDropContext } from 'react-beautiful-dnd';
import styles from './Lists.module.css';
import { useUpdateIssue, useUpdateIssueProject } from '@/hooks';
import List from './List';
import { Loader } from '@/components';
import { Issue, Result } from '@rv/entities';

interface Props {
    draggableId?: string;
    destination: any;
    source?: any;
}

interface PropsIssue {
  isLoading: boolean;
  issues: any;
  filter: string;
}
const Lists = ({isLoading, issues, filter=''}: PropsIssue) => {
    const isPositionChanged = ({ destination, source }: Props) => {
        if (!destination) return false;
        const isSameList = destination.droppableId === source.droppableId;
        const isSamePosition = destination.index === source.index;
        return !isSameList || !isSamePosition;
    };

    const { updateIssue } = useUpdateIssue();
    const { updateIssue: updateIssueProject } = useUpdateIssueProject();
    const handleIssueDrop = ({draggableId,  destination, source }: Props) => {
        if (!isPositionChanged({ source, destination })) return;
        const issue = JSON.parse(draggableId || "{}") || "";
        const status = destination.droppableId;
        const list_position = calculateIssueListPosition({issues, destination, source, uuid:issue.uuid});

        updateIssue({...issue,  list_position, uuid: issue.uuid, status_issue: status});
        updateIssueProject({...issue,  list_position, uuid: issue.uuid, status_issue: status})
    };
    
     const filteredIssues = issues?.items?.filter((item:Issue) => {
        //  const codeMatch = item.code?.toString().includes(search);

         const hasAssignees = Array.isArray(item.assignees) && item.assignees.length > 0;
      
         if (!hasAssignees) {
           return false;
         }
      
         const assigneeMatch = item.assignees.filter((assignee:any) => {
           return assignee._id.includes(filter);
         }).length > 0;
      
        //  return codeMatch && assigneeMatch;
         return assigneeMatch;

        // return item;
     })

    if(isLoading) return <Loader />

    return (
        <DragDropContext onDragEnd={handleIssueDrop}>
            <div className={styles.lists}>
                {Object.values(['Ideas', 'Backlog', 'To do', 'In Process', 'Sprint', 'Review', 'Finished']).map((status) => (
                    <List issues={filteredIssues} key={status} status={status} />
                ))}
            </div>
        </DragDropContext>
    );
};

const calculateIssueListPosition = (data:any) => {
    const { prevIssue, nextIssue } = getAfterDropPrevNextIssue(data.issues, data.destination, data.source, data.uuid );
    let position;
  
    if (!prevIssue && !nextIssue) {
      position = 1;
    } else if (!prevIssue) {
      position = nextIssue.listPosition - 1;
    } else if (!nextIssue) {
      position = prevIssue.listPosition + 1;
    } else {
      position = prevIssue.listPosition + (nextIssue.listPosition - prevIssue.listPosition) / 2;
    }
    return position;
  };
  

  const getAfterDropPrevNextIssue = (allIssues:any, destination:any, source:any, droppedIssueId: any) => {
    const beforeDropDestinationIssues = getSortedListIssues(allIssues, destination.droppableId);
    const droppedIssue = allIssues?.items.find((issue:any) => issue.id === droppedIssueId);
    const isSameList = destination.droppableId === source.droppableId;
  
    const afterDropDestinationIssues = isSameList
      ? moveItemWithinArray(beforeDropDestinationIssues, droppedIssue, destination.index)
      : insertItemIntoArray(beforeDropDestinationIssues, droppedIssue, destination.index);
  
    return {
      prevIssue: afterDropDestinationIssues[destination.index - 1],
      nextIssue: afterDropDestinationIssues[destination.index + 1],
    };
  };

const getSortedListIssues = (issues:Result<Issue>, status:string) =>
    issues?.items?.filter(issue => issue.status === status).sort((a, b) => a.list_position - b.list_position);

  export const moveItemWithinArray = (arr:any, item:any, newIndex:any) => {
    const arrClone = [...arr];
    const oldIndex = arrClone.indexOf(item);
    arrClone.splice(newIndex, 0, arrClone.splice(oldIndex, 1)[0]);
    return arrClone;
  };

  export const insertItemIntoArray = (arr:any, item:any, index:any) => {
    const arrClone = [...arr];
    arrClone.splice(index, 0, item);
    return arrClone;
  };

export default Lists;