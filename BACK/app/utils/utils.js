module.exports = {
    removeAccents: (str) => {
        newString = str.normalize("NFD").replace(/\p{Diacritic}/gu, "")
        return newString
    }
}