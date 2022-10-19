export const catalog = (harvestFoodArray) => {
    let htmlRepresentation = '<section class="foods">'
    for (const food of harvestFoodArray) {
        htmlRepresentation += `<div class="plant">${food.type}</div>`
    }
    htmlRepresentation += "</section>"
    return htmlRepresentation
}