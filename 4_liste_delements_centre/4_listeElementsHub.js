const addElement = () => {
    let element = document.createElement('li')
    let elementListGrid = document.querySelector("#elementList_grid")
    elementListGrid.appendChild(element)


    element = document.createElement('li')
    let elementListFlex = document.querySelector("#elementList_flex")
    elementListFlex.appendChild(element)

    element = document.createElement('li')
    let elementListFlexCentered = document.querySelector("#elementList_flex_centered")
    elementListFlexCentered.appendChild(element)
}

const removeElement = () => {
    let elementListGrid = document.querySelector("#elementList_grid")
    elementListGrid.removeChild(elementListGrid.lastElementChild)
    
    let elementListFlex = document.querySelector("#elementList_flex")
    elementListFlex.removeChild(elementListFlex.lastElementChild)
    
    let elementListFlexCentered = document.querySelector("#elementList_flex_centered")
    elementListFlexCentered.removeChild(elementListFlexCentered.lastElementChild)
}