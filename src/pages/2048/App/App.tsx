import React, { FC, useCallback, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import Box from '../components/Box';
import Control from '../components/Control/Control';
import GameBoard from '../components/GameBoard';
import ScoreBoard from '../components/ScoreBoard';
import Text from '../components/Text';
import useGameBoard from '../hooks/useGameBoard';
import useGameScore from '../hooks/useGameScore';
import useGameState, { GameStatus } from '../hooks/useGameState';
import useScaleControl from '../hooks/useScaleControl';
import { GRID_SIZE, MIN_SCALE, SPACING, GRID_SIZE_MOBILE } from '../utils/constants';
import useLocalStorage from '../hooks/useLocalStorage';
import { ThemeName } from '../themes/types';
import useTheme from '../hooks/useTheme';
import { canGameContinue, isWin } from '../utils/rules';
import { useMediaQuery } from 'react-responsive'


export type Configuration = {
  theme: ThemeName;
  bestScore: number;
  rows: number;
  cols: number;
};

const APP_NAME = 'react-2048';

export const App: FC = () => {

  useEffect(() => {
    window.scroll(0,0)
  }, [])

  const [gameState, setGameStatus] = useGameState({
    status: 'running',
    pause: false,
  });

  const [config, setConfig] = useLocalStorage<Configuration>(APP_NAME, {
    theme: 'default',
    bestScore: 0,
    rows: MIN_SCALE,
    cols: MIN_SCALE,
  });

  const [{ name: themeName, value: themeValue }, setTheme] = useTheme(
    config.theme,
  );

  const [rows, setRows] = useScaleControl(config.rows);
  const [cols, setCols] = useScaleControl(config.cols);
  const isTabletOrBigger = useMediaQuery({ minWidth: 768 })

  const { total, best, addScore, setTotal } = useGameScore(config.bestScore);

  const { tiles, grid, onMove, onMovePending, onMergePending } = useGameBoard({
    rows,
    cols,
    gameState,
    addScore,
  });

  const onResetGame = useCallback(() => {
    setGameStatus('restart');
  }, [setGameStatus]);

  const onCloseNotification = useCallback(
    (currentStatus: GameStatus) => {
      setGameStatus(currentStatus === 'win' ? 'continue' : 'restart');
    },
    [setGameStatus],
  );

  if (gameState.status === 'restart') {
    setTotal(0);
    setGameStatus('running');
  } else if (gameState.status === 'running' && isWin(tiles)) {
    setGameStatus('win');
  } else if (gameState.status !== 'lost' && !canGameContinue(grid, tiles)) {
    setGameStatus('lost');
  }

  useEffect(() => {
    setGameStatus('restart');
  }, [rows, cols, setGameStatus]);

  useEffect(() => {
    setConfig({ rows, cols, bestScore: best, theme: themeName });
  }, [rows, cols, best, themeName, setConfig]);

  return (
    <div className="md:mt-20">
      <GlobalStyle />
      <ThemeProvider theme={themeValue}>
        <Box
          justifyContent="center"
          inlineSize="100%"
          blockSize="100%"
          alignItems="start"
          borderRadius={0}
        >
          <Box
            justifyContent="center"
            flexDirection="column"
            inlineSize={`${GRID_SIZE}px`}
          >
            <Box
              inlineSize="100%"
              justifyContent="space-between"
              marginBlockStart="s2"
              marginBlockEnd="s2"
            >
                <Box inlineSize="100%">
                  <Control
                    onReset={onResetGame}
                  />
                </Box>
                <ScoreBoard total={total} title="pont" />
                <ScoreBoard total={best} title="top" />
            </Box>
            <GameBoard
              tiles={tiles}
              boardSize={isTabletOrBigger ? GRID_SIZE : GRID_SIZE_MOBILE}
              rows={rows}
              cols={cols}
              spacing={SPACING}
              gameStatus={gameState.status}
              onMove={onMove}
              onMovePending={onMovePending}
              onMergePending={onMergePending}
              onCloseNotification={onCloseNotification}
            />
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default App;
