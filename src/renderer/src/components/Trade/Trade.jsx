// import './assets/main.css'
import './Trade.css'

function Trade() {
  return (
    <div id="trade" className="p-2">
      <div id="tradeInfo" className="flex items-center">
        <div id="info" className="flex flex-1 flex-col">
          <h2 className="text-lg font-bold">
            Торги № ВФ/СМР/Связь/23/2025 (Переговоры со снижением) IceTrade №2025-3451212
          </h2>
          <h3>
            Подача предложений: 02.03.2025 - 10.03.2025, вскрытие конвертов с предложениями:
            10.03.2025, процедура снижения: 12.03.2025
          </h3>
        </div>

        <div id="infoBtn" className="mr-4 ml-12">
          <button
            id="editTrade"
            className="border-2 rounded-2xl p-3 mx-1 hover:bg-yellow-300 cursor-pointer hover:border-yellow-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>

          <button
            id="setTrade"
            className="border-2 rounded-2xl p-3 mx-1 hover:bg-gray-400 cursor-pointer hover:border-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>

          <button
            id="deleteTrade"
            className="border-2 rounded-2xl p-3 mx-1 hover:bg-red-300 cursor-pointer hover:border-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div id="stageInfo" className="py-4">
        <ul className="flex gap-1">
          <li className="stageInfoItem bg-blue-400">Подготовка</li>
          <li className="stageInfoItem bg-yellow-300 activeStageInfo">Прием предложений</li>
          <li className="stageInfoItem bg-yellow-300 uncomplete">Допуск</li>
          <li className="stageInfoItem  bg-green-400 uncomplete">Снижение</li>
          <li className="stageInfoItem  bg-green-400 uncomplete">Закрытие(договор)</li>
          <li className="stageInfoItem bg-gray-400 uncomplete">Оформление</li>
        </ul>
      </div>

      <p>приказ</p>
      <p>комиссия</p>
      <p>лоты</p>
      <p>предложения</p>
      <p>панель протоколов</p>
    </div>
  )
}

export default Trade
