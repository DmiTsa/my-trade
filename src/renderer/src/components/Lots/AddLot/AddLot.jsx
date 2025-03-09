import { useForm } from 'react-hook-form'

function AddLot() {
  //getValues, watch следить за значениями в полях во время ввода
  const { register, handleSubmit, formState, reset, setValue } = useForm({ mode: 'onChange' })

  const addLotHandler = (data) => {
    console.log(data)
    reset()
  }

  const lotError = formState.errors['lot']?.message

  setValue('lot', 'testvalue')

  return (
    <form
      onSubmit={handleSubmit(addLotHandler)}
      className="flex border rounded p-1 bg-teal-600/30 my-2"
    >
      <input
        type="text"
        placeholder="Название лота"
        {...register('lot', { required: 'Обязательное поле' })}
      />
      {lotError && <p>{lotError}</p>}
      <input type="number" step="0.01" placeholder="Стоимость лота" />
      <button type="submit">Сохранить</button>
    </form>
  )
}

export default AddLot
