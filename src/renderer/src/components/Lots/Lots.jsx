import Lot from './Lot/Lot'
import AddLot from './AddLot/AddLot'
import { AddIcon } from '../../common/iconsLib'

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
  return (
    <div>
      <p className="h3 font-bold flex items-center gap-2">
        Лоты для торгов
        <div id="addLot" className="hoverTealColor cursor-pointer">
          <AddIcon size={18} />
        </div>
      </p>

      <AddLot />

      <Lot lot={lot1} />
      <Lot lot={lot2} />
    </div>
  )
}
export default Lots
