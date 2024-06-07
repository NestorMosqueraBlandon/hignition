import { Breadcrumbs, Button, Loader, Title } from '@/components'
import { Container, ScreenHeader, Table } from '@/containers'
import { deleteComputerApi } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react';
import CreateComputer from './Create';
import { useComputers } from '@/hooks';

const Computers = () => {
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState<boolean>(false);
  const { isLoading, computers } = useComputers();


  const {isLoading: isDeleting, mutate} = useMutation({
    mutationKey: ['computers'],
    mutationFn: (uuid:string) => deleteComputerApi (uuid),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['computers']
      })
    }
  })

  if(isLoading) return <Loader />
  return (
    <Container>
      <ScreenHeader>
        <div>
          <Breadcrumbs items={['Home', 'Computers', 'List']} />
          <Title text='Computers' />
        </div>
        <Button onClick={() => setShowForm(true)}>Create Computer</Button>

      </ScreenHeader>
      <Table isDeleting={isDeleting} deleteHandler={mutate} items={computers.items} keys={['name', 'price', 'createdAt']} headers={['Name', 'Price', 'Created At']} count={computers.count} pageInfo={computers.pageInfo} />
      {showForm && <CreateComputer setOpen={setShowForm} />}
    </Container>
  )
}

export default Computers