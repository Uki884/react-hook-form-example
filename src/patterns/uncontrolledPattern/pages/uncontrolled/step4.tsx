import { useUncontrolledForm } from '../../hooks/useUncontrolledForm'
import { InputText } from '../../components/inputText'

export const UncontrolledStep4 = () => {
  const {
    handleSubmit,
    userFormValue,
    setUserFormValue,
    handleNavigate,
    getValues,
    isValid
  } = useUncontrolledForm()

  const submit = (data: any) => {
    console.log('submit', data)
    setUserFormValue({ ...userFormValue })
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(submit)}>
      <h1>Uncontrolled Form Step4</h1>
      { JSON.stringify(getValues()) }
      <div>
        <button type="submit" disabled={!isValid}>登録</button>
      </div>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
        <button disabled={!isValid} onClick={() => handleNavigate('/uncontrolled/step3')}>戻る</button>
      </div>
    </form>
  )
}