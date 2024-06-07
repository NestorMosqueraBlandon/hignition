import {
  Breadcrumbs,
  Button,
  Field,
  ImageInput,
  Input,
  TextEditor,
} from "@/components";
import { Container } from "@/containers";
import { useCreatePost, useForm, useUploadImage, useUser } from "@/hooks";
import { useState } from "react";
import styles from "./Create.module.css";
import company from "./company";
import { useNavigate } from "react-router-dom";
import { calculateReadingTime } from "@/utilities";

const CreatePost = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const { user } = useUser();
  const { isLoading, urls, url, uploadImage } = useUploadImage();
  const { isCreating, createPost } = useCreatePost();

  const { formState: post, handleChange } = useForm({
    company: "",
    title: "",
    category: "",
    author: user?.uuid,
    featured_image: url,
    social_image: url,
    language: "",
    excerpt: "",
  });

  const handleEditorChange = (value: any) => {
    setContent(value);
  };

  const onSubmit = () => {
    const duration = calculateReadingTime(content);
    createPost({ ...post, duration: duration.toString(), social_image: url, featured_image: url, content });
    navigate('/blogs')
  };

  return (
    <Container>
      <div className={styles.header}>
        <Breadcrumbs items={["Enterprise", "Create Post"]} />
        <Button size="sm" className="primary" loading={isCreating} onClick={onSubmit}>
          Publish
        </Button>
      </div>

      <div className={styles.grid}>
        <div>
          <Field label="Title" tip="Write a title for your post">
            <Input name="title" value={post.title} onChange={handleChange} />
          </Field>
          <Field label="Company">
            <select name="company" onChange={handleChange}>
              <option value="">Select a company</option>
              {company.map((compan) => (
                <option value={compan.name}>{compan.name}</option>
              ))}
            </select>
          </Field>
          <Field label="Category">
            <select name="category" onChange={handleChange}>
              <option value="">Select a category</option>
              {company
                .filter((com) => com.name == post.company)[0]
                ?.categories.map((category) => (
                  <option value={category.value}>{category.name}</option>
                ))}
            </select>
          </Field>
          <Field label="Language">
            <select name="language" onChange={handleChange}>
              <option value="">Select language</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
            </select>
          </Field>
          <Field label="In General?">
            <Input type="checkbox" />
          </Field>
          <ImageInput
            isLoading={isLoading}
            urls={urls}
            uploadImage={uploadImage}
          />
          <Field label="Description" tip="Write a description">
            <textarea name="excerpt" onChange={handleChange} />
          </Field>
        </div>
        <div>
          <Field label="Content">
            <TextEditor
              value={content}
              onChange={handleEditorChange}
              className="page"
            />
          </Field>
        </div>
      </div>

      {/* <ConfirmModal title="Post created sucessfully" cancelText="Boom yeah!!!" isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </Container>
  );
};

export default CreatePost;
