export const useControllerStore = defineStore('controller', () => {
    //Valores Privados
    const states = ref({
      //z - index 9999
      showSearch:false,
      test: false
    })

    //Getters
    
    //Actions
    function alternateSearch() {
      states.value.showSearch = !states.value.showSearch
    }

    function clear() {
      if(states.value.showSearch === true) {states.value.showSearch = false; return}
      if(states.value.test === true) {states.value.test = false; return}
    }

  
    return { states, alternateSearch, clear }
  })