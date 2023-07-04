const users = [
    {
        id: 22,
        nombre: "ricaela",
        rol: "jefa"
    },
    {
        id: 23,
        nombre: "jose",
        rol: "empleado"
    },
    {
        id: 24,
        nombre: "roman",
        rol: "tutor"
    },
]

const resultado = users.find((e) => e.nombre === "micaela" || console.log ("no se ha encontrado el resultado"));
console.log (resultado)