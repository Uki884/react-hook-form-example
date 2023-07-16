import { useUncontrolledForm } from '../../hooks/useUncontrolledForm'
import { InputText } from '../../components/inputText'

export const UncontrolledStep3 = () => {
  const {
    errors,
    handleNavigate,
    getValues,
    register,
    trigger
  } = useUncontrolledForm()

  const handleMove = async (path: string) => {
    const result = await trigger('corporation.name')
    if (!result) return;
    handleNavigate(path)
  }

  return (
    <>
      <h1>Uncontrolled Form Step3</h1>
      会社名
      <InputText
        type='text'
        {...register('corporation.name')}
        error={errors['corporation']?.name?.message}
        defaultValue={getValues('corporation.name')}
      />
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
        <button disabled={!!errors.corporation?.name} onClick={() => void handleMove('/uncontrolled/step2')}>戻る</button>
        <button disabled={!!errors.corporation?.name} onClick={() => void handleMove('/uncontrolled/step4')}>次へ</button>
          </div>
    </>
  )
}