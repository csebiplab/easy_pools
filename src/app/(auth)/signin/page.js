"use client";

import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

const providers = {
  CREDENTIALS: "credentials"
}

export default function () {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();


  async function onSubmit(data) {
    const { username, password } = data ?? {};

    try {
      setIsLoading(true);
      const res = await signIn(providers.CREDENTIALS, {
        username,
        password,
        redirect: false,
      });

      reset();

      if (res?.error) {
        toast.error(res?.error);
      }

      if (!res?.error) {
        setIsLoading(false);
        toast.success("Login success");
      }

      if (res.ok && res?.error == null) {
        router.push("/dashboard/admin/profile");
      }


    } catch (error) {
      console.log(error)
      toast.error('Something went wrong! Please try again later.');
    } finally {
      setIsLoading(false);

    }
  }
  return (
    <main className="min-h-screen flex justify-center items-center px-2 py-10">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your credentials to sign in
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              {...register("username", { required: true })}
              type="text"
              size="lg"
              label="User Name"
              name="username"
            />
            <Input
              {...register("password", { required: true })}
              type="password"
              size="lg"
              label="Password"
              name="password"
            />
          </div>
          <Button aria-label="Form submit button" className="mt-6" type="submit" disabled={isLoading} fullWidth>
            {isLoading ? `Loading...` : `Sing In`}
          </Button>
        </form>
      </Card>
    </main>
  );
}
