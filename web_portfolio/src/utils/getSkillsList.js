const MAX_X = 4;
const MAX_Y = 4;


const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

export default function getSkills(techs){
    const positions = [];
    for (let x = 1; x <= MAX_X; x++) {
        for (let y = 1; y <= MAX_Y; y++) {
            positions.push({ x, y });
        }
    }

    const shuffledPositions = shuffle(positions);
    const arr = ["start", "center", "end"];

    const mapped = techs.map((t, i) => ({
        ...t,
        ...shuffledPositions[i],
        align: arr[Math.floor(Math.random() * arr.length)] 
    }));

    return mapped;
}