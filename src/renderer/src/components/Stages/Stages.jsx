import { DocIcon, GlobeIcon } from '../../common/iconsLib'

export function Stages() {
  return (
    <div className="py-4">
      <div className="flex gap-1">
        <div id="stageItem" className="stageInfoItem bg-blue-400 activeStageInfo">
          <p>Подготовка</p>
          <div id="stageOptions" className="flex gap-2">
            <button className="flex gap-1 items-center text-sm cursor-pointer hover:underline py-1">
              <DocIcon size={14} />
              Задание
            </button>

            <button className="flex gap-1 items-center text-sm cursor-pointer hover:underline py-1">
              <DocIcon size={14} />
              Приглашение
            </button>

            <button className="flex gap-1 items-center text-sm cursor-pointer hover:underline py-1">
              <GlobeIcon size={14} />
              Опубликовать
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
  )
}
