blocks.onBlockPlaced(STONE, function () {
    blocks.place(STONE, pos(132, 12, 34))
})
player.onChat("run", function (LARI, num2) {
    gameplay.title(mobs.target(NEAREST_PLAYER), "", "")
})
player.onTellCommand("jump", function () {
    player.runChatCommandWithArguments("jump", "")
})
mobs.onMobKilled(ALLAY, function () {
    mobs.kill(
    mobs.target(RANDOM_PLAYER)
    )
})
blocks.place(GRASS, pos(10, 15, 11))
