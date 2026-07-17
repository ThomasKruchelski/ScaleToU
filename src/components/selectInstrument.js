export default function selectInstrument(instrument) {
    

    if(instrument == 'bass'){
        const selectString1 = document.querySelectorAll(".th-1");

        selectString1.forEach((select) => {
            select.classList.add("hidden")
        })

        const selectString2 = document.querySelectorAll(".th-2");

        selectString2.forEach((select) => {
            select.classList.add("hidden")
        })

        const selectString7 = document.querySelectorAll(".th-7");

        selectString7.forEach((select) => {
            select.classList.add("hidden")
        })
    }
        
    const instrumentPopUp = document.querySelector(".instrument-popup")
    instrumentPopUp.classList.add('hidden')
    
    
  }