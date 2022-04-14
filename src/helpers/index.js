export const randomColor = (min, max, opacity) => {
    const red = Math.round(Math.random() * (max - min) + min);
    const green = Math.round(Math.random() * (max - min) + min);
    const blue = Math.round(Math.random() * (max - min) + min);
    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}