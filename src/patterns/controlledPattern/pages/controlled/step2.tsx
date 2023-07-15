import { useControlledForm } from '../../hooks/useControlledForm'
import { InputText } from '../../components/inputText'
import { Controller } from 'react-hook-form'

export const ControlledStep2 = () => {
  const {
    handleSubmit,
    errors,
    userFormValue,
    setUserFormValue,
    handleNavigate,
    getValues,
    register,
    isValid,
    control
  } = useControlledForm()

  const submit = (data: any) => {
    console.log('submit', data)
    setUserFormValue({ ...userFormValue })
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(submit)}>
      <h1>Controlled Form Step2</h1>
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
        render={({ field }) => (
          <>
            <InputText
            { ...field }
            type='text'
            error={errors['name']?.message}
            />
          </>
        )}
      />
      <div>
        <button type="submit" disabled={!isValid}>登録</button>
      </div>
      <div>
        <button disabled={!isValid} onClick={() => handleNavigate('/controlled/step1')}>戻る</button>
      </div>
    </form>
  )
}