import CardWrapper from "@/components/CardWrapper"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

interface loginProp {
  toogleForm: () => void;
}

const Login = ({ toogleForm }: loginProp) => {

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    }
  })


  const { register, handleSubmit } = form;

  const formSubmit = (data: { email: string; password: string }) => {
    console.log("Form verified and submitted with data");
    console.log(data);
  }

  return (
    <CardWrapper title="Login" backText="Don't have an account?" backLink={toogleForm}>
      <Form {...form}>
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-3 flex flex-col justify-center items-center">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel> Email </FormLabel>
                  <FormControl>
                    <Input {...field} {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}/,
                        message: "Invalid email address"
                      }
                    })} type="email" id="email" placeholder="example@gmail.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          >
          </FormField>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem className="w-full relative">
                  <FormLabel> Password </FormLabel>
                  <FormControl>
                    <>
                      <Input {...field}  {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters long"
                        }
                      })} type="password" id="password" placeholder="******" />
                      <p className="relative text-right text-sm underline text-blue-400">forgotpassword?</p>
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          >
          </FormField>

          <Button variant="brandColor1" type="submit" className="px-11">Login</Button>
        </form>
      </Form>
    </CardWrapper >
  )
}

export default Login