import {
  AddIcon,
  CalendarIcon,
  ListIcon,
  WorkersIcon,
  CommittionIcon,
  SetIcon,
  UserIcon,
  IconReport
} from '../../common/iconsLib'

import './Aside.css'

function Aside() {
  const iconSize = 36

  return (
    <div className="w-40 h-screen py-5 bg-blue-700 text-white flex flex-col gap-10 items-center">
      <ul p-1>
        <li id="calenderView" className="asideItem bg-teal-600 border-2 rounded-2xl p-2">
          <AddIcon size={iconSize} />
          <p className="asideItemDescr">Добавить</p>
        </li>

        <li id="calenderView" className="asideItem">
          <CalendarIcon size={iconSize} />
          <p className="asideItemDescr">Календарь</p>
        </li>

        <li id="listView" className="asideItem">
          <ListIcon size={iconSize} />
          <p className="asideItemDescr">Список</p>
        </li>

        <li id="builder" className="asideItem">
          <WorkersIcon size={iconSize} />
          <p className="asideItemDescr">Подрядчики</p>
        </li>

        <li id="committete" className="asideItem">
          <CommittionIcon size={iconSize} />
          <p className="asideItemDescr">Комиссия</p>
        </li>

        <li id="committete" className="asideItem">
          <IconReport size={iconSize} />
          <p className="asideItemDescr">Отчеты</p>
        </li>

        <li id="mainSet" className="asideItem">
          <SetIcon size={iconSize} />
          <p className="asideItemDescr">Настройки</p>
        </li>
      </ul>

      <div id="user" className="asideItem underline">
        <UserIcon size={iconSize} />
        <p className="asideItemDescr">Иванов И.И.</p>
      </div>
    </div>
  )
}

export default Aside
