export default function platzom(palabra) {
    let translation = palabra;
    if (palabra.toLowerCase().endsWith('ar')) {
        translation = palabra.slice(0, -2)
    }
    if (palabra.toLowerCase().startsWith('z')) {
        translation += 'pe'
    }
    const tamaño = translation.length
    if (tamaño >= 10) {
        const primera = translation.slice(0, Math.round(tamaño / 2))
        const segunda = translation.slice(Math.round(tamaño / 2))
        translation = `${primera}-${segunda}`
    }
    const reverse = (palabra) => palabra.split('').reverse().join('')

    function minMay(palabra) {
        const length = palabra.length
        let translation = ''
        let capitalize = true
        for (let i = 0; i < length; i++) {
            const element = palabra.charAt(i);
            translation += capitalize ? element.toUpperCase() : element.toLowerCase()
            capitalize = !capitalize;
        }
        return translation;
    }

    if (palabra == reverse(palabra)) {
        return minMay(palabra)
    }
    return translation
}