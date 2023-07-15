import { useUncontrolledForm } from '../../hooks/useUncontrolledForm'
import { InputText } from '../../components/inputText'

export const UncontrolledStep2 = () => {
  const {
    handleSubmit,
    errors,
    userFormValue,
    setUserFormValue,
    handleNavigate,
    getValues,
    register,
    isValid
  } = useUncontrolledForm()

  const submit = (data: any) => {
    console.log('submit', data)
    setUserFormValue({ ...userFormValue })
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(submit)}>
      <h1>Uncontrolled Form</h1>
      メールアドレス
      <InputText
        type='text'
        {...register('email')}
        error={errors['email']?.message}
        defaultValue={getValues('email')}
      />
      名前
      <InputText
        type='text'
        {...register('name')}
        error={errors['name']?.message}
        defaultValue={getValues('name')}
      />
      <div>
        <button type="submit" disabled={!isValid}>登録</button>
      </div>
      <div>
        <button disabled={!isValid} onClick={() => handleNavigate('/uncontrolled/step1')}>戻る</button>
      </div>
    </form>
  )
}