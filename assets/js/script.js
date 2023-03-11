const inputContainer = document.querySelector('input')
const rootElement = document.documentElement

const lightTheme = {
    '--background-color': 'white',
    '--text-color': '#1a1a1a',
}

const darkTheme = {
    '--background-color': 'black',
    '--text-color': '#FFF',
}

inputContainer.addEventListener('change', function() {
    const isChecked = inputContainer.checked
    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
})

function changeTheme(theme){
    for (let [property, value] of Object.entries(theme)) {
        changeProperty(property, value)
    }
}

function changeProperty(property, value){
    rootElement.style.setProperty(property, value)
}