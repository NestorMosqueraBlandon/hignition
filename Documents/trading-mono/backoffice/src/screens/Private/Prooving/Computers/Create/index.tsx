import { Button, Field, ImageInput, Input, Subtitle } from '@/components'
import { useBrands, useComputerCategories, useCreateComputer, useForm, useGames, useProductCategories, usePrograms, useUploadImage } from '@/hooks'
import styles from './Create.module.css'
import { X } from 'react-feather'
import { Brand, Game, ProductCategory, Program } from '@rv/entities'
import initialComputerState from './initial-state'

interface Props {
  setOpen: Function
}
const CreateComputer = ({ setOpen }: Props) => {
  const { brands } = useBrands();
  const { computerCategories } = useComputerCategories();
  const { productCategories } = useProductCategories();
  const { games } = useGames();
  const { programs } = usePrograms();


  const { uploadImage, isLoading, urls } = useUploadImage();
  const { formState, handleChange } = useForm(initialComputerState);

  const { isCreating, createComputer } = useCreateComputer();

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
                <h3>Computer specs</h3>
                <div className={styles.column}>

                {productCategories?.items.map((category: ProductCategory) => (
                  <Field label={category.name} >
                    <select onChange={handleChange}>
                      <option value="">Select one</option>
                    </select>
                  {/* <Input onChange={({ target }) => setProduct((prev: any) => ({ ...prev, ['stock']: { ...prev.stock, amount: target.value } }))} /> */}
                </Field>
                ))}
                </div>

                <div >
                
                </div>

              </div>

              <div>
                <h3>Screen details</h3>

                <div className={styles.col}>

                  <Field label='Size'>
                    <Input name='screen.size' onChange={handleChange} />
                  </Field>
                  <Field label='Resolution'>
                    <Input name='screen.resolution' />
                  </Field>
                </div>

                <div className={styles.col}>

                  <Field label='Refresh rate'>
                    <Input name='screen.refresh_rate' onChange={handleChange} />
                  </Field>
                  <Field label='Response time'>
                    <Input name='screen.response_time' onChange={handleChange} />
                  </Field>
                </div>

                <div className={styles.col}>

                  <Field label='Panel type'>
                    <Input name='screen.panel_type' onChange={handleChange} />
                  </Field>
                  <Field label='HDR'>
                    <Input checkBox type='checkbox' name='screnn.hdr' onChange={handleChange} />
                  </Field>
                </div>

                <Field label='Aspect ratio'>
                  <Input name='screen.aspect_ratio' onChange={handleChange} />
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
                  <select name="brand" id="" onChange={handleChange} >
                    {brands?.items.map((brand: Brand) => (
                      <option value={brand.uuid}>{brand.name}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Category *">
                  <select name="category" id="" onChange={handleChange}>
                    {computerCategories?.items.map((brand: Brand) => (
                      <option value={brand.uuid}>{brand.name}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <ImageInput uploadImage={uploadImage} isLoading={isLoading} urls={urls} />
              <div>
                <h3>Aditional information</h3>
                  
                  <Field label='Games'>
                    <select name="" id="">

                    {games?.items.map((game: Game) => (
                      <option value={game.uuid}>{game.name}</option>
                    ))}
                    </select>

                  </Field>
                  <Field label='Programs'>
                    <select name="" id="">

                    {programs?.items.map((program: Program) => (
                      <option value={program.uuid}>{program.name}</option>
                    ))}
                    </select>

                  </Field>
                  <Field label='Dimensions'>
                      <Field label='Height'>
                        <Input name='dimension.height'  onChange={handleChange} />
                      </Field>
                      <Field label='Width'>
                        <Input name='dimensions.width' onChange={handleChange} />
                      </Field>
                      <Field label='Depth'>
                        <Input name='dimensions.depth' onChange={handleChange} />
                      </Field>
                  </Field>
                <div className={styles.col}>

                  <Field label='Keyboard Lang'>
                    <Input name='keyboardLang' onChange={handleChange} />
                  </Field>
                  <Field label='Weight'>
                    <Input name='weight' onChange={handleChange} />
                  </Field>
                </div>

              </div>
            </div>
          </div>
          <div className={styles.footer}>
            {/* <Button onClick={setOpen}  variant="third">Descartar</Button> */}
            <Button size='sm' loading={isCreating} onClick={() => createComputer(formState, {
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

export default CreateComputer