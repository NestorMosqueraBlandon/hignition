import { Breadcrumbs, Button, Loader, Title } from '@/components'
import { Container, ScreenHeader, Table } from '@/containers'
import { deleteProduct } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react';
import CreateProduct from './Create';
import { useProducts } from '@/hooks';

const Products = () => {
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState<boolean>(false);
  const { isLoading, products } = useProducts();


  const {isLoading: isDeleting, mutate} = useMutation({
    mutationKey: ['products'],
    mutationFn: (uuid:string) => deleteProduct(uuid),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products']
      })
    }
  })

  if(isLoading) return <Loader />
  return (
    <Container>
      <ScreenHeader>
        <div>
          <Breadcrumbs items={['Home', 'Products', 'List']} />
          <Title text='Products' />
        </div>
        <Button onClick={() => setShowForm(true)}>Create Product</Button>

      </ScreenHeader>
      <Table isDeleting={isDeleting} deleteHandler={mutate} items={products.items} keys={['name', 'price', 'createdAt']} headers={['Name', 'Price', 'Created At']} count={products.count} pageInfo={products.pageInfo} />
      {showForm && <CreateProduct setOpen={setShowForm} />}
    </Container>
  )
}

export default Products