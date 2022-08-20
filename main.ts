namespace SpriteKind {
    export const Background = SpriteKind.create()
    export const Game_Title = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game == 1) {
        if (Mode == 3) {
            Mode = 1
            Choose_Mode()
        } else {
        	
        }
    } else {
    	
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game == 1) {
        if (Play == 1) {
            if (Mode_Choosing == 0) {
                Mode = 1
                Choose_Mode()
                Mode_Choosing = 1
            }
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game == 1) {
        if (Play == 0) {
            Play = 1
            Choose_Mode()
        } else if (Play == 1) {
            if (Mode == 1) {
                sprites.destroyAllSpritesOfKind(SpriteKind.Game_Title)
                Mode = 4
                C_Name = game.askForString("What is your character's name?")
                game.showLongText("What gender is your Character?", DialogLayout.Top)
                story.showPlayerChoices("Male", "Female")
                if (story.checkLastAnswer("Male")) {
                    game.showLongText("What is your Character?", DialogLayout.Top)
                    story.showPlayerChoices("Barbarian", "Wizard", "Skeleton", "Paladin, Dragon, Archer, or Rogue")
                    if (story.checkLastAnswer("Barbarian")) {
                        PCC = 1
                    } else if (story.checkLastAnswer("Wizard")) {
                        PCC = 2
                        game.showLongText("What type of wizard?", DialogLayout.Top)
                        story.showPlayerChoices("Fire", "Water", "Ice", "Lightning or Poison")
                        if (story.checkLastAnswer("Fire")) {
                            PCT = 1
                        } else if (story.checkLastAnswer("Water")) {
                            PCT = 2
                        } else if (story.checkLastAnswer("Ice")) {
                            PCT = 3
                        } else if (story.checkLastAnswer("Lightning or Poison")) {
                            story.showPlayerChoices("Lightning", "Poison")
                            if (story.checkLastAnswer("Lightning")) {
                                PCT = 4
                            } else if (story.checkLastAnswer("Poison")) {
                                PCT = 5
                            }
                        }
                    } else if (story.checkLastAnswer("Skeleton")) {
                        PCC = 3
                    } else if (story.checkLastAnswer("Paladin, Dragon, Archer, or Rogue")) {
                        story.showPlayerChoices("Paladin", "Dragon", "Archer", "Rogue")
                        if (story.checkLastAnswer("Paladin")) {
                            PCC = 4
                        } else if (story.checkLastAnswer("Dragon")) {
                            PCC = 5
                            game.showLongText("What type of dragon?", DialogLayout.Top)
                            story.showPlayerChoices("Fire", "Water", "Ice", "Lightning or Poison")
                            if (story.checkLastAnswer("Fire")) {
                                PCT = 1
                            } else if (story.checkLastAnswer("Water")) {
                                PCT = 2
                            } else if (story.checkLastAnswer("Ice")) {
                                PCT = 3
                            } else if (story.checkLastAnswer("Lightning or Poison")) {
                                story.showPlayerChoices("Lightning", "Poison")
                                if (story.checkLastAnswer("Lightning")) {
                                    PCT = 4
                                } else if (story.checkLastAnswer("Poison")) {
                                    PCT = 5
                                }
                            }
                        } else if (story.checkLastAnswer("Archer")) {
                            PCC = 6
                        } else if (story.checkLastAnswer("Rogue")) {
                            PCC = 7
                        }
                    }
                } else if (story.checkLastAnswer("Female")) {
                    game.showLongText("What is your Character?", DialogLayout.Top)
                    story.showPlayerChoices("Barbarian", "Witch", "Skeleton", "Paladin, Dragon, Archer, or Rogue")
                    if (story.checkLastAnswer("Barbarian")) {
                        PCC = 1
                    } else if (story.checkLastAnswer("Witch")) {
                        PCC = 2
                        game.showLongText("What type of witch?", DialogLayout.Top)
                        story.showPlayerChoices("Fire", "Water", "Ice", "Lightning or Poison")
                        if (story.checkLastAnswer("Fire")) {
                            PCT = 1
                        } else if (story.checkLastAnswer("Water")) {
                            PCT = 2
                        } else if (story.checkLastAnswer("Ice")) {
                            PCT = 3
                        } else if (story.checkLastAnswer("Lightning or Poison")) {
                            story.showPlayerChoices("Lightning", "Poison")
                            if (story.checkLastAnswer("Lightning")) {
                                PCT = 4
                            } else if (story.checkLastAnswer("Poison")) {
                                PCT = 5
                            }
                        }
                    } else if (story.checkLastAnswer("Skeleton")) {
                        PCC = 3
                    } else if (story.checkLastAnswer("Paladin, Dragon, Archer, or Rogue")) {
                        story.showPlayerChoices("Paladin", "Dragon", "Archer", "Rogue")
                        if (story.checkLastAnswer("Paladin")) {
                            PCC = 4
                        } else if (story.checkLastAnswer("Dragon")) {
                            PCC = 5
                            game.showLongText("What type of dragon?", DialogLayout.Top)
                            story.showPlayerChoices("Fire", "Water", "Ice", "Lightning or Poison")
                            if (story.checkLastAnswer("Fire")) {
                                PCT = 1
                            } else if (story.checkLastAnswer("Water")) {
                                PCT = 2
                            } else if (story.checkLastAnswer("Ice")) {
                                PCT = 3
                            } else if (story.checkLastAnswer("Lightning or Poison")) {
                                story.showPlayerChoices("Lightning", "Poison")
                                if (story.checkLastAnswer("Lightning")) {
                                    PCT = 4
                                } else if (story.checkLastAnswer("Poison")) {
                                    PCT = 5
                                }
                            }
                        } else if (story.checkLastAnswer("Archer")) {
                            PCC = 6
                        } else if (story.checkLastAnswer("Rogue")) {
                            PCC = 7
                        }
                    }
                }
            } else if (Mode == 2) {
                sprites.destroyAllSpritesOfKind(SpriteKind.Game_Title)
            } else if (Mode == 3) {
                if (game.ask("Are you Sure you want to", "reset the game?")) {
                    game.reset()
                } else {
                	
                }
            }
        }
    } else {
    	
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game == 1) {
        if (Mode == 2) {
            Mode = 1
            Choose_Mode()
        } else {
        	
        }
    } else {
    	
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game == 1) {
        if (Mode == 1) {
            Mode = 2
            Choose_Mode()
        } else {
        	
        }
    } else {
    	
    }
})
function Game_Intro () {
    Title = 1
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . 1 1 1 1 . . . . . 1 1 1 . . 
        . . 1 1 1 1 1 . . . . 1 1 1 . . 
        . . 1 1 1 1 1 1 . . . 1 1 1 . . 
        . . 1 1 1 1 1 1 1 . . 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 . 1 1 1 . . 
        . . 1 1 1 . 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 . . 1 1 1 1 1 1 1 . . 
        . . 1 1 1 . . . 1 1 1 1 1 1 . . 
        . . 1 1 1 . . . . 1 1 1 1 1 . . 
        . . 1 1 1 . . . . . 1 1 1 1 . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Game_Title)
    scaling.scaleByPixels(mySprite, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    mySprite.setPosition(-25, -12)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 . . . . 1 1 1 1 . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . 1 1 1 1 . . . . 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Game_Title)
    scaling.scaleByPixels(mySprite2, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    mySprite2.setPosition(-25, 134)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . 1 1 1 1 . . . . . 1 1 1 . . 
        . . 1 1 1 1 1 . . . . 1 1 1 . . 
        . . 1 1 1 1 1 1 . . . 1 1 1 . . 
        . . 1 1 1 1 1 1 1 . . 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 . 1 1 1 . . 
        . . 1 1 1 . 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 . . 1 1 1 1 1 1 1 . . 
        . . 1 1 1 . . . 1 1 1 1 1 1 . . 
        . . 1 1 1 . . . . 1 1 1 1 1 . . 
        . . 1 1 1 . . . . . 1 1 1 1 . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Game_Title)
    scaling.scaleByPixels(mySprite3, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    mySprite3.setPosition(75, -12)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Game_Title)
    scaling.scaleByPixels(mySprite4, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    mySprite4.setPosition(170, -12)
    mySprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . 1 1 1 1 . . . . 1 1 1 1 . . 
        . . 1 1 1 1 1 . . 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 . 1 1 1 1 . 1 1 1 . . 
        . . 1 1 1 . . 1 1 . . 1 1 1 . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Game_Title)
    scaling.scaleByPixels(mySprite5, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    mySprite5.setPosition(170, 48)
    mySprite6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 . . . . . . . . . . . 
        . . 1 1 1 . . . . . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 . . . . . . . . . . . 
        . . 1 1 1 . . . . . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Game_Title)
    scaling.scaleByPixels(mySprite6, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    mySprite6.setPosition(170, 132)
    timer.after(4500, function () {
        Play_Button = 1
    })
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game == 1) {
        if (Mode == 1 || Mode == 2) {
            Mode = 3
            Choose_Mode()
        } else {
        	
        }
    } else {
    	
    }
})
function Choose_Mode () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Game_Title)
    Title = 0
    Play_Button = 0
    mySprite = sprites.create(img`
        ..........................................
        ..........................................
        ..111111..111111..111111..111111..11..11..
        ..111111..111111..111111..111111..11..11..
        ..11........11....11..11..11..11..11..11..
        ..11........11....11..11..11..11..11..11..
        ..111111....11....11..11..1111....111111..
        ..111111....11....11..11..1111....111111..
        ......11....11....11..11..11..11....11....
        ......11....11....11..11..11..11....11....
        ..111111....11....111111..11..11....11....
        ..111111....11....111111..11..11....11....
        ..........................................
        ..........................................
        `, SpriteKind.Game_Title)
    mySprite.x += -30
    mySprite2 = sprites.create(img`
        ..................................................
        ..................................................
        ..11..11..111111..111111..111111..11..11..111111..
        ..11..11..111111..111111..111111..11..11..111111..
        ..11..11..11......11..11..11......11..11..11......
        ..11..11..11......11..11..11......11..11..11......
        ..11..11..111111..1111....111111..11..11..111111..
        ..11..11..111111..1111....111111..11..11..111111..
        ..11..11..11......11..11......11..11..11......11..
        ..11..11..11......11..11......11..11..11......11..
        ....11....111111..11..11..111111..111111..111111..
        ....11....111111..11..11..111111..111111..111111..
        ..................................................
        ..................................................
        `, SpriteKind.Game_Title)
    mySprite2.x += 30
    mySprite3 = sprites.create(img`
        ..........................................
        ..........................................
        ..111111..111111..111111..111111..111111..
        ..111111..111111..111111..111111..111111..
        ..11..11..11......11......11........11....
        ..11..11..11......11......11........11....
        ..1111....111111..111111..111111....11....
        ..1111....111111..111111..111111....11....
        ..11..11..11..........11..11........11....
        ..11..11..11..........11..11........11....
        ..11..11..111111..111111..111111....11....
        ..11..11..111111..111111..111111....11....
        ..........................................
        ..........................................
        `, SpriteKind.Game_Title)
    mySprite3.y += 20
    if (Mode == 1) {
        mySprite3.setImage(img`
            ..........................................
            ..........................................
            ..111111..111111..111111..111111..111111..
            ..111111..111111..111111..111111..111111..
            ..11..11..11......11......11........11....
            ..11..11..11......11......11........11....
            ..1111....111111..111111..111111....11....
            ..1111....111111..111111..111111....11....
            ..11..11..11..........11..11........11....
            ..11..11..11..........11..11........11....
            ..11..11..111111..111111..111111....11....
            ..11..11..111111..111111..111111....11....
            ..........................................
            ..........................................
            `)
        mySprite2.setImage(img`
            ..................................................
            ..................................................
            ..11..11..111111..111111..111111..11..11..111111..
            ..11..11..111111..111111..111111..11..11..111111..
            ..11..11..11......11..11..11......11..11..11......
            ..11..11..11......11..11..11......11..11..11......
            ..11..11..111111..1111....111111..11..11..111111..
            ..11..11..111111..1111....111111..11..11..111111..
            ..11..11..11......11..11......11..11..11......11..
            ..11..11..11......11..11......11..11..11......11..
            ....11....111111..11..11..111111..111111..111111..
            ....11....111111..11..11..111111..111111..111111..
            ..................................................
            ..................................................
            `)
        mySprite.setImage(img`
            115555555555555555555555555555555555555555
            115555555555555555555555555555555555555554
            55ffffff22ffffff22ffffff22ffffff22ff22ff44
            55ffffff22ffffff22ffffff22ffffff22ff22ff44
            55ff22222222ff2222ff22ff22ff22ff22ff22ff44
            55ff22222222ff2222ff22ff22ff22ff22ff22ff44
            55ffffff2222ff2222ff22ff22ffff2222ffffff44
            55ffffff2222ff2222ff22ff22ffff2222ffffff44
            552222ff2222ff2222ff22ff22ff22ff2222ff2244
            552222ff2222ff2222ff22ff22ff22ff2222ff2244
            55ffffff2222ff2222ffffff22ff22ff2222ff2244
            55ffffff2222ff2222ffffff22ff22ff2222ff2244
            544444444444444444444444444444444444444422
            444444444444444444444444444444444444444422
            `)
    } else if (Mode == 2) {
        mySprite.setImage(img`
            ..........................................
            ..........................................
            ..111111..111111..111111..111111..11..11..
            ..111111..111111..111111..111111..11..11..
            ..11........11....11..11..11..11..11..11..
            ..11........11....11..11..11..11..11..11..
            ..111111....11....11..11..1111....111111..
            ..111111....11....11..11..1111....111111..
            ......11....11....11..11..11..11....11....
            ......11....11....11..11..11..11....11....
            ..111111....11....111111..11..11....11....
            ..111111....11....111111..11..11....11....
            ..........................................
            ..........................................
            `)
        mySprite3.setImage(img`
            ..........................................
            ..........................................
            ..111111..111111..111111..111111..111111..
            ..111111..111111..111111..111111..111111..
            ..11..11..11......11......11........11....
            ..11..11..11......11......11........11....
            ..1111....111111..111111..111111....11....
            ..1111....111111..111111..111111....11....
            ..11..11..11..........11..11........11....
            ..11..11..11..........11..11........11....
            ..11..11..111111..111111..111111....11....
            ..11..11..111111..111111..111111....11....
            ..........................................
            ..........................................
            `)
        mySprite2.setImage(img`
            77999999999999999999999999999999999999999999999999
            77999999999999999999999999999999999999999999999996
            99ff88ff88ffffff88ffffff88ffffff88ff88ff88ffffff66
            99ff88ff88ffffff88ffffff88ffffff88ff88ff88ffffff66
            99ff88ff88ff888888ff88ff88ff888888ff88ff88ff888866
            99ff88ff88ff888888ff88ff88ff888888ff88ff88ff888866
            99ff88ff88ffffff88ffff8888ffffff88ff88ff88ffffff66
            99ff88ff88ffffff88ffff8888ffffff88ff88ff88ffffff66
            99ff88ff88ff888888ff88ff888888ff88ff88ff888888ff66
            99ff88ff88ff888888ff88ff888888ff88ff88ff888888ff66
            9988ff8888ffffff88ff88ff88ffffff88ffffff88ffffff66
            9988ff8888ffffff88ff88ff88ffffff88ffffff88ffffff66
            96666666666666666666666666666666666666666666666688
            66666666666666666666666666666666666666666666666688
            `)
    } else if (Mode == 3) {
        mySprite2.setImage(img`
            ..................................................
            ..................................................
            ..11..11..111111..111111..111111..11..11..111111..
            ..11..11..111111..111111..111111..11..11..111111..
            ..11..11..11......11..11..11......11..11..11......
            ..11..11..11......11..11..11......11..11..11......
            ..11..11..111111..1111....111111..11..11..111111..
            ..11..11..111111..1111....111111..11..11..111111..
            ..11..11..11......11..11......11..11..11......11..
            ..11..11..11......11..11......11..11..11......11..
            ....11....111111..11..11..111111..111111..111111..
            ....11....111111..11..11..111111..111111..111111..
            ..................................................
            ..................................................
            `)
        mySprite.setImage(img`
            ..........................................
            ..........................................
            ..111111..111111..111111..111111..11..11..
            ..111111..111111..111111..111111..11..11..
            ..11........11....11..11..11..11..11..11..
            ..11........11....11..11..11..11..11..11..
            ..111111....11....11..11..1111....111111..
            ..111111....11....11..11..1111....111111..
            ......11....11....11..11..11..11....11....
            ......11....11....11..11..11..11....11....
            ..111111....11....111111..11..11....11....
            ..111111....11....111111..11..11....11....
            ..........................................
            ..........................................
            `)
        mySprite3.setImage(img`
            bbcccccccccccccccccccccccccccccccccccccccc
            bbcccccccccccccccccccccccccccccccccccccccd
            ccffffffeeffffffeeffffffeeffffffeeffffffdd
            ccffffffeeffffffeeffffffeeffffffeeffffffdd
            ccffeeffeeffeeeeeeffeeeeeeffeeeeeeeeffeedd
            ccffeeffeeffeeeeeeffeeeeeeffeeeeeeeeffeedd
            ccffffeeeeffffffeeffffffeeffffffeeeeffeedd
            ccffffeeeeffffffeeffffffeeffffffeeeeffeedd
            ccffeeffeeffeeeeeeeeeeffeeffeeeeeeeeffeedd
            ccffeeffeeffeeeeeeeeeeffeeffeeeeeeeeffeedd
            ccffeeffeeffffffeeffffffeeffffffeeeeffeedd
            ccffeeffeeffffffeeffffffeeffffffeeeeffeedd
            cdddddddddddddddddddddddddddddddddddddddee
            ddddddddddddddddddddddddddddddddddddddddee
            `)
    }
}
let mySprite7: Sprite = null
let Play_Button = 0
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let Title = 0
let PCT = 0
let PCC = 0
let C_Name = ""
let Mode_Choosing = 0
let Mode = 0
let Game = 0
let Play = 0
scene.setBackgroundImage(img`
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffff22222222222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffff22222222222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffff22222222222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffff22222222222222222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222
    222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222
    222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222
    222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222
    222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222
    222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222
    222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222
    222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222
    222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222
    222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222
    222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222
    222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222
    222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222
    222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222
    222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222
    222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222
    222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222
    222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222
    `)
timer.background(function () {
    while (Play == 0) {
        timer.background(function () {
            music.playMelody("G B G C5 B E A F ", 125)
        })
        timer.background(function () {
            music.playMelody("C G A F G E F D ", 125)
        })
        music.playMelody("E B C5 A B G A F ", 125)
    }
})
color.startFade(color.Black, color.originalPalette, 5000)
timer.after(5000, function () {
    Game_Intro()
})
game.onUpdateInterval(1, function () {
    if (Title == 0) {
    	
    } else if (Title == 1) {
        if (mySprite.y <= 50 && mySprite.x <= 15) {
            mySprite.setVelocity(14, 21)
        } else {
            mySprite.setVelocity(0, 0)
        }
        if (mySprite2.y >= 49) {
            mySprite2.vy = -23
        } else {
            mySprite2.vy = 0
        }
        if (mySprite2.x <= 38) {
            mySprite2.vx = 17
        } else {
            mySprite2.vx = 0
        }
        if (mySprite3.y <= 48) {
            mySprite3.vy = 19
        } else {
            mySprite3.vy = 0
        }
        if (mySprite4.x >= 99) {
            mySprite4.vx = -22
        } else {
            mySprite4.vx = 0
        }
        if (mySprite4.y <= 48) {
            mySprite4.vy = 19
        } else {
            mySprite4.vy = 0
        }
        if (mySprite5.x >= 122) {
            mySprite5.vx = -15
        } else {
            mySprite5.vx = 0
        }
        if (mySprite6.y >= 49) {
            mySprite6.vy = -19
        } else {
            mySprite6.vy = 0
        }
        if (mySprite6.x >= 145) {
            mySprite6.vx = -6
        } else {
            mySprite6.vx = 0
        }
    }
})
forever(function () {
    if (Play_Button == 0) {
    	
    } else if (Play_Button == 1 && Play == 0) {
        mySprite7 = sprites.create(img`
            ...........................................................
            .aaa.aaa.aaa.aaa.aaa...aaa...aaa.aaa...aaa.aaa.aaa.aaa.aaa.
            .a.a.a.a.a...a...a.....a.a....a..a.a...a....a..a.a.a.a..a..
            .aa..aa..aaa.aaa.aaa...aaa....a..a.a...aaa..a..aaa.aa...a..
            .a...a.a.a.....a...a...a.a....a..a.a.....a..a..a.a.a.a..a..
            .a...a.a.aaa.aaa.aaa...a.a....a..aaa...aaa..a..a.a.a.a..a..
            ...........................................................
            `, SpriteKind.Game_Title)
        mySprite7.y += 33
        pause(500)
        mySprite7.destroy()
        pause(500)
        Game = 1
    }
})
forever(function () {
    if (Play_Button == 0) {
    	
    } else if (Play_Button == 1 && Play == 0) {
        mySprite7 = sprites.create(img`
            ...........................................................
            .aaa.aaa.aaa.aaa.aaa...aaa...aaa.aaa...aaa.aaa.aaa.aaa.aaa.
            .a.a.a.a.a...a...a.....a.a....a..a.a...a....a..a.a.a.a..a..
            .aa..aa..aaa.aaa.aaa...aaa....a..a.a...aaa..a..aaa.aa...a..
            .a...a.a.a.....a...a...a.a....a..a.a.....a..a..a.a.a.a..a..
            .a...a.a.aaa.aaa.aaa...a.a....a..aaa...aaa..a..a.a.a.a..a..
            ...........................................................
            `, SpriteKind.Game_Title)
        mySprite7.y += 33
        pause(500)
        mySprite7.destroy()
        pause(500)
        Game = 1
    }
})
