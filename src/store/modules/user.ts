import { defineStore } from 'pinia'

export interface UserStoreState {
  token: string | null
  tokenSetTime: number | null
}

export const useUserStore = defineStore('user', {
  state: (): UserStoreState => {
    return {
      token: null,
      tokenSetTime: null,
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
      this.tokenSetTime = new Date().getTime()
    },
  },
  persist: {
    key: 'HX_USER',
  },
})
