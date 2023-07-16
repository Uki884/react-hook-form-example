import { forwardRef } from "react";

interface InputTextProps {
  type: string;
  name: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  defaultValue?: string;
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(({ error, defaultValue, ...props }, ref) => {
  return (
    <>
      <input {...props} defaultValue={defaultValue} ref={ref} />
      <div style={{ color: 'red'}}>{ error }</div>
    </>
  )
})