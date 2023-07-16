import { useUncontrolledForm } from '../../hooks/useUncontrolledForm'
import { InputText } from '../../components/inputText'

export const UncontrolledStep1 = () => {
  const { errors, handleNavigate, register, getValues, trigger } = useUncontrolledForm()

  const handleMove = async (path: string) => {
    const result = await trigger('email')
    if (!result) return;
    handleNavigate(path)
  }

  return (
    <>
      <h1>Uncontrolled Form Step1</h1>
      メールアドレス
      <InputText
        type='text'
        {...register('email')}
        defaultValue={getValues('email')}
        error={errors['email']?.message}
      />
      <button disabled={!!errors.email} onClick={()=> void handleMove('/uncontrolled/step2')}>次へ</button>
    </>
  )
}