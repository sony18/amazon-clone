
// ======================== Format date as dd/mm/yyyy ============================
export const useFormatDate = (currentdate) => {
    let date = new Date(currentdate)
    let day = date.getDate();
    let month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    let monthIndex = date.getMonth()
    let year = date.getFullYear()
    let formatedDate = `${day}/${month[monthIndex]}/${year}`
    return formatedDate
}