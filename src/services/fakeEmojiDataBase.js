export const myEmojiTable = [
    "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃",
    "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜",
    "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟",
    "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠",
    "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓", "🤗",
    "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧",
    "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤢", "🤮", "🤧",
    "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👹", "👺", "🤡", "💩", "👻",
    "💀", "☠️", "👽", "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽",
    "🙀", "😿", "😾"
];

export function getEmojis() {
    return myEmojiTable
}

export function deleteTheClown() {
    let arrayWithoutClown = myEmojiTable.filter(emoji => emoji !== "🤡")
    return arrayWithoutClown
}

export function addClown() {
    myEmojiTable.push("🤡")
    return myEmojiTable
}

export function updateClown() {
    const clown = myEmojiTable.find(emoji => emoji === "🤡")
    const index = myEmojiTable.indexOf(clown)
    myEmojiTable[index] = "💩"
    return myEmojiTable
}