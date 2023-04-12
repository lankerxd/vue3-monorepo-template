import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const piniaInstance = createPinia()
piniaInstance.use(piniaPluginPersistedstate)

export default piniaInstance
