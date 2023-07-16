import { FieldError, FieldErrors, useForm } from 'react-hook-form'
import { atom, useRecoilState } from 'recoil'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const userSignUpSchema = z.object({
  name: z
    .string({ required_error: "名前を入力してください" })
    .min(5, { message: "5文字以上入力してください" }),
  email: z
    .string({ required_error: "メールアドレスを入力してください" })
    .email({ message: "メールアドレスの形式に誤りがあります" }),
});

export type UserSignUpSchemaType = z.infer<typeof userSignUpSchema>;

const userSignUpFormState = atom({
  key: "userSignUpFormState",
  default: {
    email: '',
    name: '',
  },
});

type ErrorType = FieldErrors<{
  name: FieldError;
  email: FieldError;
}>;

const errorsState = atom<ErrorType>({
  key: "errorsState",
  default: {},
});

export const useUncontrolledForm = () => {
  const [userFormValue, setUserFormValue] = useRecoilState(userSignUpFormState);
  const [errorsValue, setErrorsValue] = useRecoilState(errorsState);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    getValues,
    control,
    trigger,
    setError,
  } = useForm<UserSignUpSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(userSignUpSchema),
    defaultValues: userFormValue,
  });

  const handleNavigate = (path: string) => {
    console.log(errors);
    setErrorsValue(errors);
    setUserFormValue(getValues());
    navigate(path);
  };

  useEffect(() => {
    Object.keys(errorsValue).forEach((key) => {
      console.log(errorsValue as any);
      setError(key as keyof UserSignUpSchemaType, {
        message: (errorsValue as any)[key].message,
        type: (errorsValue as any)[key].type,
      });
    });
  }, [errorsValue]);

  return {
    userFormValue,
    setUserFormValue,
    handleSubmit,
    getValues,
    errors,
    control,
    register,
    handleNavigate,
    isValid,
    trigger,
    isDirty,
  };
};