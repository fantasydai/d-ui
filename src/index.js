// Vue Components
import Button from '../packages/button/index'
import {ListItem, List} from '../packages/list/index'
import CheckboxItem from '../packages/checkbox/index'
import CheckList from '../packages/checklist/index'
import Switch from '../packages/switch/index'
import Drawer from '../packages/drawer/index'
import Navbar from '../packages/navbar/index'
import Popover from '../packages/popover/index'
import Badge from '../packages/badge/index'
import PickerView from '../packages/pickerView/index'
// JS Components
import Toast from '../packages/toast/index'
import Modal from '../packages/modal/index'
import ActionSheet from '../packages/actionSheet/index'

import './assets/icon/iconfont.css'

const version = '0.1.0'

const install = function (Vue) {
  if (install.installed) {
    return false
  }
  Vue.component(Button.name, Button)
  Vue.component(ListItem.name, ListItem)
  Vue.component(List.name, List)
  Vue.component(CheckboxItem.name, CheckboxItem)
  Vue.component(CheckList.name, CheckList)
  Vue.component(Switch.name, Switch)
  Vue.component(Drawer.name, Drawer)
  Vue.component(Navbar.name, Navbar)
  Vue.component(Popover.name, Popover)
  Vue.component(Badge.name, Badge)
  Vue.component(PickerView.name, PickerView)

  Vue.$Toast = Vue.prototype.$Toast = Toast
  Vue.$Modal = Vue.prototype.$Modal = Modal
  Vue.$ActionSheet = Vue.prototype.$ActionSheet = ActionSheet
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  version,
  Button,
  ListItem
}
