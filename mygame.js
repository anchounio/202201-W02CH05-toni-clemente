let array = [
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
];

export const game = (array) => {
    const newArray = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ];
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array[x].length; y++) {
            //console.log([x], [y]);

            let livingCellsBeside = 0;
            const myCoordinates = [x, y];

            const surrounded = [
                [x - 1, y - 1],
                [x - 1, y],
                [x - 1, y + 1],
                [x, y - 1],
                [x, y + 1],
                [x + 1, y - 1],
                [x + 1, y],
                [x + 1, y + 1],
            ];

            //filtrado de los bordes del juego para evitar -1 y 5
            const filteredNeighbors = surrounded.filter(
                (coordinate) =>
                    coordinate[0] >= 0 &&
                    coordinate[0] < array.length &&
                    coordinate[1] >= 0 &&
                    coordinate[1] < array.length
            );

            //contador de celulas vivas alrededor de vivas y muertos
            for (const coordinate of filteredNeighbors) {
                if (array[coordinate[0]][coordinate[1]] === 1) {
                    livingCellsBeside = livingCellsBeside + 1;
                }
            }

            // condiciones de vida o muerte
            if (array[myCoordinates[0]][myCoordinates[1]] === 1) {
                if (livingCellsBeside < 2 || livingCellsBeside > 3) {
                    newArray[myCoordinates[0]][myCoordinates[1]] = 0;
                } else if (livingCellsBeside === 2 || livingCellsBeside === 3) {
                    newArray[myCoordinates[0]][myCoordinates[1]] = 1;
                }
            } else if (array[myCoordinates[0]][myCoordinates[1]] === 0) {
                if (livingCellsBeside === 3) {
                    newArray[myCoordinates[0]][myCoordinates[1]] = 1;
                }
            }
        }
    }
    return newArray;
};

//console.log(array);
