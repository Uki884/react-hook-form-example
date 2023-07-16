import { useUncontrolledForm } from '../../hooks/useUncontrolledForm'
import { InputText } from '../../components/inputText'

export const UncontrolledStep2 = () => {
  const {
    errors,
    handleNavigate,
    getValues,
    register,
    trigger
  } = useUncontrolledForm()

  const handleMove = async (path: string) => {
    const result = await trigger('name')
    if (!result) return;
    handleNavigate(path)
  }

  return (
    <>
      <h1>Uncontrolled Form Step2</h1>
      名前
      <InputText
        type='text'
        {...register('name')}
        error={errors['name']?.message}
        defaultValue={getValues('name')}
      />
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
        <button disabled={!!errors.name} onClick={() => void handleMove('/uncontrolled/step1')}>戻る</button>
        <button disabled={!!errors.name} onClick={() => void handleMove('/uncontrolled/step3')}>次へ</button>
      </div>
    </>
  )
}