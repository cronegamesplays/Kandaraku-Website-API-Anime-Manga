export const useControllerStore = defineStore('controller', () => {
  const showSearch = ref(false)
  let awaitSearch = false

  //Getters
  
  //Actions
  function alternateSearch() {
    if(awaitSearch)return
    showSearch.value = !showSearch.value
    awaitSearch = true
    setTimeout(() => {
      awaitSearch = false              
    }, 700);

  }

  function clear() {
    // z-index 9050
    if(showSearch.value === true) {showSearch.value = false; return}
  }


  return { 
    showSearch,
    alternateSearch,
    clear,
  }
})