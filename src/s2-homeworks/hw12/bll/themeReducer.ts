
export type InitialStateType={
    themeId: string
}
const initState = {
    themeId: '1',
}


export const themeReducer = (state:InitialStateType = initState, action: ChangeThemeIdType): InitialStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        // дописать

        default:
            return state
    }
}
type ChangeThemeIdType = {
    type: 'SET_THEME_ID'
    id: string
}
export const changeThemeId = (id: string): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
