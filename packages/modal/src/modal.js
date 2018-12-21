import Vue from 'vue'
import ModalComponent from './Modal.vue'

const defaultPorps = {
  title: '提示',
  message: '',
  visible: false,
  closable: false,
  maskClosable: false,
  transparent: false,
  onClose: () => {}
}

const ModalConstructor = Vue.extend(ModalComponent)

const modalQueue = []

const init = (constructor, propsData) => {
  if (constructor) {
    return new constructor({
      propsData,
      el: document.createElement('div')
    })
    // new constructor({
    //   ...props
    // }).$mount(document.createElement('div'))
  }
}

const getExistModal = (props) => {
  let modal = modalQueue[0]
  for (const prop in props) {
    if (props.hasOwnProperty(prop)) {
      modal[prop] = props[prop]
    }
  }
  return modal
}

const Modal = {
  alert (options = {}) {
    let lastOptions = Object.assign({ footer: [{ text: '我知道了' }] }, defaultPorps, options)
    let modal
    if (modalQueue.length) {
      modal = getExistModal(lastOptions)
    } else {
      modal = init(ModalConstructor, lastOptions)
      modalQueue.push(modal)
      document.body.appendChild(modal.$el)
    }
    modal.visible = true
  },
  confirm (options = {}) {
    let lastOptions = Object.assign({ footer: [{ text: '取消' }, { text: '确定' }] }, defaultPorps, options)
    if (lastOptions.footer.length && lastOptions.footer.length < 2) {
      console.error('The footer prop of Confirm Modal should has two members at least ')
      return
    }
    let modal
    if (modalQueue.length) {
      modal = getExistModal(lastOptions)
    } else {
      modal = init(ModalConstructor, lastOptions)
      modalQueue.push(modal)
      document.body.appendChild(modal.$el)
    }
    modal.visible = true
  }

}

export default Modal