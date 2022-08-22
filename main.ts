namespace SpriteKind {
    export const Background = SpriteKind.create()
    export const Game_Title = SpriteKind.create()
}
function Male__Barbarian () {
    story.startCutscene(function () {
        scene.setBackgroundImage(img`
            dddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b44bb77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd777777777777777777777774444b77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b444b77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b444477777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd777777777777777777777774444bb7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd777777777777777777777777b444bb77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b444b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd777777777777777777777774444b4b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b4b4b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b444447777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777774444b4bb7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd777777777777777777777777b4b4b4bb77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd77777777777777777777777bb4b4444477777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777b44444b4bb77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbb4b4b4bbb7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbb4b4b4bbb7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd77777777777777777777777bbb4b4b4bbb77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4b444444b7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd77777777777777777777774444444bb4bbb7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4b4bb4bbbb777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4b4bb44444777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbbb4444444bbb777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777444444b4bbb4bbbb7777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbbb4b4bbb4bbbb77777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbbb4bb4bb4bbbbb7777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4bbb4444444447777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777b444444444bbb4bbbb7777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777bbbbb4bbb4bbb4bbbbb777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777bbbbb4bbb4bbb4bbbbb777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777bbbbb4bbb4bbbb4bbbbb77777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4bbbb4bbbbb77777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4bbbb4bbbbb77777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4bbbb4bbbbbb7777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4444444444447777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777b44444444444bbbbb4bbbbbb777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777bbbbbbb4bbb4bbbbb4bbbbbb777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777bbbbbb4bbbbb4bbbb4bbbbbb777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777bbbbbb4bbbbb4bbbbb4bbbbbb77777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbb4bbbbbb77777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbb4bbbbbbb7777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbb4bbbbbbb7777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbbb44444444777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb44444444444444bbbbbbb777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777444444444bbbbb4bbbbbb4bbbbbbb777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbb4bbbbbb4bbbbbbb777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbb4bbbbbbb4bbbbbbb77777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbb4bbbbbbb4bbbbbbb77777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbb4bbbbbb4bbbbbbbb7777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbbbb4bbbbbb4bbbbbbbb7777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbbbb4bbbbbbb444444447777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb44444444444444444bbbbbbbb777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777b444444444bbbbbbb4bbbbbbb4bbbbbbbb777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbbb4bbbbbbb4bbbbbbbbb77777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbb77777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbb77777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbbb7777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbbb7777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbbb4bbbbbbbbb777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbbb4bbbbbbbbb777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb4bbbbbbbbb4bbbbbbbb4bbbbbbbbb77777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb4bbbbbbbbb4bbbbbbbb4bbbbbbbbbb7777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb4bbbbbbbbb4bbbbbbbbb44444444447777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb444444444444444444444bbbbbbbbbb777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777744444444444bbbbbbbbb4bbbbbbbbb4bbbbbbbbbb777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbb4bbbbbbbbbb777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb77777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb77777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb77777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb7777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbb7777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbb44444444444477777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4444444444444444444444444bbbbbbbbbbb77777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777774444444444444bbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb7777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb7777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbb7777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbb777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbb777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbbb77777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb77777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbb77777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbbb7777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbbb7777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777bbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbb44444444444444777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777bbbbbbbbbbbbbb44444444444444444444444444444bbbbbbbbbbbbb777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777444444444444444bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbb777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777bbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb77ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbb77ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777bbbbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            fffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        mySprite8 = sprites.create(img`
            .....................bbb.
            .....................bbb.
            ...........55555ccc...bb.
            ..........55bbb55ddc..cc.
            11.bbb....5b8b8b5dddc.cc.
            11fffb1f..5bbbbb5ddd..cc.
            11.bb..1ff5bfffb5dd...cc.
            ...cc.....55bbb5ddd...cc.
            ...cc.fff1f55551555..ccc.
            ...cccff111cffc1155cccc..
            ...cccf1111cccc1155ccc...
            ......f1111cccc11ffcc....
            ......f1111dddc11fcc.....
            ......f111dddcdd1ff......
            ......ff11ddcddd1ff......
            .......f11dcdddd11f......
            .......f1eceeeeee1f......
            .......f1cee44eee1f......
            .......cce444444e1ff.....
            ......ccc44444444fff.....
            ......ccc444ee4444fff....
            ......cc4444ee4444ffff...
            ........4444ee4444fffff11
            .......4444effe4444fffff1
            .......4444effe4444fffff1
            .......1114.fff1114ffff1.
            ......11111..f11111fff1..
            ......11111...11111ff1...
            .......eef.....fee.f1....
            .......eef.....fee.1.....
            .......eef.....fee.......
            ......eeef.....feee......
            .....eeef.......feee.....
            .....ffff.......ffff.....
            `, SpriteKind.Player)
        mySprite8.y += 30
        pause(2000)
        mySprite8.setImage(img`
            .........................
            .........................
            ......ccccccc5...........
            .....cdddddddc5..........
            ....cddddddd555....bbb.11
            .....dddddd5555..f1bfff11
            ......ddddddfffff1..bb.11
            ......ddddddff5.....cc...
            ......5ddddd5511fff.cc...
            ....cc5ddddd1111fffccc...
            ...ccc55dddc111ffffccc...
            ...ccc55fcccfffffff......
            ..cccccffffffffffff......
            ..ccc.fffffffffffff......
            ..ccc.fffffffffffff......
            ..ccc.ffffffffffff.......
            ..ccc.ffffffffffff.......
            ...cccffffffffffff.......
            ...ccffffffffffffc.......
            ....cffffffffffffcc......
            ....fffffffffffffcc......
            ...ffffffffffffffcc......
            11ffffffffffffff4........
            1ffffffffffffff444.......
            1fffffffffffff4444.......
            .1fffffffffff.4111.......
            ..1fffffffff..11111......
            ...1ffff111...11111......
            ....1ffeef.....fee.......
            .....1.eef.....fee.......
            .......eef.....fee.......
            ......eeef.....feee......
            .....eeef.......feee.....
            .....ffff.......ffff.....
            `)
        story.spriteMoveToLocation(mySprite8, 70, 10, 7)
        blockSettings.writeNumber("P.C.G", PCG)
        blockSettings.writeNumber("P.C.C", PCC)
        blockSettings.writeNumber("P.C.T", PCT)
        World = 1
        Level = 1
        Levels()
        color.startFadeFromCurrent(color.Black)
        mySprite8.setPosition(blockSettings.readNumber("Player_X"), blockSettings.readNumber("Player_Y"))
    })
    if (PC == 0) {
        PC = 1
    }
}
function Levels () {
    if (World == 1) {
        blockSettings.writeNumber("World", World)
        if (Level == 1) {
            tiles.setCurrentTilemap(tilemap`W1L1`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 2) {
            tiles.setCurrentTilemap(tilemap`W1L2`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 3) {
            tiles.setCurrentTilemap(tilemap`W1L3`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 4) {
            tiles.setCurrentTilemap(tilemap`W1L4`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 5) {
            tiles.setCurrentTilemap(tilemap`W1L5`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 6) {
            tiles.setCurrentTilemap(tilemap`W1L6`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 7) {
            tiles.setCurrentTilemap(tilemap`W1L7`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 8) {
            World += 1
            Level = 1
            Levels()
        }
    } else if (World == 2) {
        blockSettings.writeNumber("World", World)
        if (Level == 1) {
            tiles.setCurrentTilemap(tilemap`W2L1`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 2) {
            tiles.setCurrentTilemap(tilemap`W2L2`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 3) {
            tiles.setCurrentTilemap(tilemap`W2L3`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 4) {
            tiles.setCurrentTilemap(tilemap`W2L4`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 5) {
            tiles.setCurrentTilemap(tilemap`W2L5`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 6) {
            tiles.setCurrentTilemap(tilemap`W2L6`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 7) {
            tiles.setCurrentTilemap(tilemap`W2L7`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 8) {
            World += 1
            Level = 1
        }
    } else if (World == 3) {
        blockSettings.writeNumber("World", World)
        if (Level == 1) {
            tiles.setCurrentTilemap(tilemap`W3L1`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 2) {
            tiles.setCurrentTilemap(tilemap`W3L2`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 3) {
            tiles.setCurrentTilemap(tilemap`W3L3`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 4) {
            tiles.setCurrentTilemap(tilemap`W3L4`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 5) {
            tiles.setCurrentTilemap(tilemap`W3L5`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 6) {
            tiles.setCurrentTilemap(tilemap`W3L6`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 7) {
            tiles.setCurrentTilemap(tilemap`W3L7`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 8) {
            World += 1
            Level = 1
        }
    } else if (World == 4) {
        blockSettings.writeNumber("World", World)
        if (Level == 1) {
            tiles.setCurrentTilemap(tilemap`W4L1`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 2) {
            tiles.setCurrentTilemap(tilemap`W4L2`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 3) {
            tiles.setCurrentTilemap(tilemap`W4L3`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 4) {
            tiles.setCurrentTilemap(tilemap`W4L4`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 5) {
            tiles.setCurrentTilemap(tilemap`W4L5`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 6) {
            tiles.setCurrentTilemap(tilemap`W4L6`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 7) {
            tiles.setCurrentTilemap(tilemap`W4L7`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 8) {
            World += 1
            Level = 1
        }
    } else if (World == 5) {
        blockSettings.writeNumber("World", World)
        if (Level == 1) {
            tiles.setCurrentTilemap(tilemap`W5L1`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 2) {
            tiles.setCurrentTilemap(tilemap`W5L2`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 3) {
            tiles.setCurrentTilemap(tilemap`W5L3`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 4) {
            tiles.setCurrentTilemap(tilemap`W5L4`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 5) {
            tiles.setCurrentTilemap(tilemap`W5L5`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 6) {
            tiles.setCurrentTilemap(tilemap`W5L6`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 7) {
            tiles.setCurrentTilemap(tilemap`W5L7`)
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 8) {
            World += 1
            Level = 1
        }
    } else if (World == 6) {
        blockSettings.writeNumber("World", World)
        if (Level == 1) {
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 2) {
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 3) {
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 4) {
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 5) {
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 6) {
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 7) {
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 8) {
            World += 1
            Level = 1
        }
    } else if (World == 7) {
        blockSettings.writeNumber("World", World)
        if (Level == 1) {
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 2) {
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 3) {
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 4) {
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 5) {
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 6) {
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 7) {
            blockSettings.writeNumber("Level", Level)
            Level += 1
        } else if (Level == 8) {
            game.splash("Story Completed")
        }
    }
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
                Load_Game()
                blockSettings.writeString("PCN", game.askForString("What is your character's name?"))
                game.showLongText("What gender is your Character?", DialogLayout.Top)
                story.showPlayerChoices("Male", "Female")
                if (story.checkLastAnswer("Male")) {
                    PCG = 1
                    game.showLongText("What is your Character?", DialogLayout.Top)
                    story.showPlayerChoices("Barbarian", "Wizard", "Skeleton", "Paladin, Dragon, Archer, or Rogue")
                    if (story.checkLastAnswer("Barbarian")) {
                        PCC = 1
                        Player_Character()
                    } else if (story.checkLastAnswer("Wizard")) {
                        PCC = 2
                        game.showLongText("What type of wizard?", DialogLayout.Top)
                        story.showPlayerChoices("Fire", "Water", "Ice", "Lightning or Poison")
                        if (story.checkLastAnswer("Fire")) {
                            PCT = 1
                            Player_Character()
                        } else if (story.checkLastAnswer("Water")) {
                            PCT = 2
                            Player_Character()
                        } else if (story.checkLastAnswer("Ice")) {
                            PCT = 3
                            Player_Character()
                        } else if (story.checkLastAnswer("Lightning or Poison")) {
                            story.showPlayerChoices("Lightning", "Poison")
                            if (story.checkLastAnswer("Lightning")) {
                                PCT = 4
                                Player_Character()
                            } else if (story.checkLastAnswer("Poison")) {
                                PCT = 5
                                Player_Character()
                            }
                        }
                    } else if (story.checkLastAnswer("Skeleton")) {
                        PCC = 3
                        Player_Character()
                    } else if (story.checkLastAnswer("Paladin, Dragon, Archer, or Rogue")) {
                        story.showPlayerChoices("Paladin", "Dragon", "Archer", "Rogue")
                        if (story.checkLastAnswer("Paladin")) {
                            PCC = 4
                            Player_Character()
                        } else if (story.checkLastAnswer("Dragon")) {
                            PCC = 5
                            game.showLongText("What type of dragon?", DialogLayout.Top)
                            story.showPlayerChoices("Fire", "Water", "Ice", "Lightning or Poison")
                            if (story.checkLastAnswer("Fire")) {
                                PCT = 1
                                Player_Character()
                            } else if (story.checkLastAnswer("Water")) {
                                PCT = 2
                                Player_Character()
                            } else if (story.checkLastAnswer("Ice")) {
                                PCT = 3
                                Player_Character()
                            } else if (story.checkLastAnswer("Lightning or Poison")) {
                                story.showPlayerChoices("Lightning", "Poison")
                                if (story.checkLastAnswer("Lightning")) {
                                    PCT = 4
                                    Player_Character()
                                } else if (story.checkLastAnswer("Poison")) {
                                    PCT = 5
                                    Player_Character()
                                }
                            }
                        } else if (story.checkLastAnswer("Archer")) {
                            PCC = 6
                            Player_Character()
                        } else if (story.checkLastAnswer("Rogue")) {
                            PCC = 7
                            Player_Character()
                        }
                    }
                } else if (story.checkLastAnswer("Female")) {
                    PCG = 2
                    game.showLongText("What is your Character?", DialogLayout.Top)
                    story.showPlayerChoices("Barbarian", "Witch", "Skeleton", "Paladin, Dragon, Archer, or Rogue")
                    if (story.checkLastAnswer("Barbarian")) {
                        PCC = 1
                        Player_Character()
                    } else if (story.checkLastAnswer("Witch")) {
                        PCC = 2
                        game.showLongText("What type of witch?", DialogLayout.Top)
                        story.showPlayerChoices("Fire", "Water", "Ice", "Lightning or Poison")
                        if (story.checkLastAnswer("Fire")) {
                            PCT = 1
                            Player_Character()
                        } else if (story.checkLastAnswer("Water")) {
                            PCT = 2
                            Player_Character()
                        } else if (story.checkLastAnswer("Ice")) {
                            PCT = 3
                            Player_Character()
                        } else if (story.checkLastAnswer("Lightning or Poison")) {
                            story.showPlayerChoices("Lightning", "Poison")
                            if (story.checkLastAnswer("Lightning")) {
                                PCT = 4
                                Player_Character()
                            } else if (story.checkLastAnswer("Poison")) {
                                PCT = 5
                                Player_Character()
                            }
                        }
                    } else if (story.checkLastAnswer("Skeleton")) {
                        PCC = 3
                        Player_Character()
                    } else if (story.checkLastAnswer("Paladin, Dragon, Archer, or Rogue")) {
                        story.showPlayerChoices("Paladin", "Dragon", "Archer", "Rogue")
                        if (story.checkLastAnswer("Paladin")) {
                            PCC = 4
                            Player_Character()
                        } else if (story.checkLastAnswer("Dragon")) {
                            PCC = 5
                            game.showLongText("What type of dragon?", DialogLayout.Top)
                            story.showPlayerChoices("Fire", "Water", "Ice", "Lightning or Poison")
                            if (story.checkLastAnswer("Fire")) {
                                PCT = 1
                                Player_Character()
                            } else if (story.checkLastAnswer("Water")) {
                                PCT = 2
                                Player_Character()
                            } else if (story.checkLastAnswer("Ice")) {
                                PCT = 3
                                Player_Character()
                            } else if (story.checkLastAnswer("Lightning or Poison")) {
                                story.showPlayerChoices("Lightning", "Poison")
                                if (story.checkLastAnswer("Lightning")) {
                                    PCT = 4
                                    Player_Character()
                                } else if (story.checkLastAnswer("Poison")) {
                                    PCT = 5
                                    Player_Character()
                                }
                            }
                        } else if (story.checkLastAnswer("Archer")) {
                            PCC = 6
                            Player_Character()
                        } else if (story.checkLastAnswer("Rogue")) {
                            PCC = 7
                            Player_Character()
                        }
                    }
                }
            } else if (Mode == 2) {
                sprites.destroyAllSpritesOfKind(SpriteKind.Game_Title)
            } else if (Mode == 3) {
                if (game.ask("Are you Sure you want to", "reset the game?")) {
                    blockSettings.clear()
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
function Fire__Wizard () {
    story.startCutscene(function () {
        scene.setBackgroundImage(img`
            dddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b44bb77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd777777777777777777777774444b77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b444b77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b444477777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd777777777777777777777774444bb7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd777777777777777777777777b444bb77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b444b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd777777777777777777777774444b4b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b4b4b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b444447777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777774444b4bb7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd777777777777777777777777b4b4b4bb77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd77777777777777777777777bb4b4444477777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777b44444b4bb77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbb4b4b4bbb7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbb4b4b4bbb7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd77777777777777777777777bbb4b4b4bbb77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4b444444b7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd77777777777777777777774444444bb4bbb7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4b4bb4bbbb777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4b4bb44444777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbbb4444444bbb777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777444444b4bbb4bbbb7777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbbb4b4bbb4bbbb77777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbbb4bb4bb4bbbbb7777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4bbb4444444447777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777b444444444bbb4bbbb7777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777bbbbb4bbb4bbb4bbbbb777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777bbbbb4bbb4bbb4bbbbb777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777bbbbb4bbb4bbbb4bbbbb77777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4bbbb4bbbbb77777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4bbbb4bbbbb77777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4bbbb4bbbbbb7777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4444444444447777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777b44444444444bbbbb4bbbbbb777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777bbbbbbb4bbb4bbbbb4bbbbbb777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777bbbbbb4bbbbb4bbbb4bbbbbb777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777bbbbbb4bbbbb4bbbbb4bbbbbb77777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbb4bbbbbb77777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbb4bbbbbbb7777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbb4bbbbbbb7777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbbb44444444777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb44444444444444bbbbbbb777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777444444444bbbbb4bbbbbb4bbbbbbb777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbb4bbbbbb4bbbbbbb777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbb4bbbbbbb4bbbbbbb77777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbb4bbbbbbb4bbbbbbb77777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbb4bbbbbb4bbbbbbbb7777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbbbb4bbbbbb4bbbbbbbb7777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbbbb4bbbbbbb444444447777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb44444444444444444bbbbbbbb777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777b444444444bbbbbbb4bbbbbbb4bbbbbbbb777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbbb4bbbbbbb4bbbbbbbbb77777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbb77777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbb77777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbbb7777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbbb7777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbbb4bbbbbbbbb777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbbb4bbbbbbbbb777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb4bbbbbbbbb4bbbbbbbb4bbbbbbbbb77777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb4bbbbbbbbb4bbbbbbbb4bbbbbbbbbb7777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb4bbbbbbbbb4bbbbbbbbb44444444447777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb444444444444444444444bbbbbbbbbb777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777744444444444bbbbbbbbb4bbbbbbbbb4bbbbbbbbbb777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbb4bbbbbbbbbb777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb77777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb77777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb77777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb7777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbb7777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbb44444444444477777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4444444444444444444444444bbbbbbbbbbb77777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777774444444444444bbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb7777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb7777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbb7777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbb777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbb777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbbb77777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb77777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbb77777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbbb7777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbbb7777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777bbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbb44444444444444777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777bbbbbbbbbbbbbb44444444444444444444444444444bbbbbbbbbbbbb777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777444444444444444bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbb777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777bbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb77ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbb77ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777bbbbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            fffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        mySprite8 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        mySprite8.y += 30
        pause(2000)
        mySprite8.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        story.spriteMoveToLocation(mySprite8, 70, 10, 7)
        blockSettings.writeNumber("P.C.G", PCG)
        blockSettings.writeNumber("P.C.C", PCC)
        blockSettings.writeNumber("P.C.T", PCT)
        World = 1
        Level = 1
        Levels()
        color.startFadeFromCurrent(color.Black)
        mySprite8.setPosition(blockSettings.readNumber("Player_X"), blockSettings.readNumber("Player_Y"))
    })
    if (PC == 0) {
        PC = 1
    }
}
function Water__Wizard () {
    story.startCutscene(function () {
        scene.setBackgroundImage(img`
            dddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b44bb77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd777777777777777777777774444b77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b444b77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b444477777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd777777777777777777777774444bb7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd777777777777777777777777b444bb77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b444b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd777777777777777777777774444b4b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b4b4b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b444447777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777774444b4bb7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd777777777777777777777777b4b4b4bb77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd77777777777777777777777bb4b4444477777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777b44444b4bb77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbb4b4b4bbb7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbb4b4b4bbb7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd77777777777777777777777bbb4b4b4bbb77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4b444444b7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd77777777777777777777774444444bb4bbb7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4b4bb4bbbb777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4b4bb44444777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbbb4444444bbb777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777444444b4bbb4bbbb7777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbbb4b4bbb4bbbb77777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbbb4bb4bb4bbbbb7777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4bbb4444444447777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777b444444444bbb4bbbb7777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777bbbbb4bbb4bbb4bbbbb777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777bbbbb4bbb4bbb4bbbbb777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777bbbbb4bbb4bbbb4bbbbb77777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4bbbb4bbbbb77777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4bbbb4bbbbb77777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4bbbb4bbbbbb7777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4444444444447777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777b44444444444bbbbb4bbbbbb777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777bbbbbbb4bbb4bbbbb4bbbbbb777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777bbbbbb4bbbbb4bbbb4bbbbbb777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777bbbbbb4bbbbb4bbbbb4bbbbbb77777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbb4bbbbbb77777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbb4bbbbbbb7777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbb4bbbbbbb7777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbbb44444444777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb44444444444444bbbbbbb777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777444444444bbbbb4bbbbbb4bbbbbbb777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbb4bbbbbb4bbbbbbb777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbb4bbbbbbb4bbbbbbb77777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbb4bbbbbbb4bbbbbbb77777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbb4bbbbbb4bbbbbbbb7777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbbbb4bbbbbb4bbbbbbbb7777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbbbb4bbbbbbb444444447777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb44444444444444444bbbbbbbb777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777b444444444bbbbbbb4bbbbbbb4bbbbbbbb777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbbb4bbbbbbb4bbbbbbbbb77777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbb77777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbb77777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbbb7777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbbb7777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbbb4bbbbbbbbb777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbbb4bbbbbbbbb777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb4bbbbbbbbb4bbbbbbbb4bbbbbbbbb77777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb4bbbbbbbbb4bbbbbbbb4bbbbbbbbbb7777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb4bbbbbbbbb4bbbbbbbbb44444444447777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb444444444444444444444bbbbbbbbbb777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777744444444444bbbbbbbbb4bbbbbbbbb4bbbbbbbbbb777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbb4bbbbbbbbbb777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb77777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb77777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb77777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb7777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbb7777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbb44444444444477777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4444444444444444444444444bbbbbbbbbbb77777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777774444444444444bbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb7777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb7777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbb7777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbb777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbb777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbbb77777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb77777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbb77777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbbb7777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbbb7777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777bbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbb44444444444444777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777bbbbbbbbbbbbbb44444444444444444444444444444bbbbbbbbbbbbb777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777444444444444444bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbb777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777bbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb77ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbb77ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777bbbbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            fffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        mySprite8 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        mySprite8.y += 30
        pause(2000)
        mySprite8.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        story.spriteMoveToLocation(mySprite8, 70, 10, 7)
        blockSettings.writeNumber("P.C.G", PCG)
        blockSettings.writeNumber("P.C.C", PCC)
        blockSettings.writeNumber("P.C.T", PCT)
        World = 1
        Level = 1
        Levels()
        color.startFadeFromCurrent(color.Black)
        mySprite8.setPosition(blockSettings.readNumber("Player_X"), blockSettings.readNumber("Player_Y"))
    })
    if (PC == 0) {
        PC = 1
    }
}
function Ice__Wizard () {
    story.startCutscene(function () {
        scene.setBackgroundImage(img`
            dddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b44bb77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd777777777777777777777774444b77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b444b77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b444477777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd777777777777777777777774444bb7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd777777777777777777777777b444bb77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b444b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd777777777777777777777774444b4b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b4b4b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b444447777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777774444b4bb7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd777777777777777777777777b4b4b4bb77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd77777777777777777777777bb4b4444477777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777b44444b4bb77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbb4b4b4bbb7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbb4b4b4bbb7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd77777777777777777777777bbb4b4b4bbb77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4b444444b7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd77777777777777777777774444444bb4bbb7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4b4bb4bbbb777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4b4bb44444777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbbb4444444bbb777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777444444b4bbb4bbbb7777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbbb4b4bbb4bbbb77777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbbb4bb4bb4bbbbb7777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4bbb4444444447777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777b444444444bbb4bbbb7777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777bbbbb4bbb4bbb4bbbbb777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777bbbbb4bbb4bbb4bbbbb777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777bbbbb4bbb4bbbb4bbbbb77777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4bbbb4bbbbb77777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4bbbb4bbbbb77777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4bbbb4bbbbbb7777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4444444444447777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777b44444444444bbbbb4bbbbbb777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777bbbbbbb4bbb4bbbbb4bbbbbb777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777bbbbbb4bbbbb4bbbb4bbbbbb777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777bbbbbb4bbbbb4bbbbb4bbbbbb77777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbb4bbbbbb77777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbb4bbbbbbb7777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbb4bbbbbbb7777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbbb44444444777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb44444444444444bbbbbbb777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777444444444bbbbb4bbbbbb4bbbbbbb777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbb4bbbbbb4bbbbbbb777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbb4bbbbbbb4bbbbbbb77777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbb4bbbbbbb4bbbbbbb77777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbb4bbbbbb4bbbbbbbb7777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbbbb4bbbbbb4bbbbbbbb7777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbbbb4bbbbbbb444444447777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb44444444444444444bbbbbbbb777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777b444444444bbbbbbb4bbbbbbb4bbbbbbbb777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbbb4bbbbbbb4bbbbbbbbb77777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbb77777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbb77777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbbb7777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbbb7777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbbb4bbbbbbbbb777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbbb4bbbbbbbbb777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb4bbbbbbbbb4bbbbbbbb4bbbbbbbbb77777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb4bbbbbbbbb4bbbbbbbb4bbbbbbbbbb7777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb4bbbbbbbbb4bbbbbbbbb44444444447777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb444444444444444444444bbbbbbbbbb777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777744444444444bbbbbbbbb4bbbbbbbbb4bbbbbbbbbb777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbb4bbbbbbbbbb777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb77777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb77777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb77777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb7777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbb7777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbb44444444444477777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4444444444444444444444444bbbbbbbbbbb77777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777774444444444444bbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb7777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb7777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbb7777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbb777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbb777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbbb77777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb77777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbb77777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbbb7777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbbb7777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777bbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbb44444444444444777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777bbbbbbbbbbbbbb44444444444444444444444444444bbbbbbbbbbbbb777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777444444444444444bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbb777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777bbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb77ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbb77ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777bbbbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            fffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        mySprite8 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        mySprite8.y += 30
        pause(2000)
        mySprite8.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        story.spriteMoveToLocation(mySprite8, 70, 10, 7)
        blockSettings.writeNumber("P.C.G", PCG)
        blockSettings.writeNumber("P.C.C", PCC)
        blockSettings.writeNumber("P.C.T", PCT)
        World = 1
        Level = 1
        Levels()
        color.startFadeFromCurrent(color.Black)
        mySprite8.setPosition(blockSettings.readNumber("Player_X"), blockSettings.readNumber("Player_Y"))
    })
    if (PC == 0) {
        PC = 1
    }
}
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
function Poison__Wizard () {
    story.startCutscene(function () {
        scene.setBackgroundImage(img`
            dddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b44bb77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd777777777777777777777774444b77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b444b77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b444477777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd777777777777777777777774444bb7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd777777777777777777777777b444bb77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b444b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd777777777777777777777774444b4b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b4b4b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b444447777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777774444b4bb7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd777777777777777777777777b4b4b4bb77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd77777777777777777777777bb4b4444477777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777b44444b4bb77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbb4b4b4bbb7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbb4b4b4bbb7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd77777777777777777777777bbb4b4b4bbb77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4b444444b7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd77777777777777777777774444444bb4bbb7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4b4bb4bbbb777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4b4bb44444777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbbb4444444bbb777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777444444b4bbb4bbbb7777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbbb4b4bbb4bbbb77777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbbb4bb4bb4bbbbb7777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4bbb4444444447777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777b444444444bbb4bbbb7777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777bbbbb4bbb4bbb4bbbbb777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777bbbbb4bbb4bbb4bbbbb777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777bbbbb4bbb4bbbb4bbbbb77777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4bbbb4bbbbb77777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4bbbb4bbbbb77777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4bbbb4bbbbbb7777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4444444444447777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777b44444444444bbbbb4bbbbbb777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777bbbbbbb4bbb4bbbbb4bbbbbb777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777bbbbbb4bbbbb4bbbb4bbbbbb777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777bbbbbb4bbbbb4bbbbb4bbbbbb77777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbb4bbbbbb77777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbb4bbbbbbb7777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbb4bbbbbbb7777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbbb44444444777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb44444444444444bbbbbbb777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777444444444bbbbb4bbbbbb4bbbbbbb777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbb4bbbbbb4bbbbbbb777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbb4bbbbbbb4bbbbbbb77777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbb4bbbbbbb4bbbbbbb77777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbb4bbbbbb4bbbbbbbb7777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbbbb4bbbbbb4bbbbbbbb7777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbbbb4bbbbbbb444444447777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb44444444444444444bbbbbbbb777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777b444444444bbbbbbb4bbbbbbb4bbbbbbbb777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbbb4bbbbbbb4bbbbbbbbb77777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbb77777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbb77777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbbb7777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbbb7777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbbb4bbbbbbbbb777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbbb4bbbbbbbbb777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb4bbbbbbbbb4bbbbbbbb4bbbbbbbbb77777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb4bbbbbbbbb4bbbbbbbb4bbbbbbbbbb7777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb4bbbbbbbbb4bbbbbbbbb44444444447777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb444444444444444444444bbbbbbbbbb777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777744444444444bbbbbbbbb4bbbbbbbbb4bbbbbbbbbb777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbb4bbbbbbbbbb777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb77777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb77777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb77777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb7777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbb7777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbb44444444444477777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4444444444444444444444444bbbbbbbbbbb77777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777774444444444444bbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb7777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb7777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbb7777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbb777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbb777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbbb77777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb77777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbb77777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbbb7777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbbb7777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777bbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbb44444444444444777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777bbbbbbbbbbbbbb44444444444444444444444444444bbbbbbbbbbbbb777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777444444444444444bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbb777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777bbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb77ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbb77ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777bbbbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            fffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        mySprite8 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        mySprite8.y += 30
        pause(2000)
        mySprite8.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        story.spriteMoveToLocation(mySprite8, 70, 10, 7)
        blockSettings.writeNumber("P.C.G", PCG)
        blockSettings.writeNumber("P.C.C", PCC)
        blockSettings.writeNumber("P.C.T", PCT)
        World = 1
        Level = 1
        Levels()
        color.startFadeFromCurrent(color.Black)
        mySprite8.setPosition(blockSettings.readNumber("Player_X"), blockSettings.readNumber("Player_Y"))
    })
    if (PC == 0) {
        PC = 1
    }
}
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
            11cccccccccccccccccccccccccccccccccccccccc
            11cccccccccccccccccccccccccccccccccccccccd
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
function Player_Character () {
    if (PCG == 1) {
        if (PCC == 1) {
            Male__Barbarian()
        } else if (PCC == 2) {
            if (PCT == 1) {
                Fire__Wizard()
            } else if (PCT == 2) {
                Water__Wizard()
            } else if (PCT == 3) {
                Ice__Wizard()
            } else if (PCT == 4) {
                Lightning__Wizard()
            } else if (PCT == 5) {
                Poison__Wizard()
            }
        } else if (PCC == 3) {
        	
        } else if (PCC == 4) {
        	
        } else if (PCC == 5) {
            if (PCT == 1) {
            	
            } else if (PCT == 2) {
            	
            } else if (PCT == 3) {
            	
            } else if (PCT == 4) {
            	
            } else if (PCT == 5) {
            	
            }
        } else if (PCC == 6) {
        	
        } else if (PCC == 7) {
        	
        }
    } else if (PCG == 2) {
        if (PCC == 1) {
        	
        } else if (PCC == 2) {
            if (PCT == 1) {
            	
            } else if (PCT == 2) {
            	
            } else if (PCT == 3) {
            	
            } else if (PCT == 4) {
            	
            } else if (PCT == 5) {
            	
            }
        } else if (PCC == 3) {
        	
        } else if (PCC == 4) {
        	
        } else if (PCC == 5) {
            if (PCT == 1) {
            	
            } else if (PCT == 2) {
            	
            } else if (PCT == 3) {
            	
            } else if (PCT == 4) {
            	
            } else if (PCT == 5) {
            	
            }
        } else if (PCC == 6) {
        	
        } else if (PCC == 7) {
        	
        }
    }
}
function Load_Game () {
    PCG = blockSettings.readNumber("P.C.G")
    PCC = blockSettings.readNumber("P.C.C")
    PCT = blockSettings.readNumber("P.C.T")
    Player_Character()
}
function Lightning__Wizard () {
    story.startCutscene(function () {
        scene.setBackgroundImage(img`
            dddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b44bb77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd777777777777777777777774444b77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b444b77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b444477777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddd777777777777777777777774444bb7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd777777777777777777777777b444bb77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b444b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd777777777777777777777774444b4b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b4b4b77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddd77777777777777777777777b4b444447777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777774444b4bb7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd777777777777777777777777b4b4b4bb77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd77777777777777777777777bb4b4444477777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777b44444b4bb77777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbb4b4b4bbb7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbb4b4b4bbb7777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd77777777777777777777777bbb4b4b4bbb77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4b444444b7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd77777777777777777777774444444bb4bbb7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4b4bb4bbbb777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4b4bb44444777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbbb4444444bbb777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777444444b4bbb4bbbb7777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbbb4b4bbb4bbbb77777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbbb4bb4bb4bbbbb7777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777777bbbb4bbb4444444447777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777b444444444bbb4bbbb7777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777bbbbb4bbb4bbb4bbbbb777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777bbbbb4bbb4bbb4bbbbb777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777777bbbbb4bbb4bbbb4bbbbb77777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4bbbb4bbbbb77777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4bbbb4bbbbb77777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4bbbb4bbbbbb7777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777777bbbbbb4bbb4444444444447777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777b44444444444bbbbb4bbbbbb777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777bbbbbbb4bbb4bbbbb4bbbbbb777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777bbbbbb4bbbbb4bbbb4bbbbbb777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777777bbbbbb4bbbbb4bbbbb4bbbbbb77777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbb4bbbbbb77777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbb4bbbbbbb7777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbb4bbbbbbb7777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd777777777777777777bbbbbbb4bbbbb4bbbbbb44444444777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb44444444444444bbbbbbb777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777444444444bbbbb4bbbbbb4bbbbbbb777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbb4bbbbbb4bbbbbbb777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbb4bbbbbbb4bbbbbbb77777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbb4bbbbbbb4bbbbbbb77777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbb4bbbbbb4bbbbbbbb7777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbbbb4bbbbbb4bbbbbbbb7777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb4bbbbbbb4bbbbbbb444444447777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777777bbbbbbbb44444444444444444bbbbbbbb777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777b444444444bbbbbbb4bbbbbbb4bbbbbbbb777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbbb4bbbbbbb4bbbbbbbbb77777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbb77777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777777bbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbb77777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbbb7777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbb4bbbbbbbbb7777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbbb4bbbbbbbbb777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777777bbbbbbbbbb4bbbbbbb4bbbbbbbbb4bbbbbbbbb777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb4bbbbbbbbb4bbbbbbbb4bbbbbbbbb77777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb4bbbbbbbbb4bbbbbbbb4bbbbbbbbbb7777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb4bbbbbbbbb4bbbbbbbbb44444444447777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd77777777777777bbbbbbbbbb444444444444444444444bbbbbbbbbb777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777744444444444bbbbbbbbb4bbbbbbbbb4bbbbbbbbbb777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbb4bbbbbbbbbb777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb77777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb77777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd7777777777777bbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb77777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb7777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbb7777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbb4bbbbbbbbbbb777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbb44444444444477777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777777bbbbbbbbbbbb4444444444444444444444444bbbbbbbbbbb77777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777774444444444444bbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb7777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb7777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbb7777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbb777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777777bbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbb777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbbb77777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbbb4bbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb77777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbb77777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbbb7777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd7777777777bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbb4bbbbbbbbbbbbb7777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777bbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbb44444444444444777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777bbbbbbbbbbbbbb44444444444444444444444444444bbbbbbbbbbbbb777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777444444444444444bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbb777ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd777777777bbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb77ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbb77ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddd77777777bbbbbbbbbbbbbbb4bbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb7ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddd7777bbbbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbb4bbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            fffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddd
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        mySprite8 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        mySprite8.y += 30
        pause(2000)
        mySprite8.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        story.spriteMoveToLocation(mySprite8, 70, 10, 7)
        blockSettings.writeNumber("P.C.G", PCG)
        blockSettings.writeNumber("P.C.C", PCC)
        blockSettings.writeNumber("P.C.T", PCT)
        World = 1
        Level = 1
        Levels()
        color.startFadeFromCurrent(color.Black)
        mySprite8.setPosition(blockSettings.readNumber("Player_X"), blockSettings.readNumber("Player_Y"))
    })
    if (PC == 0) {
        PC = 1
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
let Mode_Choosing = 0
let Mode = 0
let Game = 0
let PC = 0
let Level = 0
let World = 0
let PCT = 0
let PCC = 0
let PCG = 0
let mySprite8: Sprite = null
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
game.onUpdateInterval(1, function () {
    if (PC == 1) {
        blockSettings.writeNumber("Player_X", mySprite8.x)
        blockSettings.writeNumber("Player_Y", mySprite8.y)
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
