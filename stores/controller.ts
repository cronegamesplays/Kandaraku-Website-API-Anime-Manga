
export const useControllerStore = defineStore('controller', () => {
  const showSearch = ref(false)
  let awaitSearch = false
  
  //Getters
  //Actions
  function stopScroll() {
    const X = window.scrollX
    const Y = window.scrollY
    window.onscroll = ()=>{
      window.scrollTo({
          behavior: 'instant',
          left:X,
          top:Y
      })
    }
  }
  function letScroll() {
    window.onscroll = ()=>{}
  }
  function resetScroll(){
    window.scrollTo({
      behavior: 'instant',
      left:0,
      top:0
    })
  }

  function alternateSearch() {
    if(awaitSearch)return
    showSearch.value = !showSearch.value
    awaitSearch = true
    setTimeout(() => {
      awaitSearch = false              
    }, 350);

    if(showSearch.value){
      resetScroll()
      stopScroll()
    }
    else{
      letScroll()
    }
  }


  function clear() {
    // z-index 9050
    if(showSearch.value === true) {alternateSearch(); return}
  }


  return { 
    showSearch,
    stopScroll,
    letScroll,
    alternateSearch,
    clear,
  }
})