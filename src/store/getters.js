const getters = {
    token: state => state.userauth.token,
    name: state => state.userauth.name,
    roles: state => state.userauth.roles,
    dept: state => state.userauth.dept,
    id: state => state.userauth.id
}
export default getters
