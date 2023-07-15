import { useControlledForm } from '../../hooks/useControlledForm'
import { InputText } from '../../components/inputText'
import { Controller } from 'react-hook-form'

export const ControlledStep1 = () => {
  const { errors, handleNavigate, control, isValid } = useControlledForm()

  return (
    <>
      <h1>Controlled Form Step1</h1>

      <div>メールアドレス</div>
      <Controller
        control={control}
        name="email"
        render={({field}) => (
          <InputText
            type='text'
            {...field}
            error={errors['email']?.message}
          />
        )}
      />

      <div>名前</div>
      <Controller
        control={control}
        name="name"
        render={({field}) => (
          <InputText
            { ...field }
            type='text'
            error={errors['name']?.message}
          />
        )}
      />
      <button disabled={!isValid} onClick={()=> handleNavigate('/controlled/step2')}>次へ</button>
    </>
  )
}