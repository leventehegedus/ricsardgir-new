import { useState, useEffect } from 'react';

export const SlidingTileGame: React.FC = props => {

  const [size, setSize] = useState(4);
  const [puzzle, setPuzzle] = useState<number[][]>([]);
  const [solution, setSolution] = useState<number[][]>([]);

  useEffect(() => {
    generatePuzzle(size);
    generateSolution(size);
  }, [])

  const generateNumbers = (size: number): number[] => {
    let numbersArray: number[] = [];
    for (let i = 0; i < size; i++) {
      numbersArray.push(i + 1);
    }
    return numbersArray;
  }


  const getInvCount = (arr: number[][]): number => {
    let inv_count = 0;
    let flatArray = arr.flat();
    for (let i = 0; i < size * size - 1; i++) {
      for (let j = i + 1; j < size * size; j++) {
        if (flatArray[j] && flatArray[i] && flatArray[i] > flatArray[j])
          inv_count++;
      }
    }
    return inv_count;
  }

  // find Position of blank from bottom
  const findXPosition = (puzzle: number[][]) => {
    // start from bottom-right corner of matrix
    for (let i = size - 1; i >= 0; i--) {
      for (let j = size - 1; j >= 0; j--) {
        if (puzzle[i][j] === 0) {
          return size - i;
        }
      }
    }
  }


  const checkIfSolvable = (puzzle: number[][]): boolean => {
    {
      let invCount = getInvCount(puzzle);

      if (size % 2 === 1) {
        return !(invCount % 2 === 1);
      } else {
        let pos = findXPosition(puzzle) || 0;
        if (pos % 2 === 1) {
          return !(invCount % 2 === 1);
        } else {
          return invCount % 2 === 1;
        }
      }
    }
  }
  const generatePuzzle = (size: number): void => {

    const numbers = generateNumbers(size ** 2 - 1);
    const random = shuffleArray(generateNumbers(size ** 2 - 1));
    if (JSON.stringify(random) === JSON.stringify(numbers)) {
      generatePuzzle(size);
    }

    random.push(0);
    const puzzle = [];

    while (random.length) {
      puzzle.push(random.splice(0, size));
    }
    setPuzzle(puzzle);
    if (!checkIfSolvable(puzzle)) {
      generatePuzzle(size);
    }
  };

  const generateSolution = (size: number): void => {
    const numbers = generateNumbers(size ** 2 - 1);
    numbers.push(0);
    const solution = [];

    while (numbers.length) {
      solution.push(numbers.splice(0, size));
    }

    setSolution(solution)
  };

  const shuffleArray = (array: number[] = []): number[] => {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  const handleClick = (value: number, x: number, y: number) => {
    const mypuzzle: number[][] = puzzle.map(row => row.slice());
    if (mypuzzle[y][x - 1] === 0) {
      mypuzzle[y][x - 1] = value;
    } else if (mypuzzle[y][x + 1] === 0) {
      mypuzzle[y][x + 1] = value;
    } else if (mypuzzle[y - 1] && mypuzzle[y - 1][x] === 0) {
      mypuzzle[y - 1][x] = value;
    } else if (mypuzzle[y + 1] && mypuzzle[y + 1][x] === 0) {
      mypuzzle[y + 1][x] = value;
    } else {
      return;
    }

    mypuzzle[y][x] = 0;
    if (JSON.stringify(mypuzzle) === JSON.stringify(solution)) {
      setTimeout(() => alert('Te sem vagy hétköznapi!'), 100);
      setTimeout(() => newPuzzle(), 5000);
    }
    console.log(getInvCount(mypuzzle));
    setPuzzle(mypuzzle);
  };

  const newPuzzle = () => {
    generatePuzzle(size);
    generateSolution(size);
  };

  return (
    <div className="w-[300px] h-[300px]">
      {
        puzzle && puzzle.map((rows, y) => {
          return (
            <div className="w-full flex" key={y}>
              {
                rows.map((value, x) => {
                  return (
                    <div className="w-[75px] h-[75px] flex justify-center items-center cursor-pointer text-white border border-black" key={x} onClick={() => handleClick(value, x, y)}>
                      {value !== 0 ?
                        <>
                          <img className="h-full w-full object-cover object-center" src={`/tilitoli/${props.folder}/row-${Math.ceil(value / size)}-column-${value % size === 0 ? size : value % size}.png`} />
                        </>
                        :
                        <span className="text-white text-center">rakj ki!</span>
                      }
                    </div>
                  )
                })}
            </div>
          )
        })}
    </div>
  );
}

export default SlidingTileGame;
