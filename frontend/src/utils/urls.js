export const domain = process.env.REACT_APP_BASE_URL || `${window.location.protocol}//${window.location.hostname}`
export const TODOS = `${domain}todos` // GET, POST

export const TODO = `${domain}todo/id` // PUT, DELETE