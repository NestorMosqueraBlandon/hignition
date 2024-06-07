import { Breadcrumbs, Button, Loader, Title } from '@/components';
import { Container, ScreenHeader, Table } from '@/containers';
import { deleteCollaborator, getCollaborators } from '@/services';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const Collaborators = () => {
    const queryClient = useQueryClient();
  
    const {isLoading, data: collaborators} = useQuery({
      queryKey: ['collaborators'],
      queryFn: getCollaborators
    });
  
  
  
    const {isLoading: isDeleting, mutate} = useMutation({
      mutationKey: ['collaborators'],
      mutationFn: (uuid:string) => deleteCollaborator(uuid),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['collaborators']
        })
      }
    })
  
    if(isLoading) return <Loader />
    return (
      <Container>
        <ScreenHeader>
          <div>
            <Breadcrumbs items={['Home', 'Collaborators', 'List']} />
            <Title text='Collaborators' />
          </div>
          <Button>Create Collaborator</Button>
  
        </ScreenHeader>
        <Table isDeleting={isDeleting} deleteHandler={mutate} items={collaborators.items} keys={['name', 'lastname', 'location.country', 'team', 'position', 'createdAt']} headers={['Name', 'Lastname', 'Location', 'Team', 'Position',  'Created At']} count={collaborators.count} pageInfo={collaborators.pageInfo} />
      </Container>
    )
  }
  
  export default Collaborators