import {
  CalendarIcon,
  ListIcon,
  WorkersIcon,
  CommittionIcon,
  SetIcon,
  UserIcon
} from '../../common/iconsLib'

import './Aside.css'

export function Aside() {
  const iconSize = 36

  return (
    <>
      <ul p-1>
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

        <li id="mainSet" className="asideItem">
          <SetIcon size={iconSize} />
          <p className="asideItemDescr">Настройки</p>
        </li>
      </ul>

      <div id="user" className="asideItem underline">
        <UserIcon size={iconSize} />
        <p className="asideItemDescr">Иванов И.И.</p>
      </div>
    </>
  )
}
