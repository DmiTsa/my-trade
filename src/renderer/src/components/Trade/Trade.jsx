import { Lot } from '../Lot/Lot'
import './Trade.css'
import { EditIcon } from '../../assets/icons/EditIcon'
import { SetIcon } from '../../assets/icons/SetIcon'
import { DeleteIcon } from '../../assets/icons/DeleteIcon'

function Trade() {
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

  return (
    <div id="trade" className="p-2">
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
            <EditIcon size={6} />
          </button>

          <button
            id="setTrade"
            className="border-2 rounded-2xl p-3 mx-1 hover:bg-gray-400 cursor-pointer hover:border-gray-500"
          >
            <SetIcon size={6} />
          </button>

          <button
            id="deleteTrade"
            className="border-2 rounded-2xl p-3 mx-1 hover:bg-red-300 cursor-pointer hover:border-red-500"
          >
            <DeleteIcon size={6} />
          </button>
        </div>
      </div>

      <div id="stageInfo" className="py-4">
        <div className="flex gap-1">
          <div id="stageItem" className="stageInfoItem bg-blue-400 activeStageInfo">
            <p>Подготовка</p>
            <div id="stageOptions" className="flex gap-2">
              <button className="flex gap-2 items-center text-sm cursor-pointer hover:underline py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                  />
                </svg>
                Приглашение
              </button>

              <button className="flex gap-2 items-center text-sm cursor-pointer hover:underline py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                Опубликовать
              </button>

              <button className="flex gap-2 items-center text-sm cursor-pointer hover:underline py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                Пригласить
              </button>
            </div>
          </div>

          <div className="stageInfoItem bg-yellow-300 uncomplete">
            Прием предложений и вскрытие конвертов
          </div>
          <div className="stageInfoItem bg-yellow-300 uncomplete">Допуск</div>
          <div className="stageInfoItem bg-green-400 uncomplete">Снижение</div>
          <div className="stageInfoItem bg-green-400 uncomplete">Закрытие(договор)</div>
          <div className="stageInfoItem bg-gray-400 uncomplete">Оформление</div>
        </div>
      </div>

      <div id="lots">
        <p className="h3 font-bold">Лоты для торгов:</p>

        <Lot lot={lot1} />
        <Lot lot={lot2} />
      </div>

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
