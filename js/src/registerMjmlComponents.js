import { registerComponent } from 'mjml-core'
import MjBasicComponent from './components/MjBasicComponent'
import MjImageText from './components/MjImageText'
import MjLayout from './components/MjLayout'

function init() {
    registerComponent(MjBasicComponent)
    registerComponent(MjImageText)
    registerComponent(MjLayout)
}

export default {
    init,
};
