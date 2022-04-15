export const randomColor = (min, max, opacity) => {
    const red = Math.round(Math.random() * (max - min) + min);
    const green = Math.round(Math.random() * (max - min) + min);
    const blue = Math.round(Math.random() * (max - min) + min);
    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}

export const shuffle = (array) => {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    return array
}