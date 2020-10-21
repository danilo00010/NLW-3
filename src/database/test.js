const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6455874",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "99999999999",
        images: [
            "https://source.unsplash.com/random",

            "https://source.unsplash.com/random"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"
    })

    // consultar dados da tabela
    // const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    // console.log(selectedOrphanages)

    // // consultar somente 1 orphanato, pelo id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE name = "Lar dos meninos"')
    // console.log(orphanage)

    // deletar dado da tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})