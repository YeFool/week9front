export const writeCookie = (key, value, days) => {
    let date = new Date()
    days = days || 365

    date.setDate(date.getDate() + days)
    
    let cookie = document.cookie = `${key}=${value}; expires=${date.toGMTString()}; path=/`
    
    // key + "=" + value + "; expires=" + date.toGMTString() + "; path=/"
     
     console.log(cookie)

}

export const getCookie = (cookieName) => {
    const re = new RegExp(`(?<=${cookieName}=)[^;]*`)  
    try{
        let cookie = document.cookie.match(re)[0]
        return cookie
    } catch (error) {
        console.log(`No cookie found`)
        return false
    }
}