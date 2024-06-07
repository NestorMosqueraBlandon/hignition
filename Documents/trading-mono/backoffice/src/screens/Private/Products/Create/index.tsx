import { Button, Field, ImageInput, Input, Subtitle } from '@/components'
import { useBrands, useCreateProduct, useForm, useProductCategories, useUploadImage } from '@/hooks'
import { useState } from 'react'
import styles from './Create.module.css'
import { X } from 'react-feather'
import { Brand } from '@rv/entities'
import initialProductState from './initial-state'

interface Props {
  setOpen: Function
}
const CreateProduct = ({ setOpen }: Props) => {
  const [, setProduct] = useState({});
  const { brands } = useBrands();
  const { productCategories } = useProductCategories();

  const { uploadImage, isLoading, urls } = useUploadImage();
  const {formState, handleChange} = useForm(initialProductState);

  const { isCreating, createProduct } = useCreateProduct();

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.header}>
            <Subtitle text='New Product' />
            <Button style={{
              width: 50
            }} variant='third' onClick={() => setOpen(false)} >
              <X size={20} />
            </Button>
          </div>
          <div className={styles.main}>
            <div>
              <div className={styles.basic}>
                <h3>Basic information</h3>
                <p>
                  Describe tu producto. Puedes utilizar esta información en los
                  domumentos que generes en Helebba.
                </p>

                <Field label="Product name *">
                  <Input
                    name="name"
                    placeholder="Add name to product"
                    onChange={handleChange}
                  />
                </Field>

                <Field label="Description *">
                  <textarea name="description" onChange={handleChange} placeholder="Especifica las características del artículo" />
                </Field>
              </div>

              <div className={styles.sells}>
                <h3>Pricing</h3>
                <p>
                  Set price.
                </p>
                <Field label="Price">
                  <Input type="number" onChange={handleChange} />
                </Field>

              </div>

              <div className={styles.basic}>
                <h3></h3>
                <div className={styles.col}>

                  <Field label="Wattage">
                    <Input
                      name="wattage"
                      onChange={handleChange}
                    />
                  </Field>

                  <Field label="Color">
                    <Input name="color"
                      onChange={handleChange}
                    />
                  </Field>
                </div>

                <div className={styles.col}>

                  <Field label="Model">
                    <Input name="model" onChange={handleChange} />
                  </Field>
                  <Field label="benchmark">
                    <Input name="weight" onChange={handleChange} />
                  </Field>
                </div>

              </div>

              <div>
                <h3>Stock management</h3>
                <Field label="Amount" >
                  <Input onChange={({ target }) => setProduct((prev: any) => ({ ...prev, ['stock']: { ...prev.stock, amount: target.value } }))} />
                </Field>

              </div>

              <div>
                <h3>Screen details</h3>

                <div className={styles.col}>

                  <Field label='Size'>
                    <Input name='size' />
                  </Field>
                  <Field label='Resolution'>
                    <Input name='resolution' />
                  </Field>
                </div>

                <div className={styles.col}>

                  <Field label='Refresh rate'>
                    <Input name='refresh_rate' />
                  </Field>
                  <Field label='Response time'>
                    <Input name='response_time' />
                  </Field>
                </div>

                <div className={styles.col}>

                  <Field label='Panel type'>
                    <Input name='panel_type' />
                  </Field>
                  <Field label='HDR'>
                    <Input checkBox type='checkbox' name='hdr' />
                  </Field>
                </div>

                <Field label='Aspect ratio'>
                  <Input name='aspect_ratio' />
                </Field>
              </div>
            </div>
            <div>
              <div className={styles.category}>
                <h3>Categorization</h3>
                <p>
                  Aditional information for complete product details.
                </p>
                <Field label="Brand *">

                  <select name="" id="">
                    {brands?.items.map((brand: Brand) => (
                      <option value={brand.uuid}>{brand.name}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Category *">
                  <select name="" id="">
                    {productCategories?.items.map((brand: Brand) => (
                      <option value={brand.uuid}>{brand.name}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <ImageInput uploadImage={uploadImage} isLoading={isLoading} urls={urls} />
              <div>
                <h3>Aditional information</h3>
                <div className={styles.col}>

                  <Field label='Speed'>
                    <Input name='speed' />
                  </Field>
                  <Field label='Cores'>
                    <Input name='cores' />
                  </Field>
                </div>
                <div className={styles.col}>

                  <Field label='Threads'>
                    <Input name='thread' />
                  </Field>
                  <Field label='Cache'>
                    <Input name='cache' />
                  </Field>
                </div>
                <div className={styles.col}>

                  <Field label='Memory'>
                    <Input name='memory' />
                  </Field>
                  <Field label='Form Factor'>
                    <Input name='form_factor' />
                  </Field>
                </div>
                <div className={styles.col}>

                  <Field label='Socket'>
                    <Input name='socket' />
                  </Field>
                  <Field label='Max Memory'>
                    <Input name='max_memory' />
                  </Field>
                </div>
                <div className={styles.col}>

                  <Field label='Chipset'>
                    <Input name='chipset' />
                  </Field>
                  <Field label='Weight'>
                    <Input name='weight' />
                  </Field>
                </div>

              </div>
            </div>
          </div>
          <div className={styles.footer}>
            {/* <Button onClick={setOpen}  variant="third">Descartar</Button> */}
            <Button size='sm' loading={isCreating} onClick={() => createProduct(formState, {
onSuccess: () => {
    setOpen(false)
}
})}>Guardar</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateProduct