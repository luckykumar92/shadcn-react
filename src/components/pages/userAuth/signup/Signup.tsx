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

interface signupProp {
  toogleForm: () => void;
}

const Signup = ({ toogleForm }: signupProp) => {

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: ""
    }
  })

  const { register, handleSubmit } = form;

  const formSubmit = (data: { username: string, email: string; password: string, confirmpassword: string }) => {
    console.log("Form verified and submitted with data");
    console.log(data);
  }

  return (
    <CardWrapper title="SignUp" backText="Already have an account?" backLink={toogleForm}>
      <Form {...form}>
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-3 flex flex-col justify-center items-center">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => {
              return (
                <FormItem className="space-y-1">
                  <FormLabel> Username </FormLabel>
                  <FormControl>
                    <Input {...field} {...register("username", {
                      required: "username is required",
                      minLength: {
                        value: 2,
                        message: "username must be greater than 2 character"
                      }
                    })} type="text" id="username" placeholder="ex: John"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem className="space-y-1">
                  <FormLabel> Email </FormLabel>
                  <FormControl>
                    <Input {...field} {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}/,
                        message: "Invalid email address"
                      }
                    })} type="email" id="email" placeholder="example@gmail.com"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem className="space-y-1">
                  <FormLabel> Password </FormLabel>
                  <FormControl>
                    <Input {...field}  {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "password must be at least 6 characters long"
                      }
                    })} type="password" id="password" placeholder="******"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name="confirmpassword"
            render={({ field }) => {
              return (
                <FormItem className="space-y-1">
                  <FormLabel> Confirm Password </FormLabel>
                  <FormControl>
                    <Input {...field}  {...register("confirmpassword", {
                      required: "confirm password is required",
                      minLength: {
                        value: 6,
                        message: "confirm password must be at least 6 characters long"
                      }
                    })} type="password" id="confirmpassword" placeholder="******"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />

          <Button variant="brandColor2" type="submit" className="px-11">Signup</Button>
        </form>
      </Form>
    </CardWrapper >
  )
}

export default Signup