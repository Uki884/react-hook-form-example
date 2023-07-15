import { forwardRef } from "react";

interface InputTextProps {
  type: string;
  name: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  value: string;
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(({ error, value, ...props }, ref) => {
  return (
    <>
      <input {...props} value={value} ref={ref} />
      <div>{ error }</div>
    </>
  )
})