import Lot from './Lot/Lot'
import AddLot from './AddLot/AddLot'
import { AddIcon } from '../../common/iconsLib'
import { useState } from 'react'

const lot1 = {
  number: 1,
  lotName:
    'Реконструкция сети связи в поселки Нижние Пиздюки. Возведение строительных конструкция, прокладка сети ХПОН',
  cost: 2993904.02,
  startBuild: '12.03.2025',
  endBuild: '30.12.2015',
  buildTime: 12,
  okrb: '42.22.22'
}

const lot2 = {
  number: 2,
  lotName: 'Реконструкция сети связи в Большом Городе. Строительство канализации и сетей>',
  cost: 302003.02,
  startBuild: '12.03.2025',
  endBuild: '30.12.2015',
  buildTime: 3,
  okrb: '42.22.22'
}

function Lots() {
  const [lots, setLots] = useState([lot1, lot2])

  return (
    <div>
      <p className="h3 font-bold flex items-center gap-2">
        Лоты для торгов
        <div id="addLot" className="hoverTealColor cursor-pointer">
          <AddIcon size={18} />
        </div>
      </p>
      <AddLot />

      {lots.map((el) => (
        <Lot lot={el} />
      ))}
    </div>
  )
}
export default Lots
