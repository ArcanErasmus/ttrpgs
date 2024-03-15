output_html = `<p>${token.name}</p>`

max_health = actor.system.health.max
current_health = actor.system.health.value



if (max_health > current_health) {
    output_html +=
    `<p>Bashing: ${actor.system.health.bashing}</p>
    <p>Lethal: ${actor.system.health.lethal}</p>
    <p>Aggravated: ${actor.system.health.aggravated}</p>
    <p>Value: ${actor.system.health.value}</p>
    <p>Max: ${actor.system.health.max}</p>`
} else output_html += ` is at full health.`

ChatMessage.create({
    user: game.user._id,
    speaker: ChatMessage.getSpeaker({token: actor}),
    content: output_html
});