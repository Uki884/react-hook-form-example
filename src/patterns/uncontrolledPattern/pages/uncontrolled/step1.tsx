import { useUncontrolledForm } from '../../hooks/useUncontrolledForm'
import { InputText } from '../../components/inputText'

export const UncontrolledStep1 = () => {
  const { errors, handleNavigate, register, getValues, isValid } = useUncontrolledForm()

  return (
    <>
      <h1>Uncontrolled Form Step1</h1>
      <InputText
        type='text'
        {...register('email')}
        defaultValue={getValues('email')}
        error={errors['email']?.message}
      />
      <InputText
        type='text'
        {...register('name')}
        defaultValue={getValues('name')}
        error={errors['name']?.message}
      />
      <button disabled={!isValid} onClick={()=> handleNavigate('/uncontrolled/step2')}>次へ</button>
    </>
  )
}