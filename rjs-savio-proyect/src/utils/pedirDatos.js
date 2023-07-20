import MOCK_DATA from "../data/MOCK_data.json"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve (MOCK_DATA)
        }, 500)
    })
}