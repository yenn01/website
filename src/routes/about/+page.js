export async function load({fetch}) {
    const res = await fetch(`/api/skillLevels`)

    //console.log(values)
    return   res.json()
}