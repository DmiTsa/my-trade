import { useForm } from 'react-hook-form'

function AddLot() {
  //getValues, watch следить за значениями в полях во время ввода
  const { register, handleSubmit, formState, reset, setValue } = useForm({ mode: 'onChange' })

  const addLotHandler = (data) => {
    console.log(data)
    reset()
  }

  const lotError = formState.errors['lot']?.message

  // setValue('lot', 'testvalue')

  return (
    <div className="flex flex-col border rounded p-2 bg-teal-600/30 my-2">
      <p className="pb-2">Новый лот:</p>
      <form className="flex flex-wrap gap-2" onSubmit={handleSubmit(addLotHandler)}>
        <input
          {...register('lot', { required: 'Обязательное поле' })}
          className="inputText w-300"
          type="text"
          placeholder="Название лота"
          title="Название лота"
        />
        {/* {lotError && <p>{lotError}</p>} */}

        <input
          {...register('lot', { required: 'Обязательное поле' })}
          className="inputText w-18"
          type="number"
          step="0.1"
          placeholder="ПОС"
        />

        <input type="number" step="0.01" placeholder="Стоимость лота" />

        <button type="submit">Сохранить</button>
      </form>
    </div>
  )
}

export default AddLot
