import { Upload } from 'react-feather'
import styles from './ImageInput.module.css'
import { Loader } from '..'


interface Props{
    isLoading: boolean;
    uploadImage: (image: any) => Promise<void>;
    urls: string[]
}

const ImageInput = ({isLoading, uploadImage, urls}: Props) => {
    
    const uploadHandler = async (e: any) => {
        uploadImage(e.target.files[0]);
    };
    return (
        <div className={styles.main}>
            <h3>Images</h3>
            <p>
                Upload image.
            </p>

            <div className={styles.file_input}>
                <input
                    type="file"
                    name="image"
                    id="image"
                    accept=".png,.jpg,.jpeg,.svg"
                    onChange={uploadHandler}
                />
                {isLoading && urls.length < 1 && (<div className={styles.loader_container}><Loader small /></div>)}
                {urls.length < 1 && !isLoading ? (

                    <label htmlFor="image">
                        <div className={styles.input_box}>
                            <Upload size={20} />
                            <span>Selecciona o arrastra aquí tus archivos</span>
                        </div>
                        <div className={styles.file_types}>
                            <span>
                                Archivos permitidos: .png, .jpg, .jpeg
                            </span>
                        </div>
                    </label>
                ) : (
                    <img className={styles.main_image} src={urls[0]} alt="" />
                )}
            </div>
            <div className={styles.other_images}>
                {urls.slice(1).map((photo: string) => (
                    <img key={photo} className={styles.second_image} src={photo} style={{
                        objectFit: 'contain'
                    }} />
                ))}
                {urls.length >= 1 && (
                    <label htmlFor="image">
                        <div className={styles.input_box_mini}>
                            {isLoading ? <Loader small /> : (
                                <Upload size={20} />

                            )}
                        </div>
                    </label>
                )}
            </div>

        </div>

    )
}

export default ImageInput