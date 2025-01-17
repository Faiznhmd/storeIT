'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type FormType = 'sign-in' | 'sign-up';

const authFormSchema = (formType: FormType) => {
  return z.object({
    email: z.string().email(),
    fullName:
      formType === 'sign-up'
        ? z.string().min(2).max(50)
        : z.string().optional(),
  });
};

const Authform = ({ type }: { type: FormType }) => {
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const [isloading, setisLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
          <h1 className="form-title">
            {type === 'sign-in' ? 'Sign-In' : 'Sign-Up'}
          </h1>

          {type === 'sign-up' && (
            <>
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <div className="shad-form-item">
                      <FormLabel className="shad-form-label">
                        Full Name
                      </FormLabel>

                      <FormControl>
                        <Input
                          placeholder="Enter Your Full Name"
                          {...field}
                          className="shad-input"
                        />
                      </FormControl>
                    </div>

                    <FormMessage className="shad-form-message" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="shad-form-item">
                      <FormLabel className="shad-form-label">
                        Enter your E-mail
                      </FormLabel>

                      <FormControl>
                        <Input
                          placeholder="Enter Your E-mail"
                          {...field}
                          className="shad-input"
                        />
                      </FormControl>
                    </div>

                    <FormMessage className="shad-form-message" />
                  </FormItem>
                )}
              />
            </>
          )}

          <Button
            type="submit"
            className="form-submit-button"
            disabled={isloading}
          >
            {type === 'sign-in' ? 'Sign-In' : 'Sign-Up'}

            {isloading && (
              <Image
                src="/assets/icons/loader.svg"
                alt="loader"
                width={24}
                height={24}
                className="animate-spin ml-2"
              />
            )}
          </Button>

          {errorMessage && <p className="error-messge">* {errorMessage}</p>}
          <div className="body-2 flex justify-center">
            <p className="text-light-100">
              {type === 'sign-in'
                ? "Don't have a account"
                : 'Already have a account?'}
            </p>

            <Link
              href={type === 'sign-in' ? '/sign-up' : '/sign-in'}
              className="ml-1 font-medium text-brand"
            >
              {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
};

export default Authform;
