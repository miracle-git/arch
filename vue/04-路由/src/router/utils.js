export const getHashPath = () => window.location.hash.slice(1)
export const getRouteMap = (routes) => routes.reduce((map, route) => ({ ...map, [route.path]: route }), {})
