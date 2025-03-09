import Lots from '../Lots/Lots'
import { Stages } from '../Stages/Stages'
import { SetIcon, EditIcon, DeleteIcon, AddIcon } from '../../common/iconsLib'
import './Trade.css'

function Trade() {
  return (
    <div className="bg-blue-700/20 flex flex-1 flex-col p-4">
      <div id="tradeInfo" className="flex items-center">
        <div id="info" className="flex flex-1 flex-col">
          <h2 className="h2 font-bold">
            Торги № ВФ/СМР/Связь/23/2025 (Переговоры со снижением) IceTrade №2025-3451212
          </h2>
          <h3 className="h3">
            Подача предложений: 02.03.2025 - 10.03.2025, вскрытие конвертов с предложениями:
            10.03.2025, процедура снижения: 12.03.2025
          </h3>
        </div>

        <div id="infoBtn" className="mr-4 ml-12">
          <button
            id="editTrade"
            className="border-2 rounded-2xl p-3 mx-1 hover:bg-yellow-300 cursor-pointer hover:border-yellow-500"
          >
            <EditIcon size={28} />
          </button>

          <button
            id="setTrade"
            className="border-2 rounded-2xl p-3 mx-1 hover:bg-gray-400 cursor-pointer hover:border-gray-500"
          >
            <SetIcon size={28} />
          </button>

          <button
            id="deleteTrade"
            className="border-2 rounded-2xl p-3 mx-1 hover:bg-red-300 cursor-pointer hover:border-red-500"
          >
            <DeleteIcon size={28} />
          </button>
        </div>
      </div>

      <Stages />

      <Lots />

      <div id="offers">
        <p className="h3 font-bold">Предложения подрядчиков:</p>
      </div>

      <p>предложения</p>
      <p>панель протоколов</p>

      <p>приказ</p>
      <p>комиссия</p>
    </div>
  )
}

export default Trade
