import { TrophyIcon, EditIcon, DeleteIcon } from '../../../common/iconsLib'

function Lot({ lot }) {
  const { number, lotName, cost, startBuild, endBuild, buildTime, okrb } = lot
  //   console.log(number, lotName, cost, startBuild, endBuild, buildTime, okrb)

  return (
    <div className="flex border rounded p-1 my-1 relative">
      <p id="nameLot" className="mx-2 font-bold">
        {`Лот №${number}`}
      </p>

      <div id="lotInfo" className="flex flex-col">
        <p className="underline">{lotName}</p>

        <p className="flex">
          {`Стоимость - ${cost} BYN., строительство - ${startBuild} - ${endBuild}, ПОС - ${buildTime} мес.`}
        </p>

        {/* <ul className="flex">
        <li>Победитель</li>
        <li>Цена</li>
        <li>Снижение %</li>
        <li>Снижение руб</li>
      </ul> */}
      </div>

      <div id="buttonsLot" className="absolute top-0 right-0 m-1 flex gap-2">
        <button>
          <TrophyIcon size={16} />
        </button>

        <button>
          <EditIcon size={16} />
        </button>

        <button>
          <DeleteIcon size={16} />
        </button>
      </div>
    </div>
  )
}

export default Lot
