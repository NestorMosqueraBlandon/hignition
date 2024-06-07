import { useForm, useGreeting, useUser } from "@/hooks"
import styles from "./Signin.module.css"
import { Button, Field, Input } from "@/components";
import { Lock, User } from "react-feather";
import colors from "@/styles/colors";
import { useLogin } from "@/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Signin = () => {
  const { message } = useGreeting();
  const { formState: user, handleChange } = useForm({
    username:"",
    password: ""
  });

  const { isLoading, login} = useLogin();
  const { user: userInfo } = useUser();

  const navigate = useNavigate();

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login(user);
  }

  useEffect(() => {
    if(userInfo?.uuid){
      navigate('/dashboard');
    }
  }, [userInfo])

  return (
    <div className={styles.content_container}>
        <form className={styles.form_layout} onSubmit={submit}>
            <div className={styles.form_layout_underlay} />
            <div className={styles.form_layout_underlay_bottom} />

            <img className={styles.logo} src="/isotype.png" />
            <h3>{message}</h3>
            <h3 className={styles.greeting}>Welcome Back.</h3>
            <Field>
                <Input name="username" onChange={handleChange} icon={<User color={colors.icon_color} size={25} />} placeholder="Enter username" />
            </Field>
            <Field>
                <Input name="password" type="password" onChange={handleChange}  icon={<Lock color={colors.icon_color} size={25} />} placeholder="Enter password" />
            </Field>

            <Button type="submit" loading={isLoading} disabled={isLoading}>Login</Button>

            <p className={styles.copy}>By signing in you&apos;re okay with us</p>
        </form>
    </div>
  )
}

export default Signin